class Ant extends Phaser.GameObjects.Sprite {
    constructor (scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);

        // Used for animation.
        // If false, fall.
        // If true, run.
        this.onGround = false;

        // If false, use onGround's status.
        // If true, swim.
        // We won't use this for our current state of the Endless Runner.
        this.inWater = false;
    }

    update(){
        if (this.onGround) {
            // Implement running.
            ;
        }
        else {
            // Falling.
            this.y += 6;
        }
    }

    // // jump(){

    // }
}