import React, {useState} from 'react';
import './NewUser.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import {Link} from 'react-router-dom';

//FireBase
import firebase from '../../config/firebase';
import 'firebase/auth';

export default () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [msgType, setMsgtype] = useState();
    const [msg, setMsg] = useState();
    const [loading, setLoading] = useState();

    function cadastrar(){

        setLoading(1);

        setMsgtype(null);

        if(!email || !password){
            setMsgtype('error')
            setMsg('Você precisa informar o email e senha para fazer o cadastro !')
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, password).then(result => {
            setLoading(0);
            setMsgtype('sucess')
        }).catch(error => {
            setLoading(0);
            setMsgtype('error')
           switch(error.message)
           {
            case 'Password should be at least 6 characters':
                setMsg('A senha deve ter pelo menos 6 caracteres !')
                break;
            case 'The email address is already in use by another account.':
                setMsg('Este Email já esta sendo utilizado por outro usuario !');
                break;
            case 'The email address is badly formatted.':
                setMsg('O formato do seu email é invalido !');
                break;
            default:
                setMsg('Não foi possivel cadastrar, tente novamente mais tarde');
                break;    
           }
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
                    <h1>New account</h1>
                    <form >
                        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email"/>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>
                        {
                            loading ? <center><CircularProgress color="secondary"/></center>
                            : <button onClick={cadastrar} type="button">Register</button>
                        }
                        
                        <div className="type-msg">
                            {msgType === 'sucess' && <Alert variant="filled" severity="success">Usuario Cadastrado com Sucesso</Alert>}
                            {msgType === 'error' && <Alert variant="filled" severity="error">{msg}</Alert>}
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