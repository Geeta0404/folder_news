import './App.css';
import React, { useState } from 'react';
import NavBar from './comp/NavBar';
import News from './comp/News';
// import React, { useState } from 'react';

import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


const App =()=> {
  const pageSize=6;

  // apiKey = process.env.REACT_APP_NEWS_API;
  const apiKey="273a4573a3834eb6a6c42f863ca01ace"

 const [progress, setProgress] = useState(0);
 
   
 
    return (
      <div>
        <Router>
        <NavBar />
        
        <LoadingBar height={3} color='#f11946' progress={progress}  />

        <Routes>
   
        <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business" />} />
        <Route exact path="/entertainment"   element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment"  pageSize={pageSize} country="us" category="entertainment" />} />
        <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general"  pageSize={pageSize} country="us" category="general" />} />
        <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science"  pageSize={pageSize} country="us" category="science" />} />
        <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports"  pageSize={pageSize} country="us" category="sports" />} />
        <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology"  pageSize={pageSize} country="us" category="technology"  />} />
        
        </Routes>
        
      </Router>
      </div>
    );
  
}


export default App;
