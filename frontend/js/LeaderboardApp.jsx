import React, { useState, useEffect } from "react";

const Entry = function (props) {
    return (
        <tr>
            <td>{props.username}</td>
            <td>{props.gamesplayed}</td>
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
                {entries.map((entry) => <Entry username={entry.username} gamesplayed={entry.gamesplayed} highscore={entry.highscore} />)}
            </table>
            <button className="back" onClick={() => window.location.href='/room.html'}>Back</button>
        </div>
    )
}
export default LeaderboardApp