class Play extends Phaser.Scene {
    constructor(){
        super("playScene");
    }

    preload() {
        // Load background and play assets.
        this.load.image('GPBackground01', '../../assets/GPBackground01.png');
        this.load.image('Pause', '../../assets/PauseButton.png');

        // Load player sprites.
        this.load.image('AntRunning', 'assets/AntRunSequence.gif');
        this.load.image('AntFalling', 'assets/AntFalling.gif');
    }

    create(){
        // Define keys.
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // Define background.
        this.GPBG = this.add.tileSprite(0, 0, 780, 440,
            'GPBackground01').setOrigin(0, 0);
        this.pause = this.add.image(720, 50, 'Pause');

        // Put running ant on screen.
        this.antP1 = new Ant(this, 0, 0, 'AntRunning').setOrigin(0.5,0);

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