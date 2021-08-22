import React, {useState} from 'react';
import './login.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Link, Redirect} from 'react-router-dom';


//firebase

import firebase from '../../config/firebase';
import 'firebase/auth';

import { useSelector, useDispatch } from 'react-redux';

export default () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [msgType, setMsgtype] = useState();
    const [loading, setLoading] = useState();

    const dispatch = useDispatch();
   
    function SignIn(){

        setLoading(1);

        setMsgtype(null);
        
        
        firebase.auth().signInWithEmailAndPassword(email, password).then(result => {
            setLoading(0);
            setMsgtype('sucess')
            setTimeout(() => {
                dispatch({type: 'LOG_IN', userEmail: email});
            }, 2000);
            
        }).catch(error => {
            setLoading(0);
            setMsgtype('error')
        });

    }

    return(
        <>
        <body> 
            <header>
            <div className="headerLogoLogin">
                <Link to="/newUser">
                    <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-1-1.png" alt="Netflix"/>
                </Link>
            </div>
            </header> 
            <div className="login">

                    { useSelector(state => state.userLogado) > 0 ? <Redirect to='/home' /> : null }

                    <img className="logo" width="100" height="100" src="https://catracalivre.com.br/wp-content/uploads/2020/05/netflix.jpg" alt="User"/>
                    <h1>Sign In</h1>
                    <form >

                        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email"/>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>

                        {
                            loading ? <center><CircularProgress color="secondary"/></center>
                            : <button onClick={SignIn} type="button">login</button>
                        }
                        
                        <div className="type-msg">
                            {msgType === 'sucess' && <h3>Redirecionando....</h3>}
                            {msgType === 'error' && <h3>Usuário ou senha invalidos !</h3>}
                        </div>
                        <div className="div"> 
                            <Link to="recover" className="recover" >Esqueceu sua senha ?</Link><br/>
                            <h3>Novo por aqui ? <Link to="newUser" className="cadastrar" >Cadastre-se agora</Link></h3>
                        </div>
                    </form>
            </div>
        </body>
        <footer className="footer--login">
                Feito por Fabio Robledo <br/>
                Direitos de imagem para Netflix <br/>
                Dados disponibilizados pelo site Themoviedb.org
        </footer>
     </>
    )
}