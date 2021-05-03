class GameOver extends Phaser.Scene {
    constructor(){
        super("gameoverScene");
    }
    preload(){
        this.load.image('GOBackground', '../../assets/GOBackground.png');
        this.load.image('TAButton', '../../assets/TryAgainButton.png');
    }

    create(){
        this.MMBG = this.add.image(390, 220, 'GOBackground');
        let TryAgain = this.TA = this.add.image(390, 380, 'TAButton');
        //this.scene.start("playScene");

        // Set images to be interactive buttons.
        TryAgain.setInteractive();

        TryAgain.on('pointerdown', () => {
            this.scene.start("playScene");
        });


    }
    update() {
        
    }
}