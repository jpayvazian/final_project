import React, { useState, useEffect } from "react";

const Entry = function (props) {
    console.log("props: ", props)
    console.log("username: ", props.username)
    console.log("games: ",props.gamesplayed)
    console.log("highscore: ", props.highscore)
    return (
        <tr>
            <td>{props.username}</td>
            <td>{props.games}</td>
            <td>{props.highscore}</td>
        </tr>
    )
}

const LeaderboardApp = (props) => {

    const [entries, setEntryState] = useState([])

    useEffect(() => {
        fetch('/leaderboard')
            .then(response => response.json())
            .then(jsonArray => setEntryState(jsonArray))
    }, [])

    return (
        <div className="LeaderboardApp">
            <h1>Leaderboard</h1>
            <table>
                <tr>
                    <th scope="col">Username</th>
                    <th scope="col"># of Games Played</th>
                    <th scope="col">High Score</th>
                </tr>
                {entries.map((entry) => <Entry username={entry.username} games={entry.games} highscore={entry.highscore} />)}
            </table>
        </div>
    )
}
export default LeaderboardApp