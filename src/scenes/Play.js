class Play extends Phaser.Scene {
    constructor(){
        super("playScene");
    }

    preload() {
        this.load.image('GPBackground01', '../../assets/GPBackground01.png');
    }

    create(){
        // Define keys.
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // Define background.
        this.GPBG = this.add.image(780, 220, 'GPBackground01');

        //player sprite
        // this.player = new Player (this,
        //     game.config.width / 2,
        //     game.config.height - borderUISize - borderPadding,
        //     "player"); //adjust to sprite name
    }

    update(){
        // this.starfield.tilePositionX -= 4; //replace with actual background

        //jump
        // if (Phaser.Input.Keyboard.JustDown(keySPACE)){
        //     //may need to be moved to player class
        //     //fill code with jump
        //     console.log("jumping!"); 
        // }
    }
}