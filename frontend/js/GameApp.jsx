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
    const delay = ms => new Promise(res => setTimeout(res, ms))

    useEffect(() => {
      if (gameState.appTurn) {
        let newColor = colors[Math.floor(Math.random() * 4)]
  
        const colorSequence = [...gameState.appColors]
        colorSequence.push(newColor)
        setGameState({ ...gameState, appColors: colorSequence })
      }
    }, [gameState.appTurn])

    useEffect(() => {
        if (gameOver) {
            setGameState({...initGame, playerScore: gameState.playerScore} )
            //post user score, game played
        }
      }, [gameOver])

      useEffect(() => {
          if(gameState.appTurn && gameState.appColors.length){
            flashSequence()
          }
      }, [gameState.appTurn, gameState.appColors.length])


    const flashSequence = async () => {
        await delay(1000)
        for (let i = 0; i < gameState.appColors.length; i++) {
            await delay(1000)
            setFlashValue(gameState.appColors[i])
            await delay(1000)
            setFlashValue("")
        }
        const colorSequence = [...gameState.appColors]
        setGameState({...gameState, appTurn: false, playerTurn: true, playerColors: colorSequence.reverse() })
    }

    const colorClick = async (color) => {
        if(gameState.playerTurn){
            const playerColorsCopy = [...gameState.playerColors]
            const prevColor = playerColorsCopy.pop()
            setFlashValue(color)
    
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
            await delay(500)
            setFlashValue("")
        }
    }

    const redirectLeaderboard = () => {
        //redirect to leaderboard page
    }

    return (
        <div className="GameApp">
            <div className="tileContainer">
           {colors.map((colorValue, i) => <ColorTile key={i} color={colorValue} flash= {flashValue === colorValue} onClick={() => colorClick(colorValue)}/> )} 
            </div>
           <h1 className="score">Score: {gameState.playerScore}</h1>
           {gameOver && 
            <div className="gameover">
                <button id="leaderboard" onClick={() => redirectLeaderboard()}>View Leaderboard</button>
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