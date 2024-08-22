import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles.scss'
import DisplayPage from './pages/DisplayPage';
import Show from './pages/Show';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
   <Routes>
      <Route index element = {<DisplayPage/>}/>
      <Route path= "/:id" element= {<Show/>}/>
   </Routes>
   </BrowserRouter>
  
);


