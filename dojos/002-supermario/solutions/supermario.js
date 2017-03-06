'use strict';

function do1Up(mario) {
    mario.life++;
}

function doStar(mario) {
    mario.godMode = 3; // find Tamas for anwers;
}

function doMushroom(mario) {
    mario.superState = true;
}

function doEnemy(mario) {
    if(!mario.godMode){
        if(mario.superState){
            mario.superState = false;
        } else {
            mario.life--;
        }
    }     
}

function doCoin(mario, coins) {
    mario.coins += coins;
    if (mario.coins >= 100){
        let numberOfLifes = Math.floor(mario.coins / 100);
        mario.life += numberOfLifes;
        mario.coins -= numberOfLifes * 100;
    }
}

module.exports = (storyBoard) => {

    let mario = {
        life : 3,
        coins: 0,
        superState: false,
        godMode: 0
    }

    const steps = storyBoard.split(' ');

    for (let i = 0; i < steps.length; i++) {
        const step = steps[i];

        if (!step) continue;

        if (mario.godMode > 0) {
            mario.godMode--;
        }

        switch (step) {
            case 'koopa':
            case 'goomba':
            case 'piranha':
                doEnemy(mario);
                break;
            case '1Up':
                do1Up(mario);
                break;
            case 'Star':
                doStar(mario);
                break;
            case 'Mushroom':
                doMushroom(mario);
                break;
            case 'Princess':
            case 'Bowser':
                return 'WIN';
            default:
                doCoin(mario, parseInt(step));
        }

        if (!mario.life) return 'GAME OVER';
        
    }

    return '???';
}