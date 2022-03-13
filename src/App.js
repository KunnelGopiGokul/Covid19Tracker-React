import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Components/Header';
import India from './Components/India';
import World from './Components/World';
import Footer from './Components/Footer';
import Home from './Components/Home';


export default class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <Header />
        <Routes>
             <Route exact path="/" element={<Home/>}/>
             <Route exact path="/India" element={<India/>}/>
              <Route exact path="/World" element={<World/>}/>
        </Routes>
        <Footer/>
       
   </BrowserRouter>
    )
  }
}



