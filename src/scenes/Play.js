class Play extends Phaser.Scene {
    constructor(){
        super("playScene");
    }

    preload() {
        // Load background and play assets.
        this.load.image('GPBackground01', 'assets/GPBackground01.png');
        this.load.image('Pause', 'assets/PauseButton.png');

        // Load platform.
        this.load.image('Platform', 'assets/Platform.png');

        // Load player spritesheet for running.
        this.load.spritesheet('AntRunning', 'assets/AntSpritesheet.png', {frameWidth: 150, frameHeight: 271});
    }

    create(){
        // Define keys.
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // Define background.
        // Gameplay background.
        this.GPBG = this.add.tileSprite(0, 0, 780, 440,
            'GPBackground01').setOrigin(0, 0);
        this.pause = this.add.image(720, 50, 'Pause');

        // Running Ant Animation.
        this.anims.create({
            key: 'AntRunning',
            frames: this.anims.generateFrameNumbers('AntRunning', {
                start: 1, end: 4
            }),
            frameRate: 7,
            repeat: -1

        });
        // Jumping Ant Animation.
        this.anims.create({
            key: 'AntJumping',
            frames: this.anims.generateFrameNumbers('AntRunning', {
                start: 5, end: 6
            }),
            frameRate: 10
        });
        // Falling Ant Animation.
        this.anims.create({
            key: 'AntFalling',
            frames: this.anims.generateFrameNumbers('AntRunning', {
                start: 0, end: 0
            }),
            frameRate: 9
        });
        

        this.antP1 = new Ant(this, 100, 280, 'AntRunning');
        this.antP1.setScale(2/3,2/3);
        this.antP1.anims.play('AntRunning');

        // Make a platform.
        this.platformGroup = this.physics.add.group();
        for (let i = 0; i < 10; i++) {
            // Add platform.
            let platform = this.physics.add.sprite(400*i + 100, 400, 'Platform');

            // Change hitbox of platform.

            this.platformGroup.add(platform);
        }









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
        this.antP1.update();

        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.antP1.jump = true;
            this.antP1.anims.play('AntJumping');
        }
        /*
        if (this.antP1.isOffScreen()) {
            this.GPBG.tilePositionX -= 1;
            this.time.delayedCall(1500, () => {
                this.scene.start("gameoverScene");
            }, null, this);
        }
        */
    }
}