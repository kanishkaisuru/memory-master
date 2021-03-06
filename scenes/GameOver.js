class GameOver extends Phaser.Scene {
    constructor() {

        super({ key: 'GameOver', active: false });

    }

    init() {
        this.CONFIG = this.sys.game.CONFIG;

    }



    preload() {

        this.load.image("bgGameOver", "assets/img/win.png");
        // this.load.spritesheet('btn_restart', 'assets/img/btn_try_again_new.png', { frameWidth: 192, frameHeight: 180 });
        // this.load.spritesheet('btn_restart_hover', 'assets/img/btn_try_again_hover_new.png', { frameWidth: 192, frameHeight: 180 });

        this.load.image("btn_restart", "assets/img/btn_try_again_new.png");
        this.load.image("btn_restart_hover", "assets/img/btn_try_again_hover_new.png");

        // this.load.spritesheet('btn_exit', 'assets/img/btn_exit_new.png', { frameWidth: 192, frameHeight: 180 });
        // this.load.spritesheet('btn_exit_hover', 'assets/img/btn_try_again_hover_new.png', { frameWidth: 192, frameHeight: 180 });

        this.load.image("btn_exit", "assets/img/btn_exit_new.png");
        this.load.image("btn_exit_hover", "assets/img/btn_exit_hover_new.png");


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
            if (e.key == "Enter") {
                //console.log("Enter key");
                this.callMenuButton();
            }
        }, this);

        this.selected_button = 'Restart';
        this.upArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.downArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        this.image = this.add.image(game.config.width / 2, game.config.height / 2, 'bgGameOver');
        this.image.displayHeight = game.config.height;
        this.image.displayWidth = game.config.width;

        // this.logo = this.add.image(game.config.width / 2, this.CONFIG.centerY / 4, 'logo');
        // this.logo.displayHeight = game.config.height / 5;
        // this.logo.displayWidth = game.config.width / 4;
        // Background
        // this.createMenuBackground();

        // Game title

        // this.text_title = this.add.text(this.CONFIG.centerX / 2, game.config.width / 2.8, 'Game Over');
        // this.text_title.setColor('#FFF');
        // this.text_title.setFontSize('80px');

        //this.gameOver = this.add.text(game.config.width / 4, game.config.height / 2, 'GAME OVER', { fontSize: '80px', fill: '#FFF' });

        //===============================
        this.FinalScore = this.add.text(game.config.width / 1.7, game.config.width / 1.57, score, { fontSize: '40px', fill: '#FFF' });

        this.bestScore = this.add.text(game.config.width / 1.7, game.config.width / 1.35, '' + localStorage.getItem('Best Score'), { fontSize: '40px', fill: '#FFF' });

        //==================================


        // this.finalScoreImg = this.add.image(game.config.width / 2.6, game.config.width / 1.8, 'lbl_your_score');
        // this.finalScoreImg.displayHeight = game.config.height / 15;
        // this.finalScoreImg.displayWidth = game.config.width / 3;
        //
        // this.bestScoreImg = this.add.image(game.config.width / 2.6, game.config.width / 1.4, 'lbl_best_score');
        // this.bestScoreImg.displayHeight = game.config.height / 15;
        // this.bestScoreImg.displayWidth = game.config.width / 3;

        //this.finalScore.displayHeight = game.config.height/5;
        //this.finalScore.displayWidth = game.config.width/4;

        // if (localStorage.getItem('Best Score') === null) {
        //     this.bestScore.setText(0);
        // } else {
        //     this.bestScore.setText(localStorage.getItem('Best Score'));
        // }

        // if (score > localStorage.getItem('Best Score')) {
        //     localStorage.setItem('Best Score', score);
        //     this.bestScore.setText(localStorage.getItem('Best Score'));
        // }

        if (gameOptions.col == 4 && gameOptions.raw == 3 && score >= localStorage.getItem('tinyScore')) {
            localStorage.setItem('tinyScore', score);
            this.bestScore.setText(localStorage.getItem('tinyScore'));
        } else if (gameOptions.col == 4 && gameOptions.raw == 3 && score <= localStorage.getItem('tinyScore')) {
            if (localStorage.getItem('tinyScore') === null) {
                this.bestScore.setText(0);
            } else {
                this.bestScore.setText(localStorage.getItem('tinyScore'));
            }
        }


        if (gameOptions.col == 4 && gameOptions.raw == 4 && score >= localStorage.getItem('smallScore')) {
            localStorage.setItem('smallScore', score);
            this.bestScore.setText(localStorage.getItem('smallScore'));
        } else if (gameOptions.col == 4 && gameOptions.raw == 4 && score <= localStorage.getItem('smallScore')) {
            if (localStorage.getItem('smallScore') === null) {
                this.bestScore.setText(0);
            } else {
                this.bestScore.setText(localStorage.getItem('smallScore'));
            }
        }

        if (gameOptions.col == 5 && gameOptions.raw == 4 && score >= localStorage.getItem('mediumScore')) {
            localStorage.setItem('mediumScore', score);
            this.bestScore.setText(localStorage.getItem('mediumScore'));
        } else if (gameOptions.col == 5 && gameOptions.raw == 4 && score <= localStorage.getItem('mediumScore')) {
            if (localStorage.getItem('mediumScore') === null) {
                this.bestScore.setText(0);
            } else {
                this.bestScore.setText(localStorage.getItem('mediumScore'));
            }
        }

        if (gameOptions.col == 6 && gameOptions.raw == 4 && score >= localStorage.getItem('medium2Score')) {
            localStorage.setItem('medium2Score', score);
            this.bestScore.setText(localStorage.getItem('medium2Score'));
        } else if (gameOptions.col == 6 && gameOptions.raw == 4 && score >= localStorage.getItem('medium2Score')) {
            if (localStorage.getItem('medium2Score') === null) {
                this.bestScore.setText(0);
            } else {
                this.bestScore.setText(localStorage.getItem('medium2Score'));
            }
        }


        if (gameOptions.col == 7 && gameOptions.raw == 4 && score >= localStorage.getItem('largeScore')) {
            localStorage.setItem('largeScore', score);
            this.bestScore.setText(localStorage.getItem('largeScore'));
        } else if (gameOptions.col == 7 && gameOptions.raw == 4 && score <= localStorage.getItem('largeScore')) {
            if (localStorage.getItem('largeScore') === null) {
                this.bestScore.setText(0);
            } else {
                this.bestScore.setText(localStorage.getItem('largeScore'));
            }
        }

        if (gameOptions.col == 8 && gameOptions.raw == 4 && score >= localStorage.getItem('hugeScore')) {
            localStorage.setItem('hugeScore', score);
            this.bestScore.setText(localStorage.getItem('hugeScore'));
        } else if (gameOptions.col == 8 && gameOptions.raw == 4 && score <= localStorage.getItem('hugeScore')) {
            if (localStorage.getItem('hugeScore') === null) {
                this.bestScore.setText(0);
            } else {
                this.bestScore.setText(localStorage.getItem('hugeScore'));
            }
        }

        // Click to play text
        // this.text_click_to_play = this.add.text(this.CONFIG.centerX/4, this.CONFIG.centerY+80, 'Click to Play');
        // this.text_click_to_play.setColor('#FFF');
        // this.text_click_to_play.setFontSize('80px');

        // Button PLay

        this.btn_restart = this.add.sprite(game.config.width / 2, (game.config.height / 6) * 4.5, 'btn_restart_hover', 0).setInteractive();
        this.btn_restart.displayHeight = game.config.height / 8.9;
        this.btn_restart.displayWidth = game.config.width / 2.8;


        // Button Score
        // this.btn_menu = this.add.sprite(game.config.width / 2, (game.config.height / 6) * 4.5, 'btn_menu', 0).setInteractive();
        // this.btn_menu.displayHeight = game.config.height / 10;
        // this.btn_menu.displayWidth = game.config.width / 2;


        // Button Option
        this.btn_exit = this.add.sprite(game.config.width / 2, (game.config.height / 6) * 5.3, 'btn_exit', 0).setInteractive();
        this.btn_exit.displayHeight = game.config.height / 8.9;
        this.btn_exit.displayWidth = game.config.width / 2.8;

        //touchable implementation
        this.btn_restart.setInteractive().on('pointerdown', this.callMenuButton, this);

        // create mouse input
        // this.createMouseInput();

        // create keyboard input
        // this.createKeyboardInput();

        // press the enter button on the keyboard then play the game
        // then we can move to the "menu scene" to the "play scene"


    }


    update() {

        if (Phaser.Input.Keyboard.JustDown(this.upArrow)) {
            //console.log("UP CLICK");
            this.changeMenuButtonWithArrowUp();
        }

        if (Phaser.Input.Keyboard.JustDown(this.downArrow)) {
            //console.log("DOWN CLICK");
            this.changeMenuButtonWithArrowDown();
        }

        // if (Phaser.Input.Keyboard.JustDown(this.enter)) {
        //   console.log("ENTER CLICK");
        //   this.callMenuButton();
        // }


    }

    changeMenuButtonWithArrowDown() {

        switch (this.selected_button) {
            case "Restart":

                this.btn_restart.destroy();
                this.btn_restart = this.add.sprite(game.config.width / 2, (game.config.height / 6) * 4.5, 'btn_restart', 0).setInteractive();
                this.btn_restart.displayHeight = game.config.height / 8.9;
                this.btn_restart.displayWidth = game.config.width / 2.8;

                this.btn_exit.destroy();
                this.btn_exit = this.add.sprite(game.config.width / 2, (game.config.height / 6) * 5.3, 'btn_exit_hover', 0).setInteractive();
                this.btn_exit.displayHeight = game.config.height / 8.9;
                this.btn_exit.displayWidth = game.config.width / 2.8;

                this.selected_button = "Exit"
                break;

            case "Exit":

                this.btn_exit.destroy();
                this.btn_exit = this.add.sprite(game.config.width / 2, (game.config.height / 6) * 5.3, 'btn_exit', 0).setInteractive();
                this.btn_exit.displayHeight = game.config.height / 8.9;
                this.btn_exit.displayWidth = game.config.width / 2.8;

                this.btn_restart.destroy();
                this.btn_restart = this.add.sprite(game.config.width / 2, (game.config.height / 6) * 4.5, 'btn_restart_hover', 0).setInteractive();
                this.btn_restart.displayHeight = game.config.height / 8.9;
                this.btn_restart.displayWidth = game.config.width / 2.8;

                this.selected_button = "Restart"
                break;
            default:

        }
    }


    changeMenuButtonWithArrowUp() {

        switch (this.selected_button) {
            case "Restart":

                this.btn_exit.destroy();
                this.btn_exit = this.add.sprite(game.config.width / 2, (game.config.height / 6) * 5.3, 'btn_exit_hover', 0).setInteractive();
                this.btn_exit.displayHeight = game.config.height / 8.9;
                this.btn_exit.displayWidth = game.config.width / 2.8;

                this.btn_restart.destroy();
                this.btn_restart = this.add.sprite(game.config.width / 2, (game.config.height / 6) * 4.5, 'btn_restart', 0).setInteractive();
                this.btn_restart.displayHeight = game.config.height / 8.9;
                this.btn_restart.displayWidth = game.config.width / 2.8;

                this.selected_button = "Exit"
                break;

            case "Exit":

                this.btn_restart.destroy();
                this.btn_restart = this.add.sprite(game.config.width / 2, (game.config.height / 6) * 4.5, 'btn_restart_hover', 0).setInteractive();
                this.btn_restart.displayHeight = game.config.height / 8.9;
                this.btn_restart.displayWidth = game.config.width / 2.8;

                this.btn_exit.destroy();
                this.btn_exit = this.add.sprite(game.config.width / 2, (game.config.height / 6) * 5.3, 'btn_exit', 0).setInteractive();
                this.btn_exit.displayHeight = game.config.height / 8.9;
                this.btn_exit.displayWidth = game.config.width / 2.8;

                this.selected_button = "Restart"
                break;
            default:

        }
    }

    callMenuButton() {
        //console.log(this.selected_button);
        switch (this.selected_button) {
            case "Restart":
                //console.log("Restart SELECT");
                this.reStoreGameLevelValues();
                // this.scene.start('SetGrid');
                this.scene.transition({
                    target: 'SetGrid',
                    moveAbove: true,
                    duration: 300,
                })
                break;
            case "Menu":
                //console.log("Menu SELECT");
                // this.scene.start("SetGrid")
                this.scene.transition({
                    target: 'SetGrid',
                    moveAbove: true,
                    duration: 300,
                })
                break;
            case "Exit":
                //console.log("Exit SELECT");
                // this.scene.start("Menu")
                this.scene.transition({
                    target: 'Menu',
                    moveAbove: true,
                    duration: 100,
                })
                break;
            default:

        }
    }

    reStoreGameLevelValues() {
        gameOptions.bars = 2;
        score = 0;
    }


}
