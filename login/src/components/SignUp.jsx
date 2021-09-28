import React from 'react'

function SignUp() {
    return (
        <div>
            <div>
                <p>Sign Up!</p>
            </div>
            <div>
                <label>Email address: (*)</label>
                <input type="email" name="email" id="email" /><br />
                <label>Username: (*)</label>
                <input type="text" name="username" id="uname" /><br />
                <label>Gender: </label>
                <input type="checkbox" name="gender" id="gd" /><br />
                <label>Age: </label>
                <input type="text" name="age" id="age" /><br />
                <label>Password: (*)</label>
                <input type="password" name="password" id="pwd" /><br />
            </div>
        </div>
    )
}

export default SignUp
