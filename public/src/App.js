import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { analytics } from './Firebase';
import { logEvent } from 'firebase/analytics';
import { useEffect, useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';


function App() {

  logEvent(analytics, 'Application Start');

  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <div>
        <section>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
