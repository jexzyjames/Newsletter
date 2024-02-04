import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './newsletter-sign-up-with-success-message-main/design/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Thanks from './newsletter-sign-up-with-success-message-main/design/Thanks';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
    <Routes>
    <Route exact path='/'  element={<Main/>}/>

      <Route exact path='/thanks'  element={<Thanks/>}/>
    </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
