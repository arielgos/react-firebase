import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    signOut(auth).then(() => {
      console.log("Signed out successfully");
      setUser(null);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage, error)
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
  }, [user]);

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
