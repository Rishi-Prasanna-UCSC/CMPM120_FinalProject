class Choose extends Phaser.Scene {
    constructor() {
        super("chooseScene");
    }

    preload() {
        // Load player spritesheet for running.
        this.load.spritesheet('Ant', 'assets/AntSpritesheet.png', { frameWidth: 150, frameHeight: 271 });
    }

    create() {


        this.antP1 = new Ant(this, 235, 220, 'Ant');
        this.antP1.setScale(0.5);

        this.anims.create({
            key: 'AntRunning',
            frames: this.anims.generateFrameNumbers('Ant', {
                start: 1, end: 4
            }),
            frameRate: 7,
            repeat: -1
        });
        this.antP1.anims.play('AntRunning', true);

        this.antText = {
            fontFamily: 'Courier New',
            fontSize: '20px',
            backgroundColor: '#228B22',
            padding: {
                top: 5,
                bottom: 5,
                left: 5,
                right: 5
            },
        }

        // this.flyText = {
        //     fontFamily: 'Courier New',
        //     fontSize: '20px',
        //     backgroundColor: '#228B22',
        //     padding: {
        //         top: 5,
        //         bottom: 5,
        //         left: 5,
        //         right: 5
        //     },
        // }

        this.ant = this.add.text(185, 300, "Ant Mode", this.antText);
        this.ant.setInteractive();

        this.fly = this.add.text(490, 300, "Fly Mode", this.antText);
        this.fly.setInteractive();

        this.ant.on("pointerdown", () => {
            this.scene.start("menuScene");
        });

        this.fly.on("pointerdown", () => {
            this.scene.start("menuScene");
        });
    }

    update() {
        // this.antP1.update();


    }
}