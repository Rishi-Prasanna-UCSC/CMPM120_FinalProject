let config = {
    type: Phaser.CANVAS,
    width: 780,
    height: 440,
    scene: [Menu, Play]
}

let game = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;



let keySPACE;
