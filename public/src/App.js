import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { analytics } from './Firebase';
import { logEvent } from 'firebase/analytics';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';


function App() {

  logEvent(analytics, 'Application Start');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
