class Pause extends Phaser.Scene {
    constructor() {
        super("pauseScene");
    }

    preload(){
        this.load.image('Pause', 'assets/PauseButton.png');
        // this.load.image('MMBackground', 'assets/MainMenuBackground.png');
    }

    create(){
        // console.log("launched");

        this.resume = this.add.image(720, 50, 'Pause');
        let pauseConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#000000',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            // fixedWidth: 100
        }

        this.pauseDisp = this.add.text(345,
            100, "Paused", pauseConfig);

        this.homeDisp = this.add.text(360,
            150, "Home", pauseConfig);

        
        this.resume.setInteractive();
        this.homeDisp.setInteractive();

        this.resume.on("pointerdown", () => {
            this.scene.stop();
            this.scene.resume("playScene");
        });

        this.homeDisp.on("pointerdown", () => {
            this.scene.stop("playScene");
            this.scene.start("menuScene");
        });  

    }

    update(){

    }
}
