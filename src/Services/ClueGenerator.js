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
        code: "TRD"
    },
    {
        thing: "Laundry chute door",
        clue: "Open my door on another floor, and your dirty clothes will be clean once more.",
        code: "LCH"
    },
    {
        thing: "Uno",
        clue: "Reverse, draw four, skip and some more. There is only one game so hard core.",
        code: "ONE"
    },
    {
        thing: "Pool Table",
        clue: "I’ve got more balls than all the women in this house combined.",
        code: "PLT"
    },
    {
        thing: "Eshas bedside table",
        clue: "Day and night I sit here between two beds. But I’d rather hold a Bible in a Hilton instead.",
        code: "BTB"
    },
    {
        thing: "Light Bulb spares in laundry room",
        clue: "Edison invented us. or did he? We dream of shining bright someday.",
        code: "LIT"
    },
    {
        thing: "Circuit breaker",
        clue: "You might blow a fuse looking for me. Fortunately, I’m where you look when a fuse blows.",
        code: "CBR"
    },
    {
        thing: "Rocking chair",
        clue: "I am the least stable chair around, I am hoping it'll take awhile to be found.",
        code: "RCK"
    },
    {
        thing: "Yen’s bathroom mat",
        clue: "Every few hours, this person showers. Then steps on me.",
        code: "SHO"
    },
    {
        thing: "OJ Juicer",
        clue: "I bear no fruit, like the spruce, but pull my branch and I’ll give you juice. ",
        code: "OJS"
    },
    {
        thing: "Water heater",
        clue: "That shower not warm enough for you? You can blame me for that. ",
        code: "WAH"
    },
    {
        thing: "Game Freezer",
        clue: "You might be game for me, as I was game for you, but in this house, I’m forbidden food.",
        code: "FRZ"
    },
    {
        thing: "Model Canoe",
        clue: "Most would say I’m a useless canoe, taking up space for a book or two, but pick me up and put me aside, and you will uncover the clue I hide.",
        code: "CNO"
    },
    {
        thing: "Southwest Balcony Flower",
        clue: "The rising sun nourishes me, on this underrated balcony.",
        code: "SBF"
    },
    {
        thing: "Underside of Dining Table",
        clue: "While you eat, I stare at your feet.",
        code: "DTB"
    },
    {
        thing: "Loft",
        clue: "To carry your stuff here, you’ll be in a jam. But maybe my pulley system can lend you a hand?",
        code: "LOF"
    },
    {
        thing: "Thermometer",
        clue: "I’ll tell you how cold it is outside, in Fahrenheit or Celsius. You won’t even have to feel it yourself.",
        code: "THR"
    },
    {
        thing: "Wooden music stand book",
        clue: "My secrets sit open for passersby, if you know this address, that page will guide.",
        code: "MSB"
    },
    {
        thing: "Mountain Goat",
        clue: "High upon the cliffs I stood, standing there with sure-footed hooves, then some white guy shot my ass, preserved my carcas, and cut me in half!",
        code: "MGO"
    },
    {
        thing: "Fire extinguisher",
        clue: "When your pee can’t manage to extinguish it, my powerful stream will douse that shit.",
        code: "FRE"
    },
    {
        thing: "Gone Skiing Sign",
        clue: "Snowflake Skier Snowflake Snowflake",
        code: "GSK"
    },
    {
        thing: "Double wick candle",
        clue: "I am a candle with a second flame: lift me up and I’ll show the way.",
        code: "DWC"
    }
]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}