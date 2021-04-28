class Play extends Phaser.Scene {
    constructor(){
        super("playScene");
    }

    preload() {
        
    }

    create(){
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        //player sprite
        // this.player = new Player (this,
        //     game.config.width / 2,
        //     game.config.height - borderUISize - borderPadding,
        //     "player"); //adjust to sprite name
    }

    update(){
        // this.starfield.tilePositionX -= 4; //replace with actual background



    }
}