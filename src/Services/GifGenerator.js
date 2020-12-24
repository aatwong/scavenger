

export const getGifUrl = (theme) => {
    switch(theme) {
        case 'correctCode':
            return successGifs[getRandomInt(successGifs.length)];
        case 'incorrectCode':
            return failGifs[getRandomInt(failGifs.length)];  
        default:
          // code block
      }
}


const successGifs = [
    'https://gfycat.com/ifr/DefiniteGlitteringInexpectatumpleco',
    'https://gfycat.com/ifr/ViciousUncomfortableJunebug',
    'https://gfycat.com/frayedflashyjoey-success-great-success',
    'https://gfycat.com/ifr/CheerySpitefulBlueandgoldmackaw',
    'https://gfycat.com/ifr/AmusedSmugAiredaleterrier'
]

const failGifs = [
    'https://gfycat.com/ifr/PreciousFirmJaeger',
    'https://gfycat.com/ifr/infatuatedwideeyedayeaye',
    'https://gfycat.com/ifr/AnotherFaintBug',
    'https://gfycat.com/ifr/IllegalWellinformedGreendarnerdragonfly',
    'https://gfycat.com/ifr/DeafeningHarmoniousHyrax'
]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
