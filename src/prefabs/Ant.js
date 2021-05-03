class Ant extends Phaser.GameObjects.Sprite {
    constructor (scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);

        // Used for animation.
        // If false, fall.
        // If true, run.
        this.onGround = true;

        // Used for jumping.
        // If false, fall.
        // If true, jump.
        this.jump = false;

        // If false, use onGround's status.
        // If true, swim.
        // We won't use this for our current state of the Endless Runner.
        this.inWater = false;
    }

    update(){
        if (this.jump) {
            this.y -= 10;
        }
        if (this.onGround) {
            // Implement running.
            ;
        }
        else {
            // Falling.

            this.y += 10;
        }
    }

    isOffScreen(){
        // Why 513?
        // Because 513 is the screen height plus the height of the ant!
        if (this.y > 626) {
            return true;
        }
        else {
            return false;
        }
    }

    // // jump(){

    // }
}