import React from 'react'
import '../../../App.css'
import '../../../Styles/Admin.css'
import bg from '../../../assets/login-bg.jpg'

export default function Login(props) {
    return (
        <div className="Login">
            <img className="login-bg" src={bg} alt=""></img>
            <div className="login-overlay flex-center">
                <div className="login-box flex">
                    <div className="login-left flex-center flex-col">
                        <img src="https://demo.uix.store/sober/wp-content/themes/sober/images/logo.svg" alt="logo" width="50%"></img>
                        <div className="login-title">Login To Admin Dashboard</div>
                        <form className="admin-login-form flex-col">
                            <input type="text" placeholder="Email" name="loginEmail"/>
                            <input type="password" placeholder="Password" name="loginPassword"/>
                            <button type="submit" className="btn">LOGIN</button>
                        </form>
                    </div>
                    <div className="login-right">
                        <div className="animation-overlay"></div>
                        <img src={bg} alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    )
}