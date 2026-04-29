
// LEVEL DATA
const createObs = (x, y, type = 'up') => {
    return { 
        x: x, 
        y: y, 
        key: type === 'up' ? 'bufferup' : 'bufferdown' 
    };
};

const levels = [
    
    {
        speed: 160,
        obstacles: [
            createObs(800, 650),
            createObs(1500, 250, 'down'),
            createObs(2200, 650),
            createObs(3000, 250, 'down'),
            createObs(3800, 650),
            createObs(4500, 250, 'down'),
            createObs(5200, 650),
            createObs(6000, 250, 'down'),

        ],
        stars: [
            {x: 600, y: 400}, {x: 1200, y: 300}, {x: 1800, y: 400}, 
            {x: 2500, y: 300}, {x: 3500, y: 400}, {x: 4200, y: 300}
        ]
    },
    
    {
        speed: 200,
        obstacles: [
            createObs(600, 650),
            createObs(1000, 250, 'down'), 
            createObs(1300, 650),
            createObs(1600, 250, 'down'),
            createObs(1900, 650),
            createObs(2200, 250, 'down'),
            createObs(2500, 650),
            createObs(2900, 250, 'down'),
            createObs(3200, 650),
            createObs(3500, 250, 'down'),
            createObs(3700, 650),
            createObs(4000, 250, 'down'),
            createObs(4300, 650),
            createObs(4600, 250, 'down'),
            createObs(4900, 650),
            createObs(5300, 250 , 'down'),
            createObs(5600, 650),
            createObs(5900, 250, 'down'),
            createObs(6200, 650),
            createObs(6500, 250, 'down'),
            createObs(6800, 650),
            createObs(7100, 250, 'down'),
            createObs(7500, 650),
        
        ],
        stars: [
            {x: 750, y: 450}, {x: 1100, y: 450}, {x: 1600, y: 450}, 
            {x: 2100, y: 450}, {x: 2800, y: 450}, {x: 3300, y: 450}, {x: 4000, y: 450}, {x: 4700, y: 450},
            {x: 5400, y: 450}, {x: 6100, y: 450}, { x: 6800, y: 450 }
        ]
    },
   
    {
        speed: 250,
        obstacles: [
            createObs(800, 700), createObs(800, 100, 'down'), 
            createObs(1500, 600),
            createObs(2000, 200, 'down'),
            createObs(2500, 700), createObs(2500, 100, 'down'),
            createObs(3200, 500),
            createObs(3800, 300, 'down'),
            createObs(4500, 700), createObs(4500, 100, 'down'),
            createObs(5200, 600),
            createObs(5800, 200, 'down'),
            createObs(6500, 700), createObs(6500, 100, 'down'),
            createObs(6800, 500),
            createObs(7500, 300, 'down'),
            createObs(8200, 700), createObs(8200, 100, 'down'),
            createObs(8700, 600),
            createObs(9400, 200, 'down'),
            createObs(10100, 700), createObs(10100, 100, 'down'),
            createObs(10800, 500),
            createObs(11500, 300, 'down'),
            createObs(12200, 700), createObs(12200, 100, 'down'),
            createObs(12900, 600),
            createObs(13600, 200, 'down'),
            createObs(14300, 700), createObs(14300, 100, 'down'),
            createObs(15000, 500),
            createObs(15700, 300, 'down'),
            createObs(16400, 700), createObs(16400, 100, 'down'),
            createObs(17100, 600),
            createObs(17800, 200, 'down'),
            createObs(18500, 700), createObs(18500, 100, 'down'),
            createObs(19200, 500),
            createObs(19900, 300, 'down'),
            createObs(20600, 700), createObs(20600, 100, 'down'),
            createObs(21300, 600),
            createObs(22000, 200, 'down'),
            createObs(22700, 700), createObs(22700, 100, 'down'),
            createObs(23400, 500),
            createObs(24100, 300, 'down'),
            createObs(24800, 700), createObs(24800, 100, 'down'),
            createObs(25500, 600),
            createObs(26200, 200, 'down'),
            createObs(26900, 700), createObs(26900, 100, 'down')
         
         


        ],
        stars: [
            {x: 1100, y: 400}, {x: 1750, y: 350}, {x: 2250, y: 500}, 
            {x: 2800, y: 300}, {x: 3500, y: 400}, {x: 4200, y: 350}, {x: 4700, y: 500}, {x: 5400, y: 300},
            {x: 6100, y: 400}, {x: 6800, y: 350}, {x: 7500, y: 500}, {x: 8200, y: 300}, 
            {x: 8900, y: 400}, {x: 9600, y: 350}, {x: 10300, y: 500}, {x: 11000, y: 300},
            {x: 11700, y: 400}, {x: 12400, y: 350}, {x: 13100, y: 500}, {x: 13800, y: 300},
            {x: 14500, y: 400}, {x: 15200, y: 350}, {x: 15900, y: 500}, {x: 16600, y: 300},
            {x: 17300, y: 400}, {x: 18000, y: 350}, {x: 18700, y: 500}
        ]
    },
    
    {
        speed: 320,
        obstacles: [
            createObs(500, 650), createObs(1000, 650), createObs(1500, 650),
            createObs(2000, 150, 'down'), createObs(2500, 150, 'down'),
            createObs(3000, 650), createObs(3500, 150, 'down'),
            createObs(4000, 650), createObs(4500, 150, 'down'),
            createObs(5000, 650), createObs(5500, 150, 'down'),
            createObs(6000, 650), createObs(6500, 150, 'down'),
            createObs(7000, 650), createObs(7500, 150, 'down'),
            createObs(8000, 650), createObs(8500, 150, 'down'),
            createObs(9000, 650), createObs(9500, 150, 'down'),
            createObs(10000, 650), createObs(10500, 150, 'down'),
            createObs(11000, 650), createObs(11500, 150, 'down'),
            createObs(12000, 650), createObs(12500, 150, 'down'),
            createObs(13000, 650), createObs(13500, 150, 'down'),
            createObs(14000, 650), createObs(14500, 150, 'down'),
            createObs(15000, 650), createObs(15500, 150, 'down'),
            createObs(16000, 650), createObs(16500, 150, 'down'),
            
        ],
        stars: [
            {x: 750, y: 300}, {x: 1750, y: 500}, {x: 2750, y: 300}, 
            {x: 3750, y: 500}, {x: 4750, y: 300}, {x: 5750, y: 500}, {x: 6750, y: 300},
            {x: 7750, y: 500}, {x: 8750, y: 300}, {x: 9750, y: 500}, {x: 10750, y: 300},
            {x: 11750, y: 500}, {x: 12750, y: 300}, {x: 13750, y: 500}, {x: 14750, y: 300},
            {x: 15750, y: 500}, {x: 16750, y: 300}, {x: 17750, y: 500}, {x: 18750, y: 300},
            {x: 19750, y: 500}, {x: 20750, y: 300}, {x: 21750, y: 500}, {x: 22750, y: 300},
            {x: 23750, y: 500}, {x: 24750, y: 300}, {x: 25750, y: 500}, {x: 26750, y: 300},
            {x: 27750, y: 500}, {x: 28750, y: 300},   

        ]
    }
];


// MENU SCENE
class MenuScene extends Phaser.Scene {
    constructor() {
        super('MenuScene');
    }

    preload() {
        this.load.image('background', './PNG/background.png');
    }

    create() {
        // calculate scale factor to fill screen while maintaining aspect ratio
        const { width, height } = this.scale;
        this.add.image(0, 0, 'background').setOrigin(0, 0).setDisplaySize(width, height);

        // Title
        this.add.text(width / 2, height * 0.3, 'PLANE RIDE', {
            fontSize: '80px', fill: '#fff', fontStyle: 'bold'
        }).setOrigin(0.5);

        // Display total stars collected across sessions
        const savedStars = localStorage.getItem('totalstars') || 0;
        this.add.text(width / 2, height * 0.45, `Stars Collected: ${savedStars}`, {
            fontSize: '32px', fill: '#FFD700'
        }).setOrigin(0.5);

        // Start Button
        const startBtn = this.add.text(width / 2, height * 0.7, 'START MISSION', {
            fontSize: '40px', backgroundColor: '#000', padding: { x: 20, y: 10 }, fill: '#0f0'
        }).setOrigin(0.5).setInteractive({ useHandCursor: true });

        startBtn.on('pointerdown', () => this.scene.start('GameScene'));
    }
};

// GAME SCENE
class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
        // Scene-specific variables
        this.currentLevelIndex = 0;
        this.totalstars = 0;
        this.levelStars = 0;
        this.isGameStarted = false;
        this.isGameEnd = false;
        this.hasLanded = false;
        this.hasBumped = false;
       
    }

    preload() {
        this.load.image("background", './PNG/background.png');
        this.load.image("ground", './PNG/groundGrass.png');
        this.load.image("bufferup", './PNG/rockGrass.png');
        this.load.image("bufferdown", './PNG/rockGrassDown.png');
        this.load.image("star", "./PNG/starGold.png");
        this.load.image("smoke", "./PNG/puffLarge.png");
        this.load.spritesheet("plane", './PNG/Planes/planeGreen1.png', { frameWidth: 64, frameHeight: 96 });
        
        
        this.load.audio('bgMusic', './backgroundmusicforvideos-game-minecraft-gaming-background-music-402451.mp3');
        this.load.audio('starMusic', './starcollect.wav');
        this.load.audio('crashMusic', './crashmusic.mp3');
    }

    create() {
        // Reset State
        this.isGameStarted = false;
        this.isGameEnd = false;
        this.hasLanded = false;
        this.hasBumped = false;
        this.levelStars = 0;
        this.hasPlayedCrash = false;
        this.endStateTimestamp = 0; 

        this.smoke = this.physics.add.staticGroup();
        const { width, height } = this.scale;
        const currentLevel = levels[this.currentLevelIndex];
        this.levelLength = 5000 + (this.currentLevelIndex * 2000);

        // Persistent Stars
        this.totalstars = parseInt(localStorage.getItem('totalstars')) || 0;

        // Visuals
        this.add.image(0, 0, "background").setOrigin(0, 0).setDisplaySize(width, height).setScrollFactor(0);
        
        // GLOBAL AUDIO LOGIC
        // Check if the music is already playing in the global sound manager
        if (!this.sound.get('bgMusic')) {
            this.bgMusic = this.sound.add('bgMusic', { volume: 0.4, loop: true });
            this.bgMusic.play();
        } else {
            this.bgMusic = this.sound.get('bgMusic');
        }

        const roads = this.physics.add.staticGroup();
        const ground = this.add.tileSprite(0, height - 32, this.levelLength, 64, 'ground').setOrigin(0, 0.5);
        const obstacles = this.physics.add.staticGroup();
        this.physics.add.existing(ground, true);
        roads.add(ground);
        currentLevel.obstacles.forEach(obs => obstacles.create(obs.x, obs.y, obs.key));

        const stars = this.physics.add.staticGroup();
        currentLevel.stars.forEach(s => stars.create(s.x, s.y, "star"));

        // Player
        this.plane = this.physics.add.sprite(100, 300, 'plane');
        this.plane.setBounce(0.5);
        this.plane.body.allowGravity = false;
        this.plane.setCollideWorldBounds(true);

        // Camera
        this.physics.world.setBounds(0, 0, this.levelLength, height);
        this.cameras.main.setBounds(0, 0, this.levelLength, height);
        this.cameras.main.startFollow(this.plane, true, 0.1, 0.1);

        // UI
        this.scoreText = this.add.text(16, 16, `Stars: ${this.totalstars}`, { fontSize: '32px', fill: '#000' }).setScrollFactor(0).setDepth(100);
        this.messageText = this.add.text(width / 2, height / 2, `LEVEL ${this.currentLevelIndex + 1}\nUP or Tap to Fly`, { fontSize: '40px', align: 'center' }).setOrigin(0.5).setScrollFactor(0);
        
        this.retryText = this.add.text(width / 2, height / 2, 'GAME OVER\nPress R or Tap to Retry', { fontSize: '40px', backgroundColor: '#000' }).setOrigin(0.5).setScrollFactor(0).setVisible(false);
        this.winText = this.add.text(width / 2, height / 2, 'LEVEL COMPLETE!\nPress N or Tap for Next', { fontSize: '40px', backgroundColor: '#0f0' }).setOrigin(0.5).setScrollFactor(0).setVisible(false);

        // Audio
    
        this.starMusic = this.sound.add('starMusic', { volume: 0.4 });
        this.crashMusic = this.sound.add('crashMusic', { volume: 0.2 });

        // Physics
        this.physics.add.collider(this.plane, roads, () => this.hasLanded = true);
        this.physics.add.collider(this.plane, obstacles, () => this.hasBumped = true);
        this.physics.add.overlap(this.plane, stars, (p, s) => {
            s.disableBody(true, true);
            this.levelStars++;
            this.totalstars++;
            this.scoreText.setText(`Stars: ${this.totalstars}`);
            this.starMusic.play();
        });

        this.cursors = this.input.keyboard.createCursorKeys();
        this.keyR = this.input.keyboard.addKey('R');
        this.keyN = this.input.keyboard.addKey('N');
    }

    update() {
        if (!this.plane) return;
        const interacting = this.cursors.up.isDown || this.input.activePointer.isDown;

        if (!this.isGameStarted && interacting) {
            this.isGameStarted = true;
            this.plane.body.allowGravity = true;
            this.messageText.destroy();
            
        }

        if (this.isGameStarted && !this.isGameEnd) {
            if (!this.hasLanded && !this.hasBumped) {
                this.plane.setVelocityX(levels[this.currentLevelIndex].speed);
                if (interacting) this.plane.setVelocityY(-160);

                // Win Condition
                if (this.plane.x >= this.levelLength - 200) {
                    this.isGameEnd = true;
                    localStorage.setItem('totalstars', this.totalstars);
                    this.plane.setVelocity(0);
                    this.plane.body.allowGravity = false;
                    this.winText.setVisible(true);
                    this.endStateTimestamp = this.time.now;
                }
            } else {
                // Game Over
                this.plane.setVelocityX(0);
                this.plane.setTint(0xff0000);
                this.retryText.setVisible(true);
                if (!this.hasPlayedCrash) {
                    this.crashMusic.play();
                     this.smoke.create(this.plane.x, this.plane.y, 'smoke')
                     .setScale(1)
                     .setDepth(50)
                    this.hasPlayedCrash = true;
                    this.endStateTimestamp = this.time.now; 
                }
            }
            
        }

        // Scene Switching
        if (Phaser.Input.Keyboard.JustDown(this.keyR) || (this.input.activePointer.isDown && (this.hasLanded || this.hasBumped))) {
          
            this.totalstars -= this.levelStars; // Penalty for failing
            this.scene.restart();
        }
        if (Phaser.Input.Keyboard.JustDown(this.keyN) || (this.input.activePointer.isDown && this.isGameEnd)) {
            this.currentLevelIndex = (this.currentLevelIndex + 1) % levels.length;
            this.scene.restart();
        }
    
    }

}
// CONFIGURATION
const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
    physics: { default: "arcade", arcade: { gravity: { y: 300 }, debug: false } },
    scene: [MenuScene, GameScene]
};

const Game = new Phaser.Game(config);