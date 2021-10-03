import React, {useState} from "react";

const RoomApp = () => {

        const [instructionOverlay, setInstructionOverlay] = useState(true)
        const [hostOverlay, setHostOverlay] = useState(false)
        const [joinOverlay, setJoinOverlay] = useState(false)
        const [waitOverlay, setWaitOverlay] = useState(false)
        const [roomkey, setRoomkey] = useState("")
        const [newroomkey, setNewroomkey] = useState("")
    
        //User joining a game will need to enter a valid room key
        const enterClick = () => {
            //Will need to check if there is an existing room with that specific key
            if({roomkey} == ""){
                alert("Please enter a room key")
                return false
            }
            setJoinOverlay(false)
            setWaitOverlay(true)
        }

        //User hosting a game will need to create a room key
        const submitClick = () => {
             //Will need to add room key to database
            if({newroomkey} == ""){
                alert("Enter a valid room key")
                return false
            }
            setHostOverlay(false)
            setWaitOverlay(true)
        }

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
                <button id="host" onClick={() => {
                    setHostOverlay(true) 
                    setInstructionOverlay(false) }}>Host</button>
                <button id="join" onClick={() => {
                    setJoinOverlay(true) 
                    setInstructionOverlay(false) }}>Join</button>
            </div>
        }
            <div id="hostOverlay" className="overlay">
            {hostOverlay && 
                <div id="hostContents" className="content">
                    <h2>Create a Room</h2>
                    <div></div>
                    <input type="text" id="newRoomKey" className="contentText" placeholder="Create room key" 
                    onChange={(e) => setNewroomkey(e.target.value)}/>
                    <div></div>
                    <button id="hostBack" className="back" onClick={() => {
                    setHostOverlay(false) 
                    setInstructionOverlay(true) }}>Back</button>
                    <button id="submit" onClick={submitClick}>Submit</button>
                </div>
            }
            </div>
            <div id="joinOverlay" className="overlay">
            {joinOverlay && 
                <div id="joinContents" className="content">
                    <h2>Please Enter the Room Key</h2>
                    <div></div>
                    <input type="text" id="roomKey" className="contentText" placeholder="Enter room key" 
                    onChange={(e) => setRoomkey(e.target.value)}/>
                    <div></div>
                    <button id="joinBack" className="back" onClick={() => {
                    setJoinOverlay(false) 
                    setInstructionOverlay(true) }}>Back</button>
                    <button id="enter" onClick={enterClick}>Enter</button>
                </div>
            }
            </div>
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