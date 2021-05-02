class Play extends Phaser.Scene {
    constructor(){
        super("playScene");
    }

    preload() {
        this.load.image('GPBackground01', '../../assets/GPBackground01.png');
        this.load.image('Pause', '../../assets/PauseButton.png');
    }

    create(){
        // Define keys.
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // Define background.
        this.GPBG = this.add.tileSprite(0, 0, 780, 440,
            'GPBackground01').setOrigin(0, 0);
        this.pause = this.add.image(720, 50, 'Pause');

        //player sprite
        // this.player = new Player (this,
        //     game.config.width / 2,
        //     game.config.height - borderUISize - borderPadding,
        //     "player"); //adjust to sprite name
    }

    update(){
        this.GPBG.tilePositionX += 1;
        // this.starfield.tilePositionX -= 4; //replace with actual background

        //jump
        // if (Phaser.Input.Keyboard.JustDown(keySPACE)){
        //     //may need to be moved to player class
        //     //fill code with jump
        //     console.log("jumping!"); 
        // }
    }
}