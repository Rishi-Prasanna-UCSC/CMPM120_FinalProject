class Player extends Phaser.GameObjects.Sprite {
    constructor (scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
    }

    update(){
        
    }

    jump(){
        if (Phaser.Input.Keyboard.JustDown(keySPACE)){
            //may need to be moved to player class
            //fill code with jump
            console.log("jumping!"); 
        }
    }
}