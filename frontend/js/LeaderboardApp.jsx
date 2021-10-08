import React from "react";

const LeaderboardApp = () => {

    return (
        <div className="LeaderboardApp">
            <h1>Leaderboard</h1>
            <svg id='blue_yellow' width="170" height="85" viewBox="0 0 170 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="85" height="85" fill="#1D52DA"/>
                <rect x="85" width="85" height="85" fill="#DAC71D"/>
            </svg>
            <svg id='red_green' width="170" height="85" viewBox="0 0 170 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="85" width="85" height="85" fill="#DA1D1D"/>
                <rect width="85" height="85" fill="#45963E"/>
            </svg>
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