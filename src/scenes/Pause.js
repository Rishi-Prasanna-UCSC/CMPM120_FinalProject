class Pause extends Phaser.Scene {
    constructor() {
        super("pauseScene");
    }

    preload(){
        this.load.image('Pause', 'assets/PauseButton.png');
        this.load.image('MMBackground', '../../assets/MainMenuBackground.png');
    }

    create(){
        // this.MMBG = this.add.image(390, 220, 'MMBackground');
        this.resume = this.add.image(720, 50, 'Pause');

        this.resume.setInteractive();

        this.resume.on("pointerdown", () => {
            this.scene.resume("playScene");
            // console.log("test");
            this.scene.stop();
            
        }); 

        let pauseConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            // fixedWidth: 100
        }

        this.pauseDisp = this.add.text(350,
            100, "Pause", pauseConfig);

        this.homeDisp = this.add.text(360,
            150, "Home", pauseConfig);

        this.homeDisp.setInteractive();

        this.homeDisp.on("pointerdown", () => {
            this.scene.stop("playScene");
            this.scene.start("menuScene");
            // console.log("test");
            // this.scene.stop();
            
        }); 

    }

    update(){

    }
}

// class Pause extends Phaser.Scene {
//     constructor(){
//         super("pauseScene");
//     }
//     preload(){
//         this.load.image('MMBackground', '../../assets/MainMenuBackground.png');
//         this.load.image('PlayButton', '../../assets/PlayButton.png');
//         this.load.image('CharacterButton', '../../assets/ChooseCharacterButton.png');
//         this.load.image('CreditsButton', '../../assets/CreditsButton.png');
//     }

//     create(){
//         this.MMBG = this.add.image(390, 220, 'MMBackground');

        
//         //this.scene.start("playScene"); 

//         let play = this.add.image(640, 85, 'PlayButton');
//         let characters = this.add.image(640, 215, 'CharacterButton');
//         let credits = this.add.image(640, 345, 'CreditsButton');

//         // Set images to be interactive buttons.
//         play.setInteractive();
//         characters.setInteractive();
//         credits.setInteractive();

//         play.on('pointerdown', () => {
//             this.scene.start("playScene");
//         });

//     }
//     update() {
        
//     }
// }