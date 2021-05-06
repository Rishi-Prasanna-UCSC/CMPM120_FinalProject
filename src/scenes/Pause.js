class Pause extends Phaser.Scene {
    constructor() {
        super("pauseScene");
    }

    preload(){
        this.load.image('Pause', 'assets/PauseButton.png');
        this.load.image('MMBackground', '../../assets/MainMenuBackground.png');
    }

    create(){
        this.MMBG = this.add.image(390, 220, 'MMBackground');
        // this.resume = this.add.image(720, 50, 'Pause');

        // this.resume.setInteractive();

        // this.resume.on("pointerdown", () => {
        //     this.scene.resume();
        //     console.log("test");
        // }); 

        // console.log("fuck you");
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