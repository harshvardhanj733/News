// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router
} from "react-router-dom";
import {Routes, Route} from "react-router-dom"
// import Spinner from './components/Spinner';

export class App extends Component {
  constructor(){
    super();
    this.state = {
      category: "canada"
    }
  }

  newsSearch = ()=>{
    let inp = document.getElementById("inp");
    // e.preventDefault();
    this.setState = {category: inp.value};
  }

  render() {
    // let search = ()=>{
    //   let inp = document.getElementById("inp");
    //   return inp.value;
    // }
    // let query = search();
    // let category = "canada";
    
    return (
      <>
        {/* <Router> */}
        {/* <Navbar/> */}
        {/* <Routes> */}
        {/* <Spinner/> */}
        {/* <News pageSize={9} q="news"/> */}
          {/* <Route path="/" element={<News pageSize={9} q="news"/>}/>
          <Route path="/sports" element={<News pageSize={9} q="sports"/>}/>
          <Route path="/business" element={<News pageSize={9} q="business"/>}/> */}
          {/* <Route exact path='/'><News pageSize={9} q="news"/></Route>
          <Route exact path='/sports'><News pageSize={9} q="sports"/></Route> */}
        {/* </Routes> */}
        {/* </Router> */}


          <Router>
                <Navbar newsSearch = {this.newsSearch} id = "inp"/>
            <Routes>
                <Route exact  path='/sports' element={<News key='sports' pageSize={5} q="sports"/>}></Route>
                <Route exact  path='/' element={<News key='news' pageSize={9} q={this.state.category}/>}></Route>
            </Routes>
          </Router>

      </>
    )
  }
}

export default App;
