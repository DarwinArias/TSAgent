import React, {useState} from 'react';
import { Helmet } from 'react-helmet';

function LoginForm({Login,error}){
    const [details,setDetails] = useState({name: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    return(
            <div onSubmit={submitHandler}>
                <div class="content">
                <div class="container">
                <div class="row">
                    <div class="col-md-6">
                    <img src="assets/css/images/undraw_remotely_2j6y.svg" alt="Image" class="img-fluid"></img>
                    </div>
                    <div class="col-md-6 contents">
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                        <div class="mb-4">
                        <h3>TSA AGENT</h3>
                        <p class="mb-4">Ingrese su usuario y contraseña para iniciar sesión.</p>
                        </div>
                        <form action="#" method="post">
                        <div class="form-group first">
                            <input type="text" class="form-control" id="username" placeholder="Usuario" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}></input>
                        </div>
                        <div class="form-group last mb-4">
                            <input type="password" class="form-control" id="password" placeholder="Contraseña" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                            
                        </div>
                        <div>
                            {/*error*/}
                        </div>
                        <input type="submit" value="Acceder" class="btn btn-block btn-primary"></input>
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