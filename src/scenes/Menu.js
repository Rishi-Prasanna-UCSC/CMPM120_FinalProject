class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }
    preload(){
        // No audio to preload
    }

    create(){
        this.scene.start("playScene");
    }
}