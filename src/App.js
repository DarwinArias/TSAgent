import LoginForm from './pages/loginForm';
import Stat from './pages/stat';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {

  const adminUser = {
    username: "darwin",
    password: "darwinarias"
  }

  const [user,setUser] = useState({username: ""});
  const [error, setError] = useState("");
  
  const Login = details => {
    console.log(details);
    if (details.name == adminUser.username && details.password == adminUser.password){
      console.log("Logged in");
      setUser({
        username: details.name,
      });

    }else{
      console.log("Details do not match!");
    }
  }

  const Logout = () =>{
    setUser({
      username: "",
    });
  }
  return(
    <div>
      <div className="App">
          {(user.username !== "") ? 
          (
          <Stat user = {user.username}/>
          ) : (
          <LoginForm Login = {Login} error = {error} /> 
        )}
        </div>
    </div>
  )
}

export default App;
