Project Overview
This project is a high-performance, side-scrolling "Flappy Bird" style game built
using the Phaser 3 JavaScript framework. It features an infinite road system,
dynamic obstacle spawning, and responsive controls for both desktop and
mobile devices.

Key Features
Infinite World: Uses TileSprites for seamless background and road
scrolling.
Dynamic Scaling: Optimized for high-resolution screens with
Phaser.Scale.FIT .
Dual Input: Supports Keyboard (Up Arrow/R Key) and Touch/Mouse clicks for
universal playability.
Collision Physics: Built on the Arcade Physics engine with custom hitboxes
for rock obstacles.
Retry System: A fixed-position UI overlay that allows instant game restarts
without page reloads.

Installation & Setup
To run this game locally, ensure you have a local web server (like Live Server for
VS Code) to handle the asset loading (CORS).
Clone the repository or download the source files.
•

•

•

•

•

1.

Ensure your directory structure matches:
/index.html
/PNG/ (Images and Sprites)
/WAV/ (Audio files)
Launch your local server and open index.html .

Controls

Action Input
Start Game / Flap UP Arrow or Screen Tap / Click
Restart (Game Over) R Key or Screen Tap / Click

Developer Configuration

The game resolution is currently set to window.innerWidth to provide a full-
screen experience. You can modify the difficulty by adjusting these variables in

update() :

// Gravity: Higher = Harder
gravity: { y: 300 }
// Flap Strength: Higher negative = Higher jumps
this.plane.setVelocityY(-160);
// Forward Speed
this.plane.setVelocityX(150);



Website: plane-ride.netlify.app

Built with Phaser 3 - Documentation for the Infinite Runner Project
