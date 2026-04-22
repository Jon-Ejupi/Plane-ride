// ============================================
// GAME CONFIGURATION
// ============================================
// Phaser game configuration object - defines core game settings
const config = {
    type: Phaser.AUTO, // Automatically choose WebGL or Canvas rendering
    width: window.innerWidth, // Game width matches browser window
    height: window.innerHeight, // Game height matches browser window
    scale: {
        mode: Phaser.Scale.FIT, // Scale game to fit screen while maintaining aspect ratio
        autoCenter: Phaser.Scale.CENTER_BOTH // Center game horizontally and vertically
    },
    physics: {
        default: "arcade", // Use Arcade physics (simple, fast 2D physics)
        arcade: {
            gravity: { y: 300 }, // Gravity pulls objects down at 300 pixels/second²
            debug: false, // Set to true to see collision boxes and debug info
        },
    },
    scene: {
        preload: preload, // Function to load assets before game starts
        create: create, // Function to set up game objects
        update: update // Function called every frame (game loop)
    }
};

// ============================================
// LEVEL DATA
// ============================================
// Helper function to create obstacle objects
// x: horizontal position, y: vertical position, up: obstacle orientation (true = ground, false = ceiling)
const createObs = (x, y, up = true) => ({ x, y, key: up ? 'bufferup' : 'bufferdown' });

// Array containing all level configurations
const levels = [
    // LEVEL 1 - Slower speed, easier obstacles
    {
        speed: 150, // Plane's horizontal movement speed
        obstacles: [
            /* X      Y      Inverted  */
            createObs(500,   600),           // Ground obstacle
            createObs(1200,  200, false),
            createObs(1300,  700),
            createObs(1900,  300,   false),  // Ceiling obstacle (inverted)
            createObs(2500,  700),
            createObs(2700, 200, false),
            createObs(3200, 600),
            createObs(3600,  200,   false),
            createObs(4000,  700),
            createObs(4100,  200, false),
            createObs(4600,  600),
            createObs(4900,  200, false),
        ],
        stars : [
            {x: 800, y: 300},
            {x:1200, y: 450},
            {x: 1500, y: 400},
            {x: 1900, y: 500},
            {x: 2300, y: 450},
            {x: 2500, y: 500},
            {x: 2700, y: 550},
            {x: 3000, y: 400},
            {x: 3200, y: 300},
            {x: 3500, y: 600},
            {x: 3900, y: 500},
            {x: 4200, y: 600},
            {x: 4500, y: 400},
            {x: 4800, y: 500}
        ],
    },
    // LEVEL 2 - Faster speed, more challenging obstacles
    {
        speed: 200, // Faster plane movement
          obstacles: [
            /* X      Y      Inverted  */
            createObs(500,   600),           // Ground obstacle
            createObs(1200,  200, false),
            createObs(1300,  700),
            createObs(1900,  300,   false),  // Ceiling obstacle (inverted)
            createObs(2500,  700),
            createObs(2700, 200, false),
            createObs(3200, 600),
            createObs(3600,  200,   false),
            createObs(4000,  700),
            createObs(4100,  200, false),
            createObs(4600,  600),
            createObs(4900,  200, false),
            createObs(5000, 700),
            createObs(5200, 200, false),
            createObs(5500, 700),
            createObs(5800, 200, false),
            createObs(6000, 700),
            createObs(6200, 200, false)
        ],
        stars : [
            {x: 800, y: 300},
            {x:1200, y: 450},
            {x: 1500, y: 400},
            {x: 1900, y: 500},
            {x: 2300, y: 450},
            {x: 2500, y: 500},
            {x: 2700, y: 550},
            {x: 3000, y: 400},
            {x: 3200, y: 300},
            {x: 3500, y: 600},
            {x: 3900, y: 500},
            {x: 4200, y: 600},
            {x: 4500, y: 400},
            {x: 4800, y: 500},
            {x: 5300, y: 600},
            {x: 5600, y: 400},
            {x: 5900, y: 500},
            {x: 6100, y: 500},
            {x: 6300, y: 600}
        ],
    },
    {
        speed: 250, // Plane's horizontal movement speed
        obstacles: [
            /* X      Y      Inverted  */
            createObs(500,   600),           // Ground obstacle
            createObs(1200,  200, false),
            createObs(1300,  700),
            createObs(1900,  300,   false),  // Ceiling obstacle (inverted)
            createObs(2500,  700),
            createObs(2700, 200, false),
            createObs(3200, 600),
            createObs(3600,  200,   false),
            createObs(4000,  700),
            createObs(4200,  200, false),
            createObs(4400, 700),
            createObs(4600, 200, false),
            createObs(4800, 200, false),
            createObs(5000, 700),
            createObs(5200, 200, false),
            createObs(5400, 700),
            createObs(5600, 200, false),
            createObs(5800, 700),
            createObs(6000, 200, false),
            createObs(6200, 700),
            createObs(6400, 200, false),
            createObs(6600, 700),
            createObs(6800, 200, false),
            createObs(7000, 700),
            createObs(7200, 200, false),
            createObs(7400, 700),
            createObs(7600, 200, false),
            createObs(7800, 700),
            createObs(8000, 200, false),
            createObs(8200, 700),
            createObs(8500, 200, false),
            createObs(8700, 700),
            createObs(9000, 200, false),
            createObs(9200, 700),
            createObs(9500, 200, false),
            createObs(9700, 700),
            createObs(10000, 200, false)
        ],
        stars : [
            {x: 800, y: 300},
            {x:1200, y: 450},
            {x: 1500, y: 400},
            {x: 1900, y: 500},
            {x: 2300, y: 450},
            {x: 2500, y: 500},
            {x: 2700, y: 550},
            {x: 3000, y: 400},
            {x: 3200, y: 300},
            {x: 3500, y: 600},
            {x: 3900, y: 500},
            {x: 4200, y: 600},
            {x: 4500, y: 400},
            {x: 4800, y: 500},
            {x: 5300, y: 600},
            {x: 5600, y: 400},
            {x: 5900, y: 500},
            {x: 6100, y: 500},
            {x: 6300, y: 600}, 
            {x: 6600, y: 400},
            {x: 6900, y: 500},
            {x: 7200, y: 600},
            {x: 7500, y: 400},
            {x: 7800, y: 500},
            {x: 8100, y: 600},
            {x: 8400, y: 400},
            {x: 8700, y: 500},
            {x: 9000, y: 600},
            {x: 9300, y: 400},
            {x: 9600, y: 500},
            {x: 9900, y: 600}
        ],
    },
    // LEVEL 2 - Faster speed, more challenging obstacles
    {
        speed: 300, // Faster plane movement
          obstacles: [
            /* X      Y      Inverted  */
            createObs(500,   600),           // Ground obstacle
            createObs(1200,  200, false),
            createObs(1300,  700),
            createObs(1900,  300,   false),  // Ceiling obstacle (inverted)
            createObs(2500,  700),
            createObs(2700, 200, false),
            createObs(3200, 600),
            createObs(3600,  200,   false),
            createObs(4000,  700),
            createObs(4100,  200, false),
            createObs(4600,  600),
            createObs(4900,  200, false),
            createObs(5000, 700),
            createObs(5200, 200, false),
            createObs(5500, 700),
            createObs(5800, 200, false),
            createObs(6000, 700),
            createObs(6200, 200, false),
            createObs(6400, 700),  
            createObs(6600, 200, false),
            createObs(6800, 700),
            createObs(7000, 200, false),
            createObs(7200, 700),
            createObs(7500, 200, false),
            createObs(7800, 700),
            createObs(8000, 200, false),
            createObs(8200, 700),
            createObs(8500, 200, false),
            createObs(8700, 700),
            createObs(9000, 200, false),
            createObs(9200, 700),
            createObs(9500, 200, false),
            createObs(9700, 700),
            createObs(10000, 200, false),
            createObs(10200, 700),
            createObs(10500, 200, false),
            createObs(10800, 700),      
            createObs(11000, 200, false),
            createObs(11300, 700),
            createObs(11500, 200, false),
            createObs(11800, 700),
            createObs(12000, 200, false),
            createObs(12300, 700),
            createObs(12500, 200, false),
            createObs(12800, 700),
            createObs(13000, 200, false),
            createObs(13300, 700),
            createObs(13500, 200, false),
            createObs(13800, 700),
            createObs(14000, 200, false)
        ],
        stars : [
            {x: 800, y: 300},
            {x:1200, y: 450},
            {x: 1500, y: 400},
            {x: 1900, y: 500},
            {x: 2300, y: 450},
            {x: 2500, y: 500},
            {x: 2700, y: 550},
            {x: 3000, y: 400},
            {x: 3200, y: 300},
            {x: 3500, y: 600},
            {x: 3900, y: 500},
            {x: 4200, y: 600},
            {x: 4500, y: 400},
            {x: 4800, y: 500},
            {x: 5300, y: 600},
            {x: 5600, y: 400},
            {x: 5900, y: 500},
            {x: 6100, y: 500},
            {x: 6300, y: 600},
            {x: 6600, y: 400},
            {x: 6900, y: 500},
            {x: 7200, y: 600},
            {x: 7500, y: 400},
            {x: 7800, y: 500},
            {x: 8100, y: 600},
            {x: 8400, y: 400},
            {x: 8700, y: 500},
            {x: 9000, y: 600},
            {x: 9300, y: 400},
            {x: 9600, y: 500},
            {x: 9900, y: 600},
            {x: 10400, y: 400},
            {x: 10700, y: 500},
            {x: 11000, y: 600},
            {x: 11300, y: 400},
            {x: 11600, y: 500},
            {x: 11900, y: 600},
            {x: 12200, y: 400},
            {x: 12500, y: 500},
            {x: 12800, y: 600},
            {x: 13100, y: 400},
            {x: 13400, y: 500},
            {x: 13700, y: 600},
            {x: 14000, y: 400},

        ],
    },
];

// ============================================
// GAME STATE VARIABLES
// ============================================
let currentLevelIndex = 0;    // Tracks which level the player is on
let plane;                    // Reference to the player's plane sprite
let hasLanded = false;        // True when plane hits the ground (game over)
let hasBumped = false;        // True when plane hits an obstacle (game over)
let isGameStarted = false;    // True once player presses start
let isGameEnd = false;        // True when level is completed successfully
let cursors;                  // Stores keyboard cursor keys
let messageToPlayer;          // Start screen text
let retryText;                // Game over text
let gameWinText;    
let totalstars = 0;          // Level complete text
let levelStars = 0;

// ============================================
// INITIALIZE PHASER GAME
// ============================================
const Game = new Phaser.Game(config);

// ============================================
// PRELOAD FUNCTION - Load all game assets
// ============================================
function preload() {
    // Load images and spritesheets
    this.load.image("background", './PNG/background.png');
    this.load.image("ground", './PNG/groundGrass.png');
    this.load.image("bufferup", './PNG/rockGrass.png');         // Ground obstacles
    this.load.image("bufferdown", './PNG/rockGrassDown.png');   // Ceiling obstacles
    this.load.image("star", "./PNG/starGold.png");
    this.load.image("smoke", "./PNG/puffLarge.png");
    // Load plane spritesheet (could be used for animations)
    this.load.spritesheet("plane", './PNG/Planes/planeGreen1.png', {
        frameWidth: 64,   // Width of each frame
        frameHeight: 96   // Height of each frame
    });
    
    // Load background music
    this.load.audio('bgMusic', './backgroundmusicforvideos-game-minecraft-gaming-background-music-402451.mp3');
    
    // Load star music
    this.load.audio('starMusic', './starcollect.wav');

    // Crash sound
    this.load.audio('crashMusic', './crashmusic.mp3');
}

// ============================================
// CREATE FUNCTION - Set up game objects
// ============================================
function create() {
    // Reset game state variables when scene restarts
    hasLanded = false;
    hasBumped = false;
    isGameStarted = false;
    isGameEnd = false;
    hasPlayedCrash = false;
    // Setup the smoke group once at the start
    this.smokeGroup = this.physics.add.staticGroup();
    this.hasPlayedCrash = false;

    // Store commonly used values
    const width = this.scale.width;
    const height = this.scale.height;
     const currentLevel = levels[currentLevelIndex];
    this.levelLength = 5000 + (currentLevelIndex * 1500);  // Total horizontal length of the level
   

    // ---- BACKGROUND ----
    // Add background image (scrollFactor 0 = doesn't move with camera)
    this.add.image(0, 0, "background")
        .setOrigin(0, 0)
        .setDisplaySize(width, height)
        .setScrollFactor(0);
    
    // ---- AUDIO SETUP ----
    // Create background music only once (persists across scene restarts)
    if (!this.bgMusic) {
        this.bgMusic = this.sound.add('bgMusic', { volume: 0.4, loop: true });
    }

    // ---- GROUND CREATION ----
    // Create a static physics group for ground tiles
    const roads = this.physics.add.staticGroup();
    // Loop to create ground tiles across the entire level
    for (let x = 0; x < this.levelLength; x += 128) {
        roads.create(x, height - 32, "ground")
            .setScale(2)      // Make tiles bigger
            .refreshBody();   // Update physics body after scaling
    }

    // ---- OBSTACLE CREATION ----
    // Create static physics group for obstacles
    const obstacles = this.physics.add.staticGroup();
    // Add each obstacle from the current level's data
    currentLevel.obstacles.forEach(obs => {
        obstacles.create(obs.x, obs.y, obs.key);
    });

  // ---- PLAYER PLANE SETUP ----
    // 1. Create the plane sprite
    this.plane = this.physics.add.sprite(100, 300, 'plane');
    
    // 2. Physics properties
    this.plane.setBounce(0.5);
    this.plane.body.allowGravity = false;

    // 3. Set world and camera boundaries to the DYNAMIC length
    // 'height' must be defined earlier in create() as 'this.scale.height'
    this.physics.world.setBounds(0, 0, this.levelLength, height);
    this.cameras.main.setBounds(0, 0, this.levelLength, height);

    // 4. Constraints and following
    this.plane.setCollideWorldBounds(true);
    this.cameras.main.startFollow(this.plane, true, 0.1, 0.1);


    // ---- STAR CREATION ----
       const stars = this.physics.add.staticGroup();
        if(currentLevel.stars) {
        currentLevel.stars.forEach(starData => {
            stars.create(starData.x, starData.y, "star");
        });
        }

    // Create a score variable and text to display it

    this.scoreText = this.add.text(16, 16, "Stars: " + totalstars, {
        fontSize: '32px',
        fill: '#000' 
    }).setScrollFactor(0).setDepth(100);

    //Star Music
    if(!this.starMusic) {
        this.starMusic = this.sound.add('starMusic', { volume: 0.4, loop: false})
    }
    // 4. COLLECTION LOGIC
    // This tells Phaser: "When the plane overlaps with any object in the stars group..."
        this.physics.add.overlap(this.plane, stars, (player, star) => {
            star.disableBody(true, true);
            
            levelStars += 1; // Add to level buffer, NOT totalstars yet
            
            // Display the sum of banked stars + current level stars
            this.scoreText.setText(`Total Stars:  ${totalstars}   Level Stars: ${levelStars}`);
            
            this.starMusic.play();
        }, null, this);
  
    // ---- UI TEXT ELEMENTS ----
    // Start message (centered, doesn't scroll with camera)
    messageToPlayer = this.add.text(
        width / 2, 
        height / 2, 
        `LEVEL ${currentLevelIndex + 1}\nPress UP or Tap to Start`, 
        { 
            fontSize: '40px', 
            fill: '#000', 
            align: 'center', 
            fontWeight: 'bold' 
        }
    ).setOrigin(0.5).setScrollFactor(0);

    // Game over message (hidden initially, high depth = rendered on top)
    retryText = this.add.text(
        width / 2, 
        height / 2, 
        'GAME OVER\nPress R or Tap to Retry', 
        {
            fontSize: '48px', 
            fill: '#fff', 
            backgroundColor: '#000', 
            padding: 20, 
            align: 'center'
        }
    ).setOrigin(0.5).setScrollFactor(0).setVisible(false).setDepth(100);
    
    // Level complete message (hidden initially)
    this.gameWinText = this.add.text(
        width / 2, 
        height / 2, 
        'LEVEL COMPLETE!\nPress N or Tap for Next Level', 
        {
            fontSize: '48px', 
            fill: '#fff', 
            backgroundColor: '#00ff00', 
            padding: 20, 
            align: 'center'
        }
    ).setOrigin(0.5).setScrollFactor(0).setVisible(false).setDepth(100);

    // ---- COLLISION DETECTION ----
    // Set up collision callbacks
    this.physics.add.collider(this.plane, roads, () => { 
        hasLanded = true; // Plane hit the ground = game over
    });
    this.physics.add.collider(this.plane, obstacles, () => { 
        hasBumped = true; // Plane hit obstacle = game over
    });

    // ---- INPUT SETUP ----
    // Create cursor keys for keyboard input
    cursors = this.input.keyboard.createCursorKeys();
    
    // Add specific keys for retry and next level
    this.keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    this.keyN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);
}

// ============================================
// UPDATE FUNCTION - Game loop (runs every frame)
// ============================================
function update() {
    // Safety check - exit if plane doesn't exist
    if (!this.plane) return;

    // Get current level configuration
    const currentLevel = levels[currentLevelIndex];

    // Check if player is interacting (keyboard UP arrow or touch/mouse click)
    const isInteracting = cursors.up.isDown || this.input.activePointer.isDown;

    // ---- GAME START LOGIC ----
    if (!isGameStarted && isInteracting) {
        // Resume audio context (required by browsers for user-initiated audio)
        if (this.sound.context.state === 'suspended') {
            this.sound.context.resume();
        }
        
        isGameStarted = true; // Mark game as started
        this.plane.body.allowGravity = true; // Enable gravity on plane
        
        // Remove start message
        if (messageToPlayer) messageToPlayer.destroy();
        
        // Start background music
        this.bgMusic.play();

    
    }

    // ---- MAIN GAMEPLAY LOGIC ----
    if (isGameStarted && !isGameEnd) {
        
        // If plane hasn't crashed yet
        if (!hasLanded && !hasBumped) {
            
          
            // Move plane forward at current level's speed
            this.plane.setVelocityX(currentLevel.speed);

            // If player is holding up/tapping, make plane fly upward
            if (isInteracting) {
                this.plane.setVelocityY(-160); // Negative Y = upward movement
            }

            // ---- WIN CONDITION ----
            // Check if plane has reached end of level
            if (this.plane.x >= this.levelLength - 200) {
                isGameEnd = true; // Mark level as complete
                
                // Stop plane movement
                this.plane.setVelocityX(0);
                this.plane.setVelocityY(0);
                this.plane.body.allowGravity = false;
                
                // Show victory message
                this.gameWinText.setVisible(true);
            }
        } else {
            // ---- GAME OVER LOGIC ----
            // Plane has crashed (landed or bumped)
            this.plane.setVelocityX(0); // Stop horizontal movement
            this.plane.setTint(0xff0000); // Tint plane red to show damage
            retryText.setVisible(true); // Show retry message

              // Crash sound
            if (!this.crashMusic) {
               this.crashMusic = this.sound.add('crashMusic', { volume: 0.2, loop: false});
              
            }
            if(!this.hasPlayedCrash) {
                this.crashMusic.play();
                const puff = this.smokeGroup.create(this.plane.x, this.plane.y, "smoke");
                puff.setScale(1).setAlpha(0.8); // Make it look like a little cloud
                this.hasPlayedCrash = true;
                
            }
        }
    }

    // ---- RETRY INPUT ----
    // Check if player pressed R or tapped (and game is over)
    if (Phaser.Input.Keyboard.JustDown(this.keyR) || this.input.activePointer.isDown) {
        if (hasLanded || hasBumped) {
            levelStars = 0; 
            this.scene.restart(); // Restart current level
        }
    }
    
    // ---- NEXT LEVEL INPUT ----
    // Check if player pressed N or tapped (and level is complete)
    if (Phaser.Input.Keyboard.JustDown(this.keyN) || this.input.activePointer.isDown) {
        if (isGameEnd) {
            // Increment level index and loop back to start if needed
            currentLevelIndex = (currentLevelIndex + 1) % levels.length;
            totalstars += levelStars; // Bank current level stars into total
            
            // Restart scene with new level
            this.scene.restart();
        } 
    }
} 