

import React from "react"
import { useFirebase } from "gatsby-plugin-firebase"

import { useState, useEffect} from "react"
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import {  isLoggedIn, getUser, logout } from "./auth"

import styled from "styled-components"
import { AnimatePresence } from "framer-motion";
import "./firebaseui-styling.global.css"
import {Modal} from "./../Modal"


const IdentityText = styled.small`
  align-self: center;

  span {
    font-weight:bold;
  }

`;


const InputCredential = styled.input`

height: 40px;
    padding: 0.5em;
    border-radius: 4px;
    font-size: 1em;
    font-weight: lighter;
    margin-bottom: 1em;
    background: white;
    margin-left: 1em;
    margin-right: 1em;
`;



const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
 

  hr{
    width: 100%;
    border: solid 1px #eeeeee;
  }

`;





function NavIdentity() {


  const [isOpen, setIsOpen] = useState(false);  //MODAL



    const [firebase, setFirebase] = useState();
    
    useFirebase(firebase => {
      setFirebase(firebase);
    }, [])

    const [user, setCurrentUser] = useState(getUser());

    function getUiConfig(auth) {
      return {
        signInFlow: 'popup',
        signInOptions: [
          {
            provider:   auth.GoogleAuthProvider.PROVIDER_ID,
            customParameters: {
              // Forces account selection even when one account
              // is available.
              prompt: 'select_account'
            }
          },
         
          auth.EmailAuthProvider.PROVIDER_ID,
          
        ],
        signInSuccessUrl: '/',
        callbacks: {
          signInSuccessWithAuthResult: (result) => {
           // setUser(result.user);
            setCurrentUser(result.user);
            // navigate('/app/profile');
          }
        },
        credentialHelper: 'none'
      };
    }

    if (isLoggedIn()) {
     //const { displayName, email } = getUser();
      return (
        <>
          <IdentityText>
            Logged in as  <span>{user.displayName}</span> 
            <br/>

            ( {user.email} )
          
          </IdentityText>
          {<a className="navbar-item" href="/" onClick={event => { event.preventDefault(); logout(firebase).then(() => setCurrentUser(null)) }}>
          Logout
          </a>}
        </>
      )


    } else {


      return (
        <>
          <a style={{ color: 'inherit',
    lineHeight: 1.5,
    padding: '0.5rem 0.75rem',
    /* position: relative; */
    alignSelf: 'center'}} onClick={() => setIsOpen(true)}>Login / Sign Up</a>
          <AnimatePresence>
    
          
            {isOpen && firebase && <Modal close={() => setIsOpen(false)} children={
              
              <Wrapper>
              
              <h3>Naaz Store</h3>
              {/* <h4>Login</h4>

              <InputCredential type="text" name="email" placeholder="Email Address"/>
              <InputCredential type="password" name="password" placeholder="Password"/>
               */}
              <hr/>
              
              <StyledFirebaseAuth uiConfig={getUiConfig(firebase.auth)} firebaseAuth={firebase.auth()}/>
              
              </Wrapper>
            
            
            } />}



          </AnimatePresence>
        </>
      );

    }


  
}
 
export default NavIdentity