class Play extends Phaser.Scene {
    constructor(){
        super("playScene");
    }

    preload() {
        // Load background and play assets.
        this.load.image('GPBackground01', 'assets/GPBackground01.png');
        this.load.image('Pause', 'assets/PauseButton.png');

        this.load.image('Spider', 'assets/Spider.png');

        // Load platform.
        this.load.image('Platform', 'assets/Platform.png');

        // Load fruit.
        this.load.image('Fruit', 'assets/Fruit.png');

        // Load player spritesheet for running.
        this.load.spritesheet('Ant', 'assets/AntSpritesheet.png', {frameWidth: 150, frameHeight: 271});

        // Load platform.
        this.load.image('Platform', 'assets/Platform.png');
    }

    create(){
        this.runSpeed = -300;
        score = 0;
        distance = 0;
        this.lastPlatDist = 0;
        beatHighScore = false;

        // To keep track of jumping.
        this.jumpTimer = 800;

        // Define background.
        // Gameplay background.
        this.GPBG = this.add.tileSprite(0, 0, 780, 440,
            'GPBackground01').setOrigin(0, 0);
        
        
        this.pause = this.add.image(720, 50, 'Pause');
        this.pause.setInteractive();
    
        this.pause.on("pointerdown", () => {
            // this.press.visible = false;
            this.scene.pause();
            this.scene.launch('pauseScene');
        });

        this.scoreConfig = {
            fontFamily: 'Laca',
            fontSize: '35px',
            backgroundColor: '#888800',
            color: '#ffffff',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
                left: 5,
                right: 5
            },
            // fixedWidth: 100
        }
        
        this.currentScore = this.add.text(50,
            50, score, this.scoreConfig);
        this.high = this.add.text(360,
            50, highScore, this.scoreConfig);

        // Define keys.
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

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
            frameRate: 6
        });

        // Make groups.
        this.platformGroup = this.physics.add.group();
        this.fruitGroup = this.physics.add.group();
        this.enemiesGroup = this.physics.add.group();
        /*
        for (let i = 0; i < 10; i++) {
            // Add platform.
            let platform = this.physics.add.sprite(600*i + 100, 420, 'Platform');

            this.platformGroup.add(platform);

            // Don't let ant push platforms down.
            platform.body.immovable = true;
            platform.body.allowGravity = false;

            // We 
            platform.setVelocityX(this.runSpeed);
        }
        */

        this.antP1 = new Ant(this, 100, 340, 'Ant');
        this.antP1.setGravityY(1000);
        this.antP1.setScale(0.35,0.35);
        this.physics.add.collider(this.antP1, this.platformGroup);


        // Create spiders.
        for (let i = 0; i < 10; i++) {
            let enemy = this.physics.add.sprite(1000*i + 700,this.antP1.y,'Spider');
            enemy.setScale(0.5,0.5);
            this.enemiesGroup.add(enemy);
            enemy.setVelocityX(this.runSpeed);
        }
        
        // this.physics.add.collider(this.antP1, this.enemiesGroup, null, this.touchedEnemy, this);
        this.physics.add.collider(this.antP1, this.enemiesGroup, null, this.touchedEnemy, this);






        //player sprite
        // this.player = new Player (this,
        //     game.config.width / 2,
        //     game.config.height - borderUISize - borderPadding,
        //     "player"); //adjust to sprite name
    }

    update(){
        this.antP1.update();
        this.currentScore.text = score;

        if (distance % 100 == 0) {
            let fruit = this.physics.add.sprite(distance + 700,this.antP1.y - 150,'Fruit');
            //fruit.setScale(0.01,0.01);
            fruit.setScale(0.25, 0.25);
            this.fruitGroup.add(fruit);
            fruit.setVelocityX(this.runSpeed);
        }


        
        
        if (distance + 780 > this.lastPlatDist) {
            // Add platform.
            let platform = this.physics.add.sprite(this.lastPlatDist + 100, 420, 'Platform');

            let rand = Math.floor(
                Math.random() * 
                (platform.width*2 - platform.width)
                + platform.width); 

            // The line that changes the distance between platforms.
            this.lastPlatDist += rand;


            this.platformGroup.add(platform);

            // Don't let ant push platforms down.
            platform.body.immovable = true;
            platform.body.allowGravity = false;

            platform.setVelocityX(this.runSpeed);
        }
        distance -= this.runSpeed;

        if (score > highScore) {
            highScore = score;
            beatHighScore = true;
        }
        this.high.text = highScore;


        this.jumpTimer--;
        if (this.jumpTimer <= 0) {
            this.antP1.jump = false;
        }

        // If you are touching the platform and you press space.
        if (this.isOffScreen()) {
            this.fellOffScreen();
        }

        if (!this.antP1.spidered) {
            this.GPBG.tilePositionX += 1;
            score += 10;
            if ((Phaser.Input.Keyboard.JustDown(keySPACE)) 
            && (this.antP1.body.touching.down)) {
                this.antP1.jump = true;
                this.antP1.setVelocityY(-550);
                this.antP1.anims.play('AntJumping');

                /*
                this.time.delayedCall(800, () => {
                    this.antP1.jump = false;
                }, null, this);
                */
            }

            // If you are only touching the platform.
            else if (this.antP1.body.touching.down) {
                this.antP1.anims.play('AntRunning', true);
                this.jumpTimer = 800;
            }

            // If you are not touching the platform.
            else {
                if (!this.antP1.jump) {
                    this.antP1.anims.play('AntFalling');
                }
            }
        }
    }

    touchedEnemy(ant, enemy) {
        this.GPBG.tilePositionX -= 1;
        ant.setVelocityY(0);
        for (let i = 0;
            i < this.platformGroup.children.entries.length;
            i++) {
            // Add platform.
            this.platformGroup.children.entries[i].setVelocityX(0);
        }
        for (let i = 0;
            i < this.enemiesGroup.children.entries.length;
            i++) {
            this.enemiesGroup.children.entries[i].setVelocityX(0);
        }
        ant.anims.play('AntWebbed');
        ant.spidered = true;
        this.time.delayedCall(3000, () => {
            this.scene.start("gameoverScene");
        }, null, this);
        //this.enemiesGroup.remove(enemy);
    }

    isOffScreen() {
        if (this.antP1.y > 600) {
            return true;
        }
        else if (this.antP1.y < -200) {
            return true;
        }
        else {
            return false;
        }
    }

    fellOffScreen() {
        this.GPBG.tilePositionX -= 1;
        this.fall = true;
        score -= 10;
        distance += this.runSpeed;
        this.antP1.setVelocityY(0);
        for (let i = 0;
            i < this.platformGroup.children.entries.length;
            i++) {
            // Add platform.
            this.platformGroup.children.entries[i].setVelocityX(0);
        }
        for (let i = 0;
            i < this.enemiesGroup.children.entries.length;
            i++) {
            this.enemiesGroup.children.entries[i].setVelocityX(0);
        }
        this.time.delayedCall(2000, () => {
            this.scene.start("gameoverScene");
        }, null, this);
    }
}