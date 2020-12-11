// returns a random clue that hasnt been solved

export const getRandomNewClue = (completedCluesArr = []) => {
    if (completedCluesArr.length > 0) {
        const todoClues = [];
        clueList.forEach((todoClue) => {
            let isDone = false;
            completedCluesArr.forEach((comClue) => {
                if (todoClue.code === comClue.code) {
                    isDone = true;
                }
            })
            if (!isDone) {
                todoClues.push(todoClue);
            }
            isDone = false
        })
        if (todoClues.length > 0) {
            return todoClues[getRandomInt(todoClues.length)];
        } else {
            return 'none';
        }
    } else {
        return clueList[getRandomInt(clueList.length)];
    }
}

const clueList = [
    {
        thing: "Treadmill",
        clue: "Don’t run here if you’re being chased, for all your energy will go to waste.",
        code: "TRD",
        audioLink: "there is audio",
    },
    {
        thing: "Laundry chute door",
        clue: "Open my door on another floor, and your dirty clothes will be clean once more.",
        code: "LCH",
        audioLink: "",
    },
    {
        thing: "Uno",
        clue: "Reverse, draw four, skip and some more. There is only one game so hard core.",
        code: "ONE",
        audioLink: "there is audio",
    }
]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}