class HelpScene extends Phaser.Scene {

    constructor() {
        super({ key: "HelpScene", active: false });
    }

    preload() {

        this.load.image("bgIntro", "assets/img/winner.png");
        this.load.image("bgLevels", "assets/img/game_controls.png");
        this.load.image("bgGameControls", "assets/img/Instructions.png");
    }

    create() {

        //
        this.events.on('transitionstart', function (fromScene, duration) {
            this.cameras.main.setZoom(0.001);
        }, this);

        this.events.on('transitioncomplete', function (fromScene, duration) {
            // this.cameras.main.zoomTo(1, 300);
            this.cameras.main.zoomTo(1, 300);
        }, this);

        // this.events.on('transitioncomplete', function (fromScene) {

        // });

        this.events.on('transitionout', function (toScene, duration) {

            this.cameras.main.zoomTo(0.05, 300);

        }, this);
        //

        this.input.keyboard.on('keyup', function (e) {
            if (e.key == "SoftRight") {
                //console.log("soft right key");
                //this.goToContactScene();
                this.goBackScene()

            }
        }, this);

        this.selected_screen = 'intro';

        this.image = this.add.image(game.config.width / 2, game.config.height / 2, 'bgIntro');
        this.image.displayHeight = game.config.height;
        this.image.displayWidth = game.config.width;

        this.left_arrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.right_arrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.back_space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACKSPACE);

        this.goBack = this.add.text(game.config.width - game.config.width * 15 / 100, game.config.height - game.config.height * 5 / 100, "Back").setFontSize(30).setFontFamily("Arial").setOrigin(0.5);

        this.back_space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACKSPACE);
        this.left_arrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.right_arrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);



    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.left_arrow)) {
            //console.log("left CLICK");
            this.changeSlidesLeft();
        }

        if (Phaser.Input.Keyboard.JustDown(this.right_arrow)) {
            //console.log("right CLICK");
            // this.changeSlides();
            this.changeSlidesRight();

        }

        if (Phaser.Input.Keyboard.JustDown(this.back_space)) {
            //console.log("back CLICK");
            this.goBackScene();
        }

    }

    changeSlidesRight() {
        switch (this.selected_screen) {
            case "intro":
                this.image.destroy();
                this.image = this.add.image(game.config.width / 2, game.config.height / 2, 'bgGameControls');
                this.image.displayHeight = game.config.height;
                this.image.displayWidth = game.config.width;
                this.selected_screen = "controls";
                break;
            case "controls":
                this.image.destroy();
                this.image = this.add.image(game.config.width / 2, game.config.height / 2, 'bgLevels');
                this.image.displayHeight = game.config.height;
                this.image.displayWidth = game.config.width;
                this.selected_screen = "level";
                break;
            case "level":
                this.image.destroy();
                this.image = this.add.image(game.config.width / 2, game.config.height / 2, 'bgIntro');
                this.image.displayHeight = game.config.height;
                this.image.displayWidth = game.config.width;
                this.selected_screen = "intro";
                break;


        }
        //this.skip = this.add.text(game.config.width - game.config.width * 10 / 100, game.config.height - game.config.height * 5 / 100, "Skip").setFontSize(50).setFontFamily("Arial").setOrigin(0.5);
        this.goBack = this.add.text(game.config.width - game.config.width * 15 / 100, game.config.height - game.config.height * 5 / 100, "Back").setFontSize(30).setFontFamily("Arial").setOrigin(0.5);
    }

    changeSlidesLeft() {
        switch (this.selected_screen) {
            case "intro":
                this.image.destroy();
                this.image = this.add.image(game.config.width / 2, game.config.height / 2, 'bgLevels');
                this.image.displayHeight = game.config.height;
                this.image.displayWidth = game.config.width;
                this.selected_screen = "level";
                break;
            case "level":
                this.image.destroy();
                this.image = this.add.image(game.config.width / 2, game.config.height / 2, 'bgGameControls');
                this.image.displayHeight = game.config.height;
                this.image.displayWidth = game.config.width;
                this.selected_screen = "controls";
                break;
            case "controls":
                this.image.destroy();
                this.image = this.add.image(game.config.width / 2, game.config.height / 2, 'bgIntro');
                this.image.displayHeight = game.config.height;
                this.image.displayWidth = game.config.width;
                this.selected_screen = "intro";
                break;
        }
        // this.skip = this.add.text(game.config.width - game.config.width * 10 / 100, game.config.height - game.config.height * 5 / 100, "Skip").setFontSize(50).setFontFamily("Arial").setOrigin(0.5);
        this.goBackbtn = this.add.text(game.config.width - game.config.width * 8 / 100, game.config.height - game.config.height * 5 / 100, "Back").setFontSize(30).setFontFamily("Arial").setOrigin(0.5);
    }

    goBackScene() {
        //console.log("clicked")
        this.scene.transition({
            target: 'Menu',
            moveAbove: true,
            duration: 300,
        })
        // this.scene.start("Menu");
    }


}