import React from 'react';
// to use navbar component
import Navbar from './components/Navbar';
// to use home component
import Home from './components/pages/Home';
// to use services component
import About from './components/pages/About';
// to use products component
import Gallary from './components/pages/Gallary';
// to use signup component
import Contact from './components/pages/Contact';
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
            <Route path='/about' component={About} />
            <Route path='/gallary' component={Gallary} />
            <Route path='/contact' component={Contact} />
          </Switch>
      </Router>
    
    </>
  );
}

export default App;
