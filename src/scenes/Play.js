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
        this.load.spritesheet('Ant', 'assets/AntSpritesheet.png', {frameWidth: 150, frameHeight: 271});
    }

    create(){
        this.runSpeed = -300;

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
            frames: this.anims.generateFrameNumbers('Ant', {
                start: 1, end: 4
            }),
            frameRate: 7,
            repeat: -1
        });
        // Jumping Ant Animation.
        this.anims.create({
            key: 'AntJumping',
            frames: this.anims.generateFrameNumbers('Ant', {
                start: 5, end: 6
            }),
            frameRate: 10
        });
        // Falling Ant Animation.
        this.anims.create({
            key: 'AntFalling',
            frames: this.anims.generateFrameNumbers('Ant', {
                start: 0, end: 0
            }),
            frameRate: 9
        });
        // Dying by spider Animation.
        this.anims.create({
            key: 'AntWebbed',
            frames: this.anims.generateFrameNumbers('Ant', {
                start: 7, end: 11
            }),
            frameRate: 9
        });
        

        // Make a platform.
        this.platformGroup = this.physics.add.group();
        for (let i = 0; i < 10; i++) {
            // Add platform.
            let platform = this.physics.add.sprite(600*i + 100, 420, 'Platform');

            // Change hitbox of platform.

            this.platformGroup.add(platform);

            // Don't let ant push platforms down.
            platform.body.immovable = true;
            platform.body.allowGravity = false;

            // We 
            platform.setVelocityX(this.runSpeed);
        }

        this.antP1 = new Ant(this, 100, 340, 'Ant');
        this.antP1.setGravityY(600);
        this.antP1.setScale(0.35,0.35);
        this.physics.add.collider(this.antP1, this.platformGroup);


        // Create spiders.
        this.enemiesGroup = this.physics.add.group();
        for (let i = 0; i < 10; i++) {
            let enemy = this.physics.add.sprite(1000*i,this.antP1.y,'Pause');
            this.enemiesGroup.add(enemy);
            enemy.setVelocityX(this.runSpeed);
        }
        this.physics.add.collider(this.antP1, this.enemiesGroup, null, this.touchedEnemy, this);








        //player sprite
        // this.player = new Player (this,
        //     game.config.width / 2,
        //     game.config.height - borderUISize - borderPadding,
        //     "player"); //adjust to sprite name
    }

    update(){
        this.GPBG.tilePositionX += 1;
        // this.starfield.tilePositionX -= 4; //replace with actual background

        this.antP1.update();


        // If you are touching the platform and you press space.
        if ((Phaser.Input.Keyboard.JustDown(keySPACE)) 
        && (this.antP1.body.touching.down)) {
            this.antP1.jump = true;
            this.antP1.setVelocityY(-500);
            this.antP1.anims.play('AntJumping');
            this.time.delayedCall(800, () => {
                this.antP1.jump = false;
            }, null, this);
        }

        // If you are only touching the platform.
        else if (this.antP1.body.touching.down) {
            this.antP1.anims.play('AntRunning', true);
        }

        // If you are not touching the platform.
        else {
            if (!this.antP1.jump) {
                this.antP1.anims.play('AntFalling');
            }
        }

        // If you are pressing space AND you are touching the platform...
        
        
        /*
        if (this.antP1.isOffScreen()) {
            this.GPBG.tilePositionX -= 1;
            this.time.delayedCall(1500, () => {
                this.scene.start("gameoverScene");
            }, null, this);
        }
        */
    }

    touchedEnemy(ant, enemy) {
        this.GPBG.tilePositionX -= 1;
        ant.anims.play('AntWebbed');
        this.time.delayedCall(3000, () => {
            this.scene.start("gameoverScene");
        }, null, this);
        
        this.enemiesGroup.remove(enemy);
    }
}