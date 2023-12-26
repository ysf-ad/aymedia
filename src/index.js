import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CheeryChews from './cheery-chews';
import DonerGyros from './doner-gyros';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/scrollTop';


ReactDOM.render(
  <React.StrictMode>
        <BrowserRouter>
        <ScrollToTop/>
      <Routes>
          <Route index element={<App />} />
          <Route path="/cheery-chews" element={<CheeryChews />} />
          <Route path="/doner-gyros" element={<DonerGyros />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
