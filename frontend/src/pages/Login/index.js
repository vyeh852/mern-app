import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react';
import './index.css';

export default function Login({ history }) {

    // useEffect(()=>{
    //     if(localStorage.getItem("auth")){
    //         history.push('/')
    //     }

    // },[])
    return (
        <div className="login-container">
            <span className="login-text">email:</span><input type="text"/><br/>
            <span className="login-text">password:</span><input type="text"/><br/>
            <div className="login-btn">
                login
            </div>
            <span className="login-remind">
                <Link to="/register">
                    還沒有帳戶? 立即註冊
                </Link>
            </span>
        </div>
    )
}
