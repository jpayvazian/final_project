import React from "react";

const LeaderboardApp = () => {

    return (
        <div className="LeaderboardApp">
            <h1>Leaderboard</h1>
            <table>
                <tr>
                    <th scope="col">Username</th>
                    <th scope="col"># of Games Played</th>
                    <th scope="col">High Score</th>
                </tr>
            </table>
        </div>
    )
}
export default LeaderboardApp