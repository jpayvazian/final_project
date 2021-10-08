import React from "react";

const LoginApp = () => {

    return (
        <div className="LoginApp">
        <h1>Welcome to Memory Game!</h1>
        <svg id='blue_yellow' width="170" height="85" viewBox="0 0 170 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="85" height="85" fill="#1D52DA"/>
                <rect x="85" width="85" height="85" fill="#DAC71D"/>
            </svg>
        <svg id='red_green' width="170" height="85" viewBox="0 0 170 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="85" width="85" height="85" fill="#DA1D1D"/>
                <rect width="85" height="85" fill="#45963E"/>
            </svg>
            <div id='loginForm'>
                <h2>Login</h2>
                <button id="gitBtn" onClick={(e) => {
                    e.preventDefault();
                    window.location.href='/auth/github';
                }}>Sign in with GitHub</button>
            </div>
        </div>
    )
}
export default LoginApp