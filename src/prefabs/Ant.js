class Ant extends Phaser.Physics.Arcade.Sprite {
    constructor (scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);


        // If false, use onGround's status.
        // If true, swim.
        // We won't use this for our current state of the Endless Runner.
        this.inWater = false;
    }

    update(){

    }

    // // jump(){

    // }
}