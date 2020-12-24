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
    // Used for Sumer/Mihir 30th birthday
    {
        thing: "Coffee maker",
        clue: "Rise and shine, it's time for me to grind. If I don't deliver, bodies may quiver.",
        code: "CFM",
        audioLink: ""
    },
    {
        thing: "Garage mirror",
        clue: "Mirror mirror on the wall, who's the fittest of them all? Is it Sandy baby or Sharki, Sumer, Mihir, or Eshki?",
        code: "MRG",
        audioLink: ""
    },
    {
        thing: "TEDx Intuit sign",
        clue: "Technology, entertainment, design. My name is on a sign. I showed face at Intuit to help listeners pursue (it).",
        code: "SIT",
        audioLink: ""
    },
    {
        thing: "Horse believe your dreams poster",
        clue: "Believe in yourself and achieve your dreams..says unicorn posters and memes.",
        code: "PDH",
        audioLink: ""
    },
    {
        thing: "Bead curtains",
        clue: "Hanging from the ceiling, I've been jingling a long time. I'm ready to alert Esha if there's a suspicious crime.",
        code: "BCT",
        audioLink: ""
    },
    {
        thing: "Stereo in parents' room",
        clue: "Three score and three years ago, I hit my prime. But then I became irrelevant and replaced by cassettes, then CDs, then DVDs, and now the digital music of Amazon Prime.",
        code: "STP",
        audioLink: ""
    },
    {
        thing: "God calendars in parents' room",
        clue: "I used to accurately provide the day and date, but time passed me by. Now I just hang pretty and tall, giving auspicious religious vibes to all.",
        code: "GCR",
        audioLink: ""
    },
    {
        thing: "Dark knight trilogy posters",
        clue: "I am your knight on darkened days, I protect you from the god's malaise. My name, in fact, consists of three parts, To figure me out, use your smarts.",
        code: "DKT",
        audioLink: ""
    },
    {
        thing: "TBD - Cal basketball hoop in mihir's room",
        clue: "",
        code: "",
        audioLink: ""
    },
    {
        thing: "Greek statues at top the staircase",
        clue: "Up upon the mountain, we lay, perched stationary all day. We are guarded by pretty gate, so our leaving wouldn't make any sense.",
        code: "GSS",
        audioLink: ""
    },
    {
        thing: "TBD - living room couch covers",
        clue: "",
        code: "",
        audioLink: ""
    },
    {
        thing: "TBD - ",
        clue: "",
        code: "",
        audioLink: ""
    },
    // Used for Pinetop Mini Scavenger Hunt
    // {
    //     thing: "Coffee maker",
    //     clue: "Rise and shine, it's time for me to grind. If I don't deliver, bodies may quiver.",
    //     code: "CFM",
    //     audioLink: ""
    // },
    // {
    //     thing: "Friends are forever portrait",
    //     clue: "Wiff waff, I will have buddies, forever.",
    //     code: "FAR",
    //     audioLink: ""
    // },
    // {
    //     thing:"Almond Flour",
    //     clue: "Frattycakes frattycakes, baker's man. Bake Frat a cake as fast you can. Some prefer the regular old stuff, but Frattycakes prefers me - pretty in blue, slim, and pairing nicely with ghee.",
    //     code: "ALF",
    //     audioLink: "https://soundcloud.com/esha-joshi-1/almond-flour-1/s-Io28s7T6VRp?in=esha-joshi-1/sets/frat-mini-scavenger-hunt-audio-files-1/s-ves3glIEVyz"
    // },
    // {
    //     thing: "Vaseline",
    //     clue: "69 69 69... I will help you get in the behind. But you may not find me near a bed, so seek out my jelly friend instead.",
    //     code: "SSA",
    //     audioLink: ""
    // },
    // {
    //     thing: "Red speaker",
    //     clue: "If you start me up, if you start me up I'll never stop. You make a grown man cry.",
    //     code: "RSP",
    //     audioLink: "https://soundcloud.com/esha-joshi-1/start-me-up/s-cntMZzCYn7q?in=esha-joshi-1/sets/frat-mini-scavenger-hunt-audio-files-1/s-ves3glIEVyz"
    // },
    // {
    //     thing: "AZ mug in the cupboard",
    //     clue: "Accessible from the inside, accessible from the outside. Drink out of me while paying tribute to A-Z",
    //     code: "AZM",
    //     audioLink: "https://soundcloud.com/esha-joshi-1/az-mug-in-cupboard-1/s-5WdQSCBnm3e?in=esha-joshi-1/sets/frat-mini-scavenger-hunt-audio-files-1/s-ves3glIEVyz"
    // },
    // {
    //     thing: "Yen's random hole in her room",
    //     clue: "I am a rocky hole in the wall, oh so small. A human can fit inside me, come on y'all!",
    //     code: "YHW",
    //     audioLink: ""
    // },
    // {
    //     thing: "Gym mirror",
    //     clue: "Mirror mirror on the wall, who's the fittest of them all? Is it YFK or Vbooze, Frattycakes or Ebooze?",
    //     code: "MRG",
    //     audioLink: ""
    // },
    // {
    //     thing: "Guzeman place in the garage",
    //     clue: "You snooze, you lose. But would you ever guze(man)?",
    //     code: "MAG",
    //     audioLink: "https://soundcloud.com/esha-joshi-1/guzeman-place/s-YFwy74VPzIY?in=esha-joshi-1/sets/frat-mini-scavenger-hunt-audio-files-1/s-ves3glIEVyz"
    // },
    // {
    //     thing: "Green plastic watering can on the attic stairwell",
    //     clue: "As folks descends, they can use me to mend the green broken by a myriad of pastel colors. What trickles out can combat the drought - I'm held up by gloved and nurturing hands.",
    //     code: "PWC",
    //     audioLink: ""
    // },
    // {
    //     thing: "Hanging wall canoe",
    //     clue: "Most would say I’m a useless canoe, taking up space for a book or two, but you can't pick me up and put me aside, so it's easier to open your eyes to find the clue that I hide.",
    //     code: "HWC",
    //     audioLink: ""
    // },
    // {
    //     thing: "3 Bears clock in kitchen",
    //     clue: "At the butt crack of dawn, Esha is racing against time. She must eat up before her stand-up. 'Ahh, this porridge is just right!'. That, my friend, is a delight.",
    //     code: "BGL",
    //     audioLink: ""
    // },
    // {
    //     thing: "Fake black cat on the ground",
    //     clue: "I'm hungry. There's meat for me to eat. Too bad my first attack was trapped and taken out. Next time I'll improve, but first I need to figure out how to move.",
    //     code: "GBC",
    //     audioLink: ""
    // },
    // {
    //     thing: "Skis on the wall",
    //     clue: "Some say I have aged and cannot perform well, but I do give support on the sleet. I'm all about protecting your feet.",
    //     code: "WLS",
    //     audioLink: ""
    // },
    // {
    //     thing: "Hanging outside wind chimes",
    //     clue: "",
    //     code: "OWC",
    //     audioLink: "https://soundcloud.com/esha-joshi-1/wind-chimes/s-aHJ7kAzaQK3?in=esha-joshi-1/sets/frat-mini-scavenger-hunt-audio-files-1/s-ves3glIEVyz"
    // },
    // {
    //     thing: "Broken lock box outside",
    //     clue: "I am supposed to be secure but I'm broken right now so I'd love to be fixed by someone with the know-how.",
    //     code: "LBO",
    //     audioLink: ""
    // },
    // {
    //     thing: "Internet / MiFi",
    //     clue: "When I'm goneeee, when I'm goneee, you're going to miss me when I'm gone. You're gonna to miss my high speed, you're gonna miss my generous connection when the default one is weak, you're sure gonna miss the teledata (comms) that it breeds.",
    //     code: "FIM",
    //     audioLink: "https://soundcloud.com/esha-joshi-1/internet-mifi/s-El9OzXtK8rE?in=esha-joshi-1/sets/frat-mini-scavenger-hunt-audio-files-1/s-ves3glIEVyz"
    // },
]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}