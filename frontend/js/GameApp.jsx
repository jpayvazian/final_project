import React, {useState, useEffect} from "react";
import ColorTile from "./ColorTile"

const GameApp = () => {

    const colors = ["green", "red", "yellow", "blue"]
    const initGame = {
        appTurn: false,
        appColors: [],
        playerTurn: false,
        playerColors: [],
        playerScore: 0
    }

    const [flashValue, setFlashValue] = useState("")
    const [gameState, setGameState] = useState(initGame)
    const [gameOver, setGameOver] = useState(false)
    const [delayTime, setDelayTime] = useState(505)
    const delay = ms => new Promise(res => setTimeout(res, ms))
    const sounds = {
        green: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
        red: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
        yellow: new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"),
        blue: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3")
      }

    useEffect(() => {
      if (gameState.appTurn) {
        if(delayTime > 100){
            setDelayTime(delayTime - 15)
        }
        let newColor = colors[Math.floor(Math.random() * 4)]
  
        const colorSequence = [...gameState.appColors]
        colorSequence.push(newColor)
        setGameState({ ...gameState, appColors: colorSequence })
      }
    }, [gameState.appTurn])

    useEffect(() => {
        if (gameOver) {
            setDelayTime(505)
            setGameState({...initGame, playerScore: gameState.playerScore} )
          
            //POST user score to update DB leaderboard
            const json = { playerScore: gameState.playerScore }

            fetch( '/score', { 
                method: 'post',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify( json )
            })
            .then( response => response.text())
            .then ( (text) => {
                console.log(text)
            })
        }
      }, [gameOver])

      useEffect(() => {
          if(gameState.appColors.length > 0){
            flashSequence()
              
          }
      }, [gameState.appColors.length])

    const flashSequence = async () => {
        await delay(delayTime*2)
        for (let i = 0; i < gameState.appColors.length; i++) {
            sounds[gameState.appColors[i]].play()
            setFlashValue(gameState.appColors[i])
            await delay(delayTime)
            setFlashValue("")
            await delay(delayTime)
        }
        const colorSequence = [...gameState.appColors]
        setGameState({...gameState, appTurn: false, playerTurn: true, playerColors: colorSequence.reverse() })
    }

    const colorClick = async (color) => {
        if(gameState.playerTurn){
            const playerColorsCopy = [...gameState.playerColors]
            const prevColor = playerColorsCopy.pop()
            setFlashValue(color)
            sounds[color].play()
    
            if (color === prevColor) {
                if (playerColorsCopy.length > 0) { 
                    setGameState({ ...gameState, playerColors: playerColorsCopy }) 
                } 
                else { 
                    setGameState({...gameState, appTurn: true, playerTurn: false, playerColors: [], playerScore: gameState.appColors.length })
                }
            }    
            else { 
                setGameOver(true)
            }
            await delay(delayTime)
            setFlashValue("")
        }
    }

    return (
        <div className="GameApp">
            <div className="tileContainer">
           {colors.map((colorValue, i) => <ColorTile key={i} color={colorValue} flash= {flashValue === colorValue} cursor={gameState.playerTurn} onClick={() => colorClick(colorValue)}/> )} 
            </div>
           <h1 className="score">Score: {gameState.playerScore}</h1>
           {gameOver && 
            <div className="gameover">
                <button id="leaderboard" onClick={() => window.location.href='/leaderboard.html' }>View Leaderboard</button>
            </div>}
           {!gameState.appTurn && !gameState.playerTurn && 
           <button id="start" onClick={() => {
               setGameOver(false)
               setGameState({...initGame, appTurn:true})}
           }>{gameOver ? "Restart" : "Start"}</button>}
        </div>
    )
  }
export default GameApp