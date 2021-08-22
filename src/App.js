import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import store from '../src/store/';
import { Provider } from 'react-redux';


//Paginas 

import login from './view/Login';
import NewUser from './view/NewUser';
import Home from './Home/App';
import RecoverPassword from './view/RecoverPassword';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={login} />
        <Route exact path='/newUser' component={NewUser} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/recover' component={RecoverPassword} />
      </Router>
    </Provider>
  );
}

export default App;