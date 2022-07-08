import LoginForm from './pages/loginForm';
import Stat from './pages/stat';
import Log from './pages/log';
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
    //console.log(details);
    if (details.name === adminUser.username && details.password === adminUser.password){
      console.log("Acceso Otorgado");
      //localStorage.setItem('token', true);
      //localStorage.setItem('user', "details.name");
      setUser({
        username: details.name,
      });

    }else{
      setError("Usuario y contraseña invalidos.");
      //console.log(error);
    }
  }

  const Logout = () =>{
    setUser({
      username: "",
    });
    //localStorage.clear();
  }
  return(
    //console.log(localStorage.getItem('token')),
    <div>
      <div className="App">
          {(user.username !== "") ? 
          (
            <Stat user = {user.username} />
          ) : (   
            < LoginForm Login = {Login} error = {error} />
        )}
        </div>
    </div>
  )
}

export default App;
