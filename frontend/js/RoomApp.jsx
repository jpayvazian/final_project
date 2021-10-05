import React, {useState} from "react";

const RoomApp = () => {

        const [instructionOverlay] = useState(true)

    return (
        <div className="RoomApp">
            <h1>Welcome to Memory Game!</h1>
            {instructionOverlay && 
            <div id='instructionOverlay' className="overlay">
                <h2>Instructions</h2>
                <p>
                    The game is just like Simon where there are four colored buttons: red, yellow, green, and blue and it would
                    play a sequence of patterns that the player(s) have to re-create the pattern to go to the next round. After
                    completing each round, the difficulty will increase as both the sequences would get longer and the speed of 
                    displaying those sequences will increase. 
                </p>
                <h3>Leaderboard</h3>
                <p>
                    To see the leaderboard, press the "Leaderboard" button which will redirect you to the leaderboard page that 
                    shows the username of each player, the number of games they have played, and who has the current highest score.
                </p>
                <h3>Play Game</h3>
                <p>
                    To play the game, press the "Play" button which will redirect you to the game page where you will need
                    to input the correct sequence of colored tiles that have occurred in that round.
                </p>
                <button id="leaderboard" onClick= {(e) => {
                        e.preventDefault()
                        window.location.href='/leaderboard.html';
                    }}>Leaderboard</button>
                <button id="play" onClick= {(e) => {
                    e.preventDefault()
                    window.location.href='/game.html';
                }}>Play</button>
            </div>
        }
        </div>
    )
}

export default RoomApp