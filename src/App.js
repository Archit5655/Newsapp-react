import "./App.css";

import React, { Component } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})


  }
  render() {
    return (
      
      
      <div>
      
        <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
       
      />
          <Navbar/>

          
          <Routes>
            <Route
              exact path="/general"
              element={
                <News setProgress={this.setProgress}
                  key="general"
                  pageSize={5}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact path="/business"
              element={
                <News setProgress={this.setProgress}
                  key="business"
                  pageSize={5}
                  country="in"
                  category="Business"
                />
              }
            ></Route>
            <Route
              exact path="/entertainment"
              element={
                <News setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={5}
                  country="in"
                  category="Entertainment"
                />
              }
            ></Route>
            <Route
              exact path="/health"
              element={
                <News setProgress={this.setProgress}
                  key="health"
                  pageSize={5}
                  country="in"
                  category="Health"
                />
              }
            ></Route>
            <Route
              exact path="/science"
              element={
                <News setProgress={this.setProgress}
                  key="science"
                  pageSize={5}
                  country="in"
                  category="Science"
                />
              }
            ></Route>
            <Route
              exact path="/sports"
              element={
                <News setProgress={this.setProgress}
                  key="sports"
                  pageSize={5}
                  country="in"
                  category="Sports"
                />
              }
            ></Route>
            <Route
              exact path="/technology"
              element={
                <News setProgress={this.setProgress}
                  key="technology"
                  pageSize={5}
                  country="in"
                  category="Technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
