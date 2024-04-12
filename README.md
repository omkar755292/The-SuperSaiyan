# The Super Saiyan: Animation Game (Single Page Web Game)

### Project Overview

"The Super Saiyan" is an animation game featuring Goku as the player character from the Dragon Ball series. It incorporates animations for character movement and combat actions. This project started in 2022 and has been continuously developed, showcasing various features and functionalities.

### Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Database:** MongoDB

### Features

- **Game Features:** Goku's movements, Progressive Difficulty Levels, Earn scores
- **Animation:** Smooth character animations for realistic gameplay
- **CI/CD:** Implemented using GitHub Actions for continuous integration and deployment

###  Animation Mechanics

The animation mechanism in "The Super Saiyan" uses CSS for visual effects like Goku's jumping and movement, while JavaScript handles interactions and triggers animations based on player actions or game events. This combination creates dynamic and responsive gameplay, bringing Goku and the obstacles to life with fluid movements and engaging visuals. 

### Usage

- Open the game interface in your browser: [The Super Saiyan](http://13.53.187.244:9003/)
- Use the keyboard arrow keys to move Goku and avoid black Goku's attack.
- Earn scores by dodging attacks and surviving as long as possible.
- Controls Arrow Up: Jump or perform actions, Arrow Left/Right: Move Goku left or right. 

### Deployment

The game is deployed on a hosting platform AWS EC2 with continuous integration and deployment (CI/CD) using GitHub Actions for automated testing and deployment.

### Testing

- Backend API Testing: Unit tests for API endpoints, integration tests for database interactions
- Animation Testing: Ensure animations are responsive and synchronized with gameplay



------------


### Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/omkar755292/The-Irritated-Saiyan.git
   cd The-Irritated-Saiyan
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start Project:
   ```bash
   npm start
   ```

### Configuration:
To customize and configure the Animation Game, you can modify the following settings and files:

1. Environment Variables
Create a .env file in the root directory and specify the following configuration variables:
   ```plaintext
   PORT=3000
   HOSTNAME='localhost'
   CONNECTION_STRING=mongodb://localhost:27017/animation-game
   ```

------------

### Contact Information
For inquiries, collaborations, or feedback, contact [omkar panchal](mailto:omkarpanchal.cse@gmail.com).
