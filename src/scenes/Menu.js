class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }
    preload(){
        this.load.image('MMBackground', '../../assets/MainMenuBackground.png');
        this.load.image('PlayButton', '../../assets/PlayButton.png');
        this.load.image('CreditsButton', '../../assets/CreditsButton.png');
    }

    create(){
        this.add.image(390, 220, 'MMBackground');
        //this.scene.start("playScene");
        this.add.image(640, 100, 'PlayButton');
        this.add.image(640, 250, 'CreditsButton');
    }
    update() {

    }
}