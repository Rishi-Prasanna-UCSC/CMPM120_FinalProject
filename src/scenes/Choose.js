class Choose extends Phaser.Scene {
    constructor() {
        super("chooseScene");
    }

    preload() {
        // Load player spritesheet for running.
        this.load.spritesheet('Ant', 'assets/AntSpritesheet.png', { frameWidth: 150, frameHeight: 271 });
    }

    create() {


        this.antP1 = new Ant(this, 200, 220, 'Ant');
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

        this.ant = this.add.text(160, 300, "Ant Mode");
        this.ant.setInteractive();

        ant.on("pointerdown", () => {
            this.scene.start("menuScene");
        });
    }

    update() {
        // this.antP1.update();


    }
}