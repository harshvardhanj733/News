import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router
} from "react-router-dom";
import {Routes, Route} from "react-router-dom"

export class App extends Component {
  constructor(){
    super();
    this.state = {
      category: "news"
    }
  }

  newsSearch = (e)=>{
    let inp = document.getElementById("inp");
    e.preventDefault();
    this.setState({category: inp.value});
  }

  render() {
    return (
      <>
          <Router>
                <Navbar newsSearch = {this.newsSearch}/>
            <Routes>
                <Route exact  path='/sports' element={<News key='sports' pageSize={5} q="sports" headline="Sport"/>}></Route>
                <Route exact  path='/health' element={<News key='health' pageSize={5} q="health" headline="Health"/>}></Route>
                <Route exact  path='/technology' element={<News key='technology' pageSize={5} q="technology" headline="Technology"/>}></Route>
                <Route exact  path='/business' element={<News key='business' pageSize={5} q="business" headline="Business"/>}></Route>
                <Route exact  path='/entertainment' element={<News key='entertainment' pageSize={5} q="entertainment" headline="Entertainment"/>}></Route>
                <Route exact  path="/" element={<News key={this.state.category} pageSize={9} q={this.state.category}/>}></Route>
            </Routes>
          </Router>
      </>
    )
  }
}

export default App;
