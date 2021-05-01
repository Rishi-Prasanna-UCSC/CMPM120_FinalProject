class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }
    preload(){
        this.load.image('MMBackground', '../../assets/MainMenuBackground.png');
    }

    create(){
        this.add.image(390, 220, 'MMBackground');
        //this.scene.start("playScene");
    }
    update() {

    }
}