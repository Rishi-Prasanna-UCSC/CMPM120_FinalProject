class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }
    // Blablabla 
    preload(){

    }

    create(){
        this.scene.start("playScene");
    }
}