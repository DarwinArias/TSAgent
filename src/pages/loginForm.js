import React, {useState} from 'react';
import { Link } from "react-router-dom";

function LoginForm({Login,error}){
    const [details,setDetails] = useState({name: "", password: ""});

    const submitHandler = e => {
        e.preventDefault(); //que no se recarge la pag
        Login(details);
        setDetails({...details, password: ""});
    }
    return(
            <div onSubmit={submitHandler}>
                <div className="content">
                <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <img src="assets/css/images/undraw_remotely_2j6y.svg" alt ="logo" className="img-fluid"></img>
                    </div>
                    <div className="col-md-6 contents">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                        <div className="mb-4">
                        <h3>TSA AGENT</h3>
                        <p className="mb-4">Ingrese su usuario y contraseña para iniciar sesión.</p>
                        </div>
                        <div>
                            {(error !== "") ? (<div className='error'>{error}</div>) : ""}
                        </div>
                        <form action="#" method="post">
                        <div className="form-group first">
                            <input type="text" className="form-control" id="username" placeholder="Usuario" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}></input>
                        </div>
                        <div className="form-group last mb-4">
                            <input type="password" className="form-control" id="password" placeholder="Contraseña" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                            
                        </div>
                        <input type="submit" value="Acceder" className="btn btn-block btn-primary"></input>
                        </form>
                        </div>
                    </div>
                    
                    </div>
                    
                </div>
                </div>
            </div>
                <script src="assets/js/jquery-3.3.1.min.js"></script>
                <script src="assets/js/popper.min.js"></script>
                <script src="assets/js/bootstrap.min.js"></script>
                <script src="assets/js/main_login.js"></script>            
            </div>
    )
}

export default LoginForm;