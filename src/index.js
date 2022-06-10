import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Link, BrowserRouter,Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './login';
import reportWebVitals from './reportWebVitals';

const routs = (
  < BrowserRouter >
     <div>
       <Routes>
        <Route exact path="/" component={Login} />
        <Route path="/search" component={ App } />
        </Routes>
     </div>
  </ BrowserRouter >
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  < BrowserRouter >
     <div>
       <Routes>
        <Route exact path="/" element={ <Login/> } />
        <Route path="/search" element={ <App/> } />
        </Routes>
     </div>
  </ BrowserRouter >
    //{routs}
);

//ReactDOM.render(routs, document.getElementById('root'))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
