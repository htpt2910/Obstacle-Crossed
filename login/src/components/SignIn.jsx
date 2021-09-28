/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import logo from './logo.png';
function SignIn(props) {
    
    const [details, setDetails] = useState({username: "", password: ""});
    const submitHandler = e => {
        e.preventDefault();
        props.Login(details);
    }

    return (
        <form onSubmit={submitHandler} className="container">
            <div className="form-inner">
                <div className="game-title"> Obstacles Crossed </div>
                <p className="cheering">WELCOME TO OUR WORLD</p>
                <div className="logo-container">
                    <img className="logo" src={logo} alt="img"/>
                </div>
                {(props.error !== "") ? <div className="error">{props.error}</div> : ""}
                <div className="input-container">
                    <div>
                        <label className="label" htmlFor="username">USERNAME:</label><br/>
                        <input className="input" autoComplete="off" placeholder="  username..." type="text" name="username" id="uname" onChange= {e => setDetails({...details, username: e.target.value})} value={details.username} />
                        </div>
                    <div>
                        <label className="label" htmlFor="password">PASSWORD:</label><br/>
                        <input className="input" placeholder="  password..." type="password" name="password" id="pwd" onChange= {e => setDetails({...details, password: e.target.value})} value={details.password} />
                    </div>
                </div>
                <Select className="cbb" defaultValue="Player" onChange={value => {
                    console.log(`you are ${value}`)
                }}>
                    <props.Option className="cbbItems" role="Player" value="Player">Player</props.Option>
                    <props.Option className="cbbItems" role="Admin" value="Admin">Admin</props.Option>
                </Select>
                <br />
                <input className="SubmitBtn" type="submit" value="Login" /><br />
                <div className="sign-up-btn">
                    <a className="sign-up-btn"  href='#SignUp' >Sign Up</a><br />
                </div>
                <div className="reset-pwd-btn">
                    <a className="rs-btn" href='#' >Forgot password?</a>
                </div>
                
            </div>
        </form>
    )
}

export default SignIn;

