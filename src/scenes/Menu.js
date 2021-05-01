class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }
    preload(){
        this.load.image('MMBackground', '../../assets/MainMenuBackground.png');
        this.load.image('PlayButton', '../../assets/PlayButton.png');
        this.load.image('CharacterButton', '../../assets/ChooseCharacterButton.png');
        this.load.image('CreditsButton', '../../assets/CreditsButton.png');
    }

    create(){
        this.MMBG = this.add.image(390, 220, 'MMBackground');
        //this.scene.start("playScene");
        this.play = this.add.image(640, 85, 'PlayButton');
        this.credits = this.add.image(640, 215, 'CharacterButton');
        this.credits = this.add.image(640, 345, 'CreditsButton');
    }
    update() {

    }
}