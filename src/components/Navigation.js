import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Navbar,NavItem,Icon} from 'react-materialize';
import GoogleButton from "react-google-button";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from '../configs/firebase.configs';
function Navigation({ loading, setLoading }) {
  const [user, setUser] = useState(null);
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  const handleSignOut = () => {
    signOut(auth);
    setUser(null);
    localStorage.removeItem("userLogin");
    setLoading(!loading);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser.providerData[0]);
        localStorage.setItem(
          "userLogin",
          JSON.stringify(currentUser.providerData[0])
        );
        setLoading(!loading);
      }
    });
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line
  }, []);
  return (
    <Navbar style={{ backgroundColor: "black" }}
      className="menu"
      alignLinks="right"
      brand={<span className="brand-logo">FPT UNIVERSITY </span>}
      id="mobile-nav"
      menuIcon={<Icon>Menu</Icon>}
    >
      <ul>
        <li>
          <Link to="/">
            <Icon left>home</Icon>HOME
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <Icon left>contacts</Icon>CONTACT
          </Link>
        </li>
        <li>
          <Link to="/about">
            <Icon left>info</Icon>ABOUT
          </Link>
        </li>
        
        
        {user && (
          <li>
            <Link to="/addFilm">
              <Icon left>add</Icon>ADD NEW FILM
            </Link>
          </li>
          
        )}
        {user ? (
          <>
            <li>
              <Link to="/">{user.displayName}</Link>
            </li>
            <li>
              <button
                className="btn btn-outline-dark w-100"
                onClick={() => handleSignOut()}
                style={{ width: "10%", background: "#333" }}
              >
                logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <GoogleButton onClick={() => googleSignIn()} />
          </li>
        )}
      </ul>
      {/* <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/features">Features</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pricing">Pricing</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/news">News</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div> */}
    </Navbar>
  );
}

export default Navigation;
