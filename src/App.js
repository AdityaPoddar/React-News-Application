// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

// class based component 
// rcc used
// while creating varaibles u cannot use let
// this keyowrd will be heavily used
// creating or rahter ease of use is much easier

export default class App extends Component {
  country= "in";
  pageSize = 8;
  apiKey = process.env.REACT_API_KEY


  state = {
    progress : 0
  }

  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
   
  render() {
    return (
      <>

      {/* Router banaye */}
      {/* jo jo chaiye usko import kiye */}
      {/* routes ke andar exact path aur element pass kiye */}
      {/* key= categoryName pass kiye jaruri hai re render karne ke liye uss particular component ko  */}
      {/* isko re mounting bhi kehte hai */}
      {/* sab category mai unke hisab se value pass kiye */}
      <Router>
      
        <Navbar />
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
       height='3px'
        
      />
      <Routes>
      {/* <Route exact path="/about" element={<About />} /> */}
      <Route exact path ="/business"  element= {<News apiKey={this.apiKey} setProgress = {this.setProgress } key= "buisness" pageSize={this.pageSize}country ={this.country }category = "business"/>}></Route>
      <Route exact path ="/entertainment"  element= {<News apiKey={this.apiKey} setProgress = {this.setProgress } key= "entertainment" pageSize={this.pageSize}country ={this.country }category = "entertainment"/>}></Route>
      <Route exact path ="/"  element= {<News apiKey={this.apiKey} setProgress = {this.setProgress } key= "general" pageSize={this.pageSize}country ={this.country }category = "general"/>}></Route>
      <Route exact path ="/health" element= {<News apiKey={this.apiKey} setProgress = {this.setProgress }  key= "health" pageSize={this.pageSize}country ={this.country }category = "health"/>}></Route>
      <Route exact path ="/science"  element= {<News apiKey={this.apiKey} setProgress = {this.setProgress } key= "science" pageSize={this.pageSize}country ={this.country }category = "science"/>}></Route>
      <Route exact path ="/sports"  element= {<News apiKey={this.apiKey} setProgress = {this.setProgress } key= "sports" pageSize={this.pageSize}country ={this.country }category = "sports "/>}></Route>
      <Route exact path ="/technology"  element= {<News apiKey={this.apiKey} setProgress = {this.setProgress } key= "technology" pageSize={this.pageSize}country ={this.country }category = "technology"/>}></Route>

      {/* <News apiKey={this.apiKey} setProgress = {this.setProgress } pageSize = "5"  category = "health"/> */}
      </Routes>
      </Router>
      </>
    )
  }
}



