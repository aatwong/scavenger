//some kind of table with completed clues. 
// takes in completed clues array of objects and renders them on the page

import React, { Component } from 'react';
import classes from './CompletedClues.css';

class CompletedClues extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        let completed = '';
        if (this.props.completedClues.length > 0) {
            completed = 'Completed:'
        } else {
            completed = ''
        }
        return (
            <div className={classes.table}>
                <h5>{completed}</h5>
                <table>
                {this.props.completedClues.map(clue => (
                    <tr key={clue.code}>
                    <td>{clue.code}</td>
                    <td>{clue.clue}</td>
                    </tr>
                ))}
                </table>
            </div>
        );
    }
}

export default CompletedClues