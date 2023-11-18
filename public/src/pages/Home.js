import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import * as constants from '../Common'

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    signOut(auth).then(() => {
      console.log("Signed out successfully");
      sessionStorage.removeItem(constants.USER);
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
        console.log("user", user);
        setUser(user);
      } else {
        console.log("user is logged out");
        navigate("/");
      }
    });
  }, [navigate]);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React + Firebase</Navbar.Brand>
        </Container>
      </Navbar>
      {
        user == null ? navigate("/login") : <></>
      }
    </>
  )
}

export default Home
