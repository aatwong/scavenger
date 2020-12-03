import React, { Component } from 'react';
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
            inProgressClue: {}
        };
        this.beginScavengerHunt = this.beginScavengerHunt.bind(this);
        this.finishCurrentClue = this.finishCurrentClue.bind(this)
    }

    componentDidMount() {
        // console.log(getRandomNewClue())
    }

    beginScavengerHunt() {
        const firstClue = getRandomNewClue();
        console.log(firstClue);
        this.setState({inProgressClue: firstClue, isPlaying: true});
    }

    finishCurrentClue() {
        console.log('fin!')
        const updatedCompletedClues = this.state.completedClues;
        updatedCompletedClues.push(this.state.inProgressClue);
        console.log(updatedCompletedClues)
        this.setState({completedClues: updatedCompletedClues}, () => {
            this.getNextClue()
        })
    }

    getNextClue() {
        const nextClue = getRandomNewClue(this.state.completedClues);
        console.log(nextClue);
        this.setState({inProgressClue: nextClue});
    }

    render() {
        let currentClue = null;
        if (this.state.isPlaying === false) {
            currentClue = (
                <div>
                    <button onClick={this.beginScavengerHunt}>Play</button>
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
                    <InputClue currentClue={this.state.inProgressClue} finishCurrentClue={this.finishCurrentClue}/>
                        <br />
                        <br />
                    <CompletedClues completedClues={this.state.completedClues} />
                </div>
            )
        }
        
        return (
            <div>
                <h1>Title</h1>
                    {currentClue}
                <br />
                <br />
                    {body}
            </div>
        );
    }
}

export default Scavenger


const clueList = [
    {
        thing: "Treadmill",
        clue: "Don’t run here if you’re being chased, for all your energy will go to waste.",
        code: "TRD"
    },
    // {
    //     thing: "Laundry chute door",
    //     clue: "LCH",
    //     code: "Open my door on another floor, and your dirty clothes will be clean once more."
    // },
    // {
    //     thing: "Uno",
    //     clue: "Reverse, draw four, skip and some more. There is only one game so hard core.",
    //     code: "ONE"
    // },
    // {
    //     thing: "Pool Table",
    //     clue: "I’ve got more balls than all the women in this house combined.",
    //     code: "PLT"
    // },
    // {
    //     thing: "Eshas bedside table",
    //     clue: "Day and night I sit here between two beds. But I’d rather hold a Bible in a Hilton instead.",
    //     code: "BTB"
    // },
    // {
    //     thing: "Light Bulb spares in laundry room",
    //     clue: "Edison invented us. or did he? We dream of shining bright someday.",
    //     code: "LIT"
    // },
    // {
    //     thing: "Circuit breaker",
    //     clue: "You might blow a fuse looking for me. Fortunately, I’m where you look when a fuse blows.",
    //     code: "CBR"
    // },
    // {
    //     thing: "Rocking chair",
    //     clue: "I am the least stable chair around, I am hoping it'll take awhile to be found.",
    //     code: "RCK"
    // },
    // {
    //     thing: "Yen’s bathroom mat",
    //     clue: "Every few hours, this person showers. Then steps on me.",
    //     code: "SHO"
    // },
    // {
    //     thing: "OJ Juicer",
    //     clue: "I bear no fruit, like the spruce, but pull my branch and I’ll give you juice. ",
    //     code: "OJS"
    // },
    // {
    //     thing: "Water heater",
    //     clue: "That shower not warm enough for you? You can blame me for that. ",
    //     code: "WAH"
    // },
    // {
    //     thing: "Game Freezer",
    //     clue: "You might be game for me, as I was game for you, but in this house, I’m forbidden food.",
    //     code: "FRZ"
    // },
    // {
    //     thing: "Model Canoe",
    //     clue: "Most would say I’m a useless canoe, taking up space for a book or two, but pick me up and put me aside, and you will uncover the clue I hide.",
    //     code: "CNO"
    // },
    // {
    //     thing: "Southwest Balcony Flower",
    //     clue: "The rising sun nourishes me, on this underrated balcony.",
    //     code: "SBF"
    // },
    // {
    //     thing: "Underside of Dining Table",
    //     clue: "While you eat, I stare at your feet.",
    //     code: "DTB"
    // },
    // {
    //     thing: "Loft",
    //     clue: "LOF",
    //     code: "To carry your stuff here, you’ll be in a jam. But maybe my pulley system can lend you a hand?"
    // },
    // {
    //     thing: "Printer",
    //     clue: "Fresh off the press, my ink won’t make a mess.",
    //     code: "PRN"
    // },
    // {
    //     thing: "Thermometer",
    //     clue: "I’ll tell you how cold it is outside, in Fahrenheit or Celsius. You won’t even have to feel it yourself.",
    //     code: "THR"
    // },
    // {
    //     thing: "Wooden music stand book",
    //     clue: "My secrets sit open for passersby, if you know this address, that page will guide.",
    //     code: "MSB"
    // },
    // {
    //     thing: "Mountain Goat",
    //     clue: "High upon the cliffs I stood, standing there with sure-footed hooves, then some white guy shot my ass, preserved my carcas, and cut me in half!",
    //     code: "MGO"
    // },
    // {
    //     thing: "Fire extinguisher",
    //     clue: "When your pee can’t manage to extinguish it, my powerful stream will douse that shit.",
    //     code: "FRE"
    // },
    // {
    //     thing: "Double wick candle",
    //     clue: "I am a candle with a second flame: lift me up and I’ll show the way.",
    //     code: "DWC"
    // }
]