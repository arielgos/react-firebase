import './App.css';
import { analytics } from './Firebase';
import { logEvent } from 'firebase/analytics';
import { useEffect, useState } from 'react';


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
    <div
      onClick={() => {
        console.log('click');
      }}>
      <h1>Window Size</h1>
      <p>Width: {size.width}px</p>
      <p>Height: {size.height}px</p>
    </div>
  );
}

export default App;
