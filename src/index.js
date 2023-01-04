import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import IndividualPost from './IndividualPost'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
  <Route path='/Blog-frontend' element = {<App/>} />
  <Route path='/Blog-frontend/posts/:id' element = {<IndividualPost/>} />
    </Routes>
  </BrowserRouter>
)
