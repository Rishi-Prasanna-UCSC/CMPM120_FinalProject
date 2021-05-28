class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }
    preload(){
        this.load.image('MMBackground', 'assets/MainMenuBackground.png');
        this.load.image('PlayButton', 'assets/PlayButton.png');
        this.load.image('CharacterButton', 'assets/ChooseCharacterButton.png');
        this.load.image('CreditsButton', 'assets/CreditsButton.png');
        this.load.image('QuestionMark', 'assets/QuestionMark.png');
        this.load.audio('Music', 'assets/BigBugRunScore.wav');
    }

    create(){
        
        this.MMBG = this.add.image(390, 220, 'MMBackground');
        if (!loadedMusic) {
            let music = this.sound.add('Music');
            music.setLoop(true);
            music.play();
            loadedMusic = true;
        }

        let play = this.add.image(640, 85, 'PlayButton');
        let characters = this.add.image(640, 215, 'CharacterButton');
        let credits = this.add.image(640, 345, 'CreditsButton');
        let instructLink = this.add.image(30, 30, 'QuestionMark');
        instructLink.setScale(0.35,0.35);

        // Set images to be interactive buttons.
        play.setInteractive();
        credits.setInteractive();
        instructLink.setInteractive();

        play.on('pointerdown', () => {
            this.scene.start("playScene");
        });
        instructLink.on('pointerdown', () => {
            this.scene.start("instructScene");
        });

    }
    update() {
        
    }
}