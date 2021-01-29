import React from 'react'
import './Login.css'
import { auth,provider } from "./firebase";

import fb_logo1 from   './images/fb_logo1.png' 
import fb_logo2 from   './images/fb_logo2.png' 
import { useStateValue } from './StateProvider';
import { actionTypes  } from "./reducer";

function Login() {
    const [state, dispatch ]= useStateValue();
    const signin = () =>{
        //sign in ...
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch(error => alert(error.message))
    };

    return (
        <div className="login">
            <div className="login__logo">

                <img src={fb_logo1} alt=""/>
                <img src={fb_logo2} alt=""/>

            </div>
            <button className="login__Button" onClick={signin}>Sign In</button>
        </div>
    )
}

export default Login
