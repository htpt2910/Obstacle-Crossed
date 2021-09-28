/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { Select } from 'antd';
import 'antd/dist/antd.css';
import SignIn from './components/SignIn';
import './App.css'

function App() {
  const adminUser = {
    username: "admin",
    password: "admin123",
  }
  
    const { Option } = Select;

  
  const [user, setUser] = useState({username: "", password: ""});
  const [error, setError] = useState("")

  const Login = details => {
    console.log(details);
    if(details.username === adminUser.username && details.password === adminUser.password){
      console.log("Logged in successfully!");
      setUser({
        username: details.username,
        password: details.password,
      });
    }
      
    else 
      console.log("Details do not match!");
      setError("Details do not match!")
  }


  const Logout = () => {
    setUser({
      username: "",
      password: "",
      // role: "",
    });
  }

  return (
    <div className="App">
      {(user.username !== "") ? (
        <div>
          welcome {adminUser.username}
          <button onClick={Logout}>Log out</button>
        </div>
      ) : (
        <SignIn Option={Option} Login={Login} error={error}/>
      )}
    </div>
  );
  
  
}

export default App;
