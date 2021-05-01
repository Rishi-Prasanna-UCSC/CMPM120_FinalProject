class Intro extends Phaser.Scene {
    constructor(){
        super("introScene");
    }

    preload() {

    }

    create() {
        this.created = this.time.delayedCall(400, () => {
            this.createdBy = this.add.text(340, 210, 'Created by:');
        }, null, this);
        this.names = this.time.delayedCall(1000, () => {
            this.nameCredits = this.add.text(200, 230, 'Jarrett Mao, Rishi Prasanna, Felix Tham');
        }, null, this);
        this.hideText = this.time.delayedCall(2500, () => {
            this.createdBy.visible = false;
            this.nameCredits.visible = false;
        }, null, this);
        this.loadMainMenu = this.time.delayedCall(2600, () => {
            this.scene.start("menuScene");
        }, null, this);
    }

    update() {

    }
}