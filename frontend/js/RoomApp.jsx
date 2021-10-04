import React, {useState} from "react";

const RoomApp = () => {

        const [instructionOverlay, setInstructionOverlay] = useState(true)
        const [waitOverlay, setWaitOverlay] = useState(false)

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
                    displaying those sequences will increase. You can either host a game or join a room with other players with a 
                    room key.
                </p>
                <h3>Host a Game</h3>
                <p>
                    To host a game, press the "Host" button which you will then be prompted to create a
                    room key where you share with other players to join your game. Once you have everyone in your
                    room, you can press the "Start" button to start the game.
                </p>
                <h3>Join a Game</h3>
                <p>
                    To join a game, press the "Join" button which you will then be prompted to enter the room key and once you
                    hit "Enter", it will redirect you to the Waiting Room with other players that have joined as well.
                </p>
                <button id="play" onClick={() => {
                    setWaitOverlay(true) 
                    setInstructionOverlay(false) }}>Play</button>
            </div>
        }
            <div id="waitOverlay" className="overlay">
            {waitOverlay &&  
                <div id="waitContents" className="content">
                    <h2>Waiting Room</h2>
                    <button id="start">Start</button>
                </div>
            }
            </div>
        </div>
    )
}

export default RoomApp