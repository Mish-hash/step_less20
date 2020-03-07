import React, { useState } from 'react';
import {
  Router,
  Switch,
  Link,
} from "react-router-dom";

import styles from './App.module.sass';
import HomePage from './components/pages/HomePage/HomePage';
import UsersPage from './components/pages/UsersPages/UsersPages';
import UserProfilePage from './components/pages/UserProfilePage/UserProfilePage';
import LoginPage from './components/pages/Login/LoginPage';
import { Provider } from 'react-redux';
import configureStore from './redux/config';
import {history} from './utils/history';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';
import PrefetchRouter from './components/PrefetchRouter/PrefetchRouter';
import PostsPage from './components/pages/PostsPage/PostsPage';


function App() {

  const [store] = useState(configureStore());

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className={styles.container}>
      <Provider store={store}>
      <Router history={history}>
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
                <li>
                  <Link to="#" onClick={logout}>logout</Link>
                </li>
              </ul>
            </nav>
  
          <Switch>
            <PrivateRouter exact path="/users" component={UsersPage}/>
            <PrivateRouter exact path="/users/:id" component={UserProfilePage}/>
            <PrefetchRouter prefetch exact path="/" component={HomePage}/>
            <PrefetchRouter prefetch loggedInUserForbidden exact path="/login" component={LoginPage}/>
            <PrefetchRouter prefetch exact path="/posts" component={PostsPage}/>
            <PrefetchRouter>NOT FAUND 404</PrefetchRouter>
          </Switch>
        </div>
      </Router> 
      </Provider>   
    </div>
  );
}

export default App;
