import React, {useState} from 'react';
import './RecoverPassword.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import {Link} from 'react-router-dom';

//FireBase
import firebase from '../../config/firebase';
import 'firebase/auth';

export default () => {

    const [email, setEmail] = useState();
    const [msgType, setMsgtype] = useState();
    const [loading, setLoading] = useState();

    function RecoverPassword(){

        setLoading(1);

        setMsgtype(null);


        firebase.auth().sendPasswordResetEmail(email).then(result => {
            setLoading(0);
            setMsgtype('sucess')
        }).catch(error => {
            setLoading(0);
            setMsgtype('error')
        })
    }

   
    return(
        <>
        <body>
            <header>
            <div className="headerLogo">
                <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-1-1.png" alt="Netflix"/>
            </div>
            <div className="headerUser">
                <Link to="/">
                    <button type="submit">Log in</button>
                </Link> 
            </div>
            </header>  
            <div className="login">
                    <h1>Recover Password</h1>
                    <form >
                        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email"/>
                        {
                            loading ? <center><CircularProgress color="secondary"/></center>
                            : <button onClick={RecoverPassword} type="button">Recover</button>
                        }
                        
                        <div className="type-msg">
                            {msgType === 'sucess' && <Alert variant="filled" severity="success">Enviamos um link no seu e-mail para você redifinir sua senha !</Alert>}
                            {msgType === 'error' && <Alert variant="filled" severity="error">Verifique se o e-mail está correto</Alert>}
                        </div>
                    </form>
            </div>
        </body>
        <footer className="footer-newUser">
                Feito por Fabio Robledo <br/>
                Direitos de imagem para Netflix <br/>
                Dados disponibilizados pelo site Themoviedb.org
        </footer>
     </>
    )
}