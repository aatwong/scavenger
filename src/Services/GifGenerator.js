

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
    'https://gfycat.com/ifr/ActualRigidAltiplanochinchillamouse',
    'https://gfycat.com/ifr/HardtofindFarflungCrownofthornsstarfish',
    'https://gfycat.com/ifr/GregariousCavernousCrownofthornsstarfish',
    'https://gfycat.com/ifr/DeafeningSlowAngelfish',
    'https://gfycat.com/ifr/DefiniteGlitteringInexpectatumpleco',
    'https://gfycat.com/ifr/ViciousUncomfortableJunebug',
    'https://gfycat.com/ifr/HastyKeenHake',
    'https://gfycat.com/ifr/MadeupLazyLarva',
    'https://gfycat.com/ifr/InfantileWhimsicalAfricancivet'
]

const failGifs = [
    'https://gfycat.com/ifr/PreciousFirmJaeger',
    'https://gfycat.com/ifr/YellowishColorlessAfricanbushviper',
    'https://gfycat.com/ifr/WhiteFineCero',
    'https://gfycat.com/ifr/RealisticVagueArgusfish',
    'https://gfycat.com/ifr/HighlevelVeneratedEider',
    'https://gfycat.com/ifr/ThinPlaintiveGyrfalcon'
]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
