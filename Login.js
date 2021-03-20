import React from 'react'
import './Login.css'

export default function Login() {
    return (
        <div className="login-Container">
            <div className="login-sub-Container">
               <div className="main">
                    <div className="login">
                         <input type="text" placeholder="Username"/>
                         <input type="password" placeholder="Password"/>
                         <button className="login-btn">LOGIN</button> </div>
                    </div>
            </div>
        </div>
    )
}
