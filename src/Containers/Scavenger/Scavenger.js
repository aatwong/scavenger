import React from 'react';
import ls from 'local-storage'
import classes from './Scavenger.css';
import CompletedClues from '../../Components/CompletedClues/CompletedClues'
import InputClue from '../../Components/InputClue/InputClue'
import { getRandomNewClue } from '../../Services/ClueGenerator'

class Scavenger extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            completedClues: [],
            inProgressClue: {},
            isFinished: false
        };
        this.beginScavengerHunt = this.beginScavengerHunt.bind(this);
        this.finishCurrentClue = this.finishCurrentClue.bind(this)
        this.restartGame = this.restartGame.bind(this)
    }

    componentDidMount() {
        this.setState({
            isPlaying: ls.get('isPlaying') || false,
            completedClues: ls.get('completedClues') || [],
            inProgressClue: ls.get('inProgressClue') || {},
            isFinished: ls.get('isFinished') || false
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
        this.setState({isPlaying: false, completedClues: [], inProgressClue: {}, isFinished: false})
        ls.set('isPlaying', false);
        ls.set('completedClues', []);
        ls.set('inProgressClue', {});
        ls.set('isFinished', false);
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
            currentClue = (
                <div>
                    <strong><i>{this.state.inProgressClue.clue}</i></strong>
                </div>
            )
        }

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

                    <button onClick={this.restartGame}>new game</button>
                </div>
            )
        }
        
        return (
            <div className={classes.wrapper}>
                <h1>The Official App</h1>
                    {currentClue}
                <br />
                <br />
                    {body}
            </div>
        );
    }
}

export default Scavenger
