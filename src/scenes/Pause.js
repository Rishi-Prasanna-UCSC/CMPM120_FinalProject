class Pause extends Phaser.Scene {
    constructor() {
        super("pauseScene");
    }

    preload(){
        this.load.image('Pause', 'assets/PauseButton.png');
    }

    create(){
        // this.MMBG = this.add.image(390, 220, 'MMBackground');
        this.pause = this.add.image(720, 50, 'Pause');
        this.pause.setInteractive();

        this.pause.on("pointerdown", () => {
            // this.press.visible = false;
            // this.scene.start("pauseScene");
            this.scene.resume("playScene");
            this.scene.stop();
            // console.log("working");
        });
    }
}