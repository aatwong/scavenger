import React from 'react';
import ls from 'local-storage'
import classes from './Scavenger.css';
import CompletedClues from '../../Components/CompletedClues/CompletedClues'
import InputClue from '../../Components/InputClue/InputClue'
import { getRandomNewClue } from '../../Services/ClueGenerator'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Linking, Text } from 'react-native'

class Scavenger extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            completedClues: [],
            inProgressClue: {},
            isFinished: false,
            showConfirmEndGameModal: false
        };
        this.beginScavengerHunt = this.beginScavengerHunt.bind(this);
        this.finishCurrentClue = this.finishCurrentClue.bind(this)
        this.restartGame = this.restartGame.bind(this)
        this.clickRestart = this.clickRestart.bind(this)
    }

    componentDidMount() {
        this.setState({
            isPlaying: ls.get('isPlaying') || false,
            completedClues: ls.get('completedClues') || [],
            inProgressClue: ls.get('inProgressClue') || {},
            isFinished: ls.get('isFinished') || false,
            showConfirmEndGameModal: ls.get('showConfirmEndGameModal') || false
        })
    }

    beginScavengerHunt() {
        const firstClue = getRandomNewClue();
        console.log(firstClue);
        this.setState({inProgressClue: firstClue, isPlaying: true}, () => {
            ls.set('inProgressClue', firstClue)
            ls.set('isPlaying', true)
            ls.set('isFinished', false)
        });
    }

    finishCurrentClue() {
        const updatedCompletedClues = this.state.completedClues;
        updatedCompletedClues.unshift(this.state.inProgressClue);
        console.log(updatedCompletedClues)
        this.setState({completedClues: updatedCompletedClues}, () => {
            ls.set('completedClues', updatedCompletedClues)
            this.getNextClue()
        })
    }

    getNextClue() {
        const nextClue = getRandomNewClue(this.state.completedClues);
        console.log(nextClue);
        if (nextClue === 'none') {
            this.setState({isFinished: true}, () => {
                ls.set('isFinished', true)
            })
        } else {
            this.setState({inProgressClue: nextClue}, () => {
                ls.set('inProgressClue', nextClue)
            });
        }
    }

    restartGame() {
        this.setState({isPlaying: false, completedClues: [], inProgressClue: {}, isFinished: false, showConfirmEndGameModal: false})
        ls.set('isPlaying', false);
        ls.set('completedClues', []);
        ls.set('inProgressClue', {});
        ls.set('isFinished', false);
        ls.set('showConfirmEndGameModal', false)
    }

    clickRestart() {
        this.setState({showConfirmEndGameModal: true})
    }

    playAudio() {
        // const audioElement = document.getElementsByClassName("audio-element")[0]
        const mp3File = document.getElementsByClassName("audio-element")[0]
        console.log(mp3File)

        const audioElement = new Audio(mp3File);
        audioElement.play()
    }

    render() {
        let currentClue = null;

        if (this.state.isPlaying === false) {
            currentClue = (
                <div>
                    <button onClick={this.beginScavengerHunt}>Play</button>
                </div>

            )
        } else if (this.state.isFinished) {
            currentClue = (
                <div>
                    {/* <img src="http://i.stack.imgur.com/SBv4T.gif" alt="this slowpoke moves"  width='250'/> */}
                    <iframe title='Great Success' src='https://gfycat.com/ifr/TemptingResponsibleKatydid' frameborder='0' scrolling='no' allowfullscreen width='300' height='250'></iframe>
                    <br />
                    <strong>CONGRATULATIONS! YOU HAVE COMPLETED THE WILD GOOSE CHASE.</strong><br /><i>Find Frat for instructions on final challenge.</i>
                </div>
            )
        } else {
            const audioLinkMessage = 'Click here to listen to the audio clue. (Wear headphones or listen in private place)'

            currentClue = this.state.inProgressClue.audioLink === "" ? (
                <div>
                    <strong><i>{this.state.inProgressClue.clue}</i></strong>
                </div>
            ) : (
                <div>
                    <Text onPress={ () => Linking.openURL(this.state.inProgressClue.audioLink, '_blank') }>
                        {audioLinkMessage}
                    </Text> 
                    <strong><i>{this.state.inProgressClue.clue}</i></strong>
                </div>
            );
        }

                    // <strong>href={audioLinkMessage}</strong>
                    //      <strong>{}
                    // <div>
                    //     <button onClick={this.playAudio}>
                    //         <span>Play Audio</span>
                    //     </button>
                    //     <audio controls className="audio-element">
                    //         <source src={this.state.inProgressClue.audioLink}></source>
                    //     </audio>
                    // </div>

        let body = null;
        if (this.state.isPlaying) {
            body = (
                <div className={classes.body}>
                    <InputClue 
                        currentClue={this.state.inProgressClue}
                        finishCurrentClue={this.finishCurrentClue}
                        isFinished={this.state.isFinished}/>
                    <br />
                    <br />
                    <CompletedClues completedClues={this.state.completedClues} />
                    <br />
                    <br />

                    <button onClick={this.clickRestart}>new game</button>
                </div>
            )
        }
        
        return (
            <div className={classes.wrapper}>
                <br />
                <h2>The Companion App</h2>
                <br />
                    {currentClue}
                <br />
                <br />
                    {body}
                <br />
                <br />

                <a target="_blank" rel="noreferrer noopener" href="https://docs.google.com/document/d/1UX1-mm4LxNbf63WmVrL1srUiVQDPERLNcXIUWQqVIsI/edit?usp=sharing">Rules and Instructions</a>

                <Modal
                    show={this.state.showConfirmEndGameModal}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Are you sure you want to end this?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <p>You won't be able to recover the clues you have solved.</p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={() => {this.setState({showConfirmEndGameModal: false})}}>
                        No, keep me in this
                    </Button>
                    <Button variant="danger" onClick={() => {this.restartGame()}}>
                        Yes, I quit
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Scavenger
