import React from 'react';
import './App.css';
import Header from './components/Header';
import MemeCollection from './components/MemeCollection';
import Footer from './components/Footer';
import MemeCreator from './components/MemeCreator';
import {BrowserRouter,Route} from 'react-router-dom';


export default function App(){
  return (
    <BrowserRouter>
      <div>
        <center>
        <Header/>
        <br/>
        <Route exact path='/'>
          <div class='container'>
            <MemeCollection/>
          </div>
        </Route>
        <Route exact path='/:id/:box'> <MemeCreator /> </Route>
        <br/>
        <Footer/>
        </center>
      </div>
    </BrowserRouter>
  )
}
