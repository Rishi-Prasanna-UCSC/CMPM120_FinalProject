class Play extends Phaser.Scene {
    constructor(){
        super("playScene");
    }

    preload() {
        
    }

    create(){
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }

    update(){
        // this.starfield.tilePositionX -= 4; //replace with actual background

        if (Phaser.Input.Keyboard.JustDown(keySPACE)){
            //may need to be moved to player class
            //fill code with jump
            console.log("jumping!"); 
            console.log("hihi");
        }

    }
}