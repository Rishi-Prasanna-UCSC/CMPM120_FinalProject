class GameOver extends Phaser.Scene {
    constructor(){
        super("gameoverScene");
    }
    preload(){
        this.load.image('GOBackground', 'assets/GOBackground.png');
        this.load.image('TAButton', 'assets/TryAgainButton.png');
    }

    create(){
        this.MMBG = this.add.image(390, 220, 'GOBackground');
        let TryAgain = this.add.image(390, 380, 'TAButton');

        let scoreConfig = {
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
        let newBest = {
            fontFamily: 'Laca',
            fontSize: '20px',
            backgroundColor: '#ff0000',
            color: '#ffff00',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
                left: 5,
                right: 5
            },
            // fixedWidth: 100
        }

        this.finalScore = this.add.text(50,
            360, "Score: " + score, scoreConfig);

        if (beatHighScore) {
            this.newbest = this.add.text(50,
                330, "NEW BEST!", newBest);
        }
        this.recHighScore = this.add.text(540,
            360, "Best: " + highScore, scoreConfig);
        // Set images to be interactive buttons.
        TryAgain.setInteractive();

        TryAgain.on('pointerdown', () => {
            this.scene.start("playScene");
        });


    }
    update() {
        
    }
}