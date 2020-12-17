import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';

const App:React.FC = () => {
  return (
    <Switch>
      <Route path='/' component={HomePage} exact/>
      <Route path='/login' component={LoginPage}/>
      <Route path='/register' component={RegisterPage}/>
      <Route render={({location}) => (
        <div>
          <p>{location.pathname}이 페이지는 존재하지 않습니다.</p>
        </div>
      )}/>
    </Switch>
  )
}

export default App;
