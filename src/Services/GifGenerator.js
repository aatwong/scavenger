

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
    'https://gfycat.com/ifr/DefiniteGlitteringInexpectatumpleco'
]

const failGifs = [
    'https://gfycat.com/ifr/PreciousFirmJaeger',
    'https://gfycat.com/ifr/YellowishColorlessAfricanbushviper',
    'https://gfycat.com/ifr/WhiteFineCero',
    'https://gfycat.com/ifr/RealisticVagueArgusfish'
]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

{/* <iframe src='https://gfycat.com/ifr/DefiniteGlitteringInexpectatumpleco' frameborder='0' scrolling='no' allowfullscreen width='640' height='391'></iframe><p> <a href="https://gfycat.com/definiteglitteringinexpectatumpleco">via Gfycat</a></p> */}
{/* <div class="tenor-gif-embed" data-postid="18651213" data-share-method="host" data-width="100%" data-aspect-ratio="1.0"><a href="https://tenor.com/view/dancing-borat-subsequent-moviefilm-borat-dance-ayye-gif-18651213">Dancing Borat Subsequent Moviefilm GIF</a> from <a href="https://tenor.com/search/dancing-gifs">Dancing GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script> */}
// https://media1.tenor.com/images/539c62c3425aea3afdbe0ef0f4c08c7d/tenor.gif