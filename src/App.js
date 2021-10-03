import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navigationbar';
import AboutUs from './components/pages/AboutUs';
function App() {
  return (
    <>
  <Router>
       <Navbar />
        <Switch>
          <Route path='/' exact component={AboutUs}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
