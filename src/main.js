let config = {
    type: Phaser.CANVAS,
    width: 780,
    height: 440,
    scene: [Intro, Menu, Play, GameOver], // Real version of game
    // scene: [Play], // Debug
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    }
}

let game = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
let keySPACE;

let score = 0;
