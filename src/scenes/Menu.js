class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }
    preload(){
        this.load.image('MMBackground', 'assets/MainMenuBackground.png');
        this.load.image('PlayButton', 'assets/PlayButton.png');
        this.load.image('CharacterButton', 'assets/ChooseCharacterButton.png');
        this.load.image('CreditsButton', 'assets/CreditsButton.png');
        this.load.audio('Music', 'assets/BigBugRunScore.wav');
    }

    create(){
        
        this.MMBG = this.add.image(390, 220, 'MMBackground');
        
        var music = this.sound.add('musicaudio');
        music.setLoop(true);
        music.play();

        
        //this.scene.start("playScene"); 

        let play = this.add.image(640, 85, 'PlayButton');
        let characters = this.add.image(640, 215, 'CharacterButton');
        let credits = this.add.image(640, 345, 'CreditsButton');

        // Set images to be interactive buttons.
        play.setInteractive();
        characters.setInteractive();
        credits.setInteractive();

        play.on('pointerdown', () => {
            this.scene.start("playScene");
        });

    }
    update() {
        
    }
}