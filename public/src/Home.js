import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      setUser(null);
      console.log("Signed out successfully");
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user", user)
        setUser(user);
      } else {
        console.log("user is logged out");
        navigate("/");
      }
    });
  }, []);

  return (
    <>
      {
        user == null ? navigate("/login") :
          <nav>
            <p>
              Welcome Home
            </p>

            <div>
              <button onClick={handleLogout}>
                Logout
              </button>
            </div>
          </nav>

      }
    </>
  )
}

export default Home
