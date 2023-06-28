import "./App.css";

import React, { useState } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App=()=> {
 const apikey=process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)


    return (
      
      
      <div>
      
        <Router>
        <LoadingBar
        color='#f11946'
        progress={progress}
       
      />
          <Navbar/>

          
          <Routes>
            <Route
              exact path="/"
              element={
                <News  setProgress={setProgress} apikey={apikey}
                  key="general"
                  pageSize={5}
                  country="in"
                  category="general"
                />
              }
            ></Route>     <Route
              exact path="/general"
              element={
                <News  setProgress={setProgress} apikey={apikey}
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
                <News  setProgress={setProgress} apikey={apikey}
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
                <News  setProgress={setProgress} apikey={apikey}
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
                <News  setProgress={setProgress} apikey={apikey}
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
                <News  setProgress={setProgress} apikey={apikey}
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
                <News  setProgress={setProgress} apikey={apikey}
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
                <News  setProgress={setProgress} apikey={apikey}
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
  export default App;

