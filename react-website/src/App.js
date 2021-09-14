import React from 'react';
// to use navbar component
import Navbar from './components/Navbar';
// to use home component
import Home from './components/pages/Home';
// to use app css
import './App.css';
// to use react router
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';



//this is where all website are gathered.
function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
      </Router>
    
    </>
      
  );
}

export default App;
