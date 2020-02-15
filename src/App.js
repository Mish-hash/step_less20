import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import styles from './App.module.sass';
import HomePage from './components/pages/HomePage/HomePage';
import UsersPage from './components/pages/UsersPages/UsersPages';
import UserProfilePage from './components/pages/UserProfilePage/UserProfilePage';
import LoginPage from './components/pages/Login/LoginPage';
import { Provider } from 'react-redux';
import configureStore from './redux/config';

function App() {

  const [store] = useState(configureStore());

  return (
    <div className={styles.container}>
      <Provider store={store}>
      <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>
  
          <Switch>
            <Route exact path="/users" component={UsersPage}/>
            <Route exact path="/users/:id" component={UserProfilePage}/>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route exact path="/login" component={LoginPage}/>
            <Route>NOT FAUND 404</Route>
          </Switch>
        </div>
      </Router> 
      </Provider>   
    </div>
  );
}

export default App;
