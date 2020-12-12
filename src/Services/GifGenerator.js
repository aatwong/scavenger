

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
    'https://gfycat.com/ifr/HastyKeenHake',
    'https://gfycat.com/ifr/MadeupLazyLarva',
    'https://gfycat.com/ifr/InfantileWhimsicalAfricancivet',
    'https://gfycat.com/lawfullavishammonite',
    'https://gfycat.com/admiredunfitemu',
    'https://gfycat.com/frayedflashyjoey-success-great-success',
    'https://gfycat.com/cheeryspitefulblueandgoldmackaw-oprah-winfrey-success-happy-yes-celebrate'
]

const failGifs = [
    'https://gfycat.com/ifr/PreciousFirmJaeger',
    'https://gfycat.com/ifr/YellowishColorlessAfricanbushviper',
    'https://gfycat.com/ifr/WhiteFineCero',
    'https://gfycat.com/infatuatedwideeyedayeaye',
    'https://gfycat.com/entiresecondanteater',
    'https://gfycat.com/skeletalpoliticalghostshrimp-gregory-bauge-speedwobbles-kevin-sireau'

]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
