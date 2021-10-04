import React from "react";

const LoginApp = () => {

    return (
        <div className="LoginApp">
        <h1>Welcome to Memory Game!</h1>
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