# CS4241 - Webware Final Project
Group 11  
Names: Jack Ayvazian, Jack Campanale, Federico Galbiati, Winnie Ly, Vansh Patel

## Memory Game
[link to project]
[link to video]

### Description
We created a memory game inspired by Simon, where a user has to repeat a given flashing sequence of four colored tiles (with sound effects). The sequence grows by one and speeds up slighly each round, making it more difficult as the game progresses.  
Our landing page first prompts the user to authenticate via Github, and afterwards, they are redirected to the instructions page. From there, the user can start the game or view the leaderboard, which displays the highscores and gamesplayed of each user in the database. [...]

### Technologies
#### MERN Stack
* MongoDB  
  * Stores user githubUsername and id 
  * Tracks highscore and games played for each user  
* Express (Server framework for Node.js)
* React
  * Front end follows a functional component structure with use of .jsx
  * App component broken down by page, with subcomponents such as the game tiles
* Node.js (JS runtime environment)

#### Other:
* Passport.js: Authenticates user with GitHub account  
* Anime.js: Library used for custom CSS styling and animations

### Challenges

* Creating and debugging the main game logic with React: While React hooks such as useState and useEffect were very useful for developing the game, there were a lot of different changing states to keep track of and modify. As setting state is asynchronous, it was difficult to track the changes in state while line-by-line debugging, since the page is not guaranteed to re-render on the line you expect it to.
* [...]

### Group Responsibilities
* Jack Ayvazian: Developed the main game logic and React frontend  
* Jack Campanale: User Interface for game with Anime.js styling and animations  
* Federico Galbiati: Implemented Github authentication with Passport.js  
* Winnie Ly: Structured layout of HTML pages and CSS along with displaying Leaderboard data 
* Vansh Patel: Sorted player highscores  
