import React from "react";
import "./App.css";
import logo from './logo.png'
 let styles ={
  h1 :{"marginRight": "auto",
       "alignself": "center"}
    }
  
function Intro() {
 
  return (
    <>
      <nav>
      
          <h1 style={styles.h1} className="bigHeading">
          MonoCode
          </h1>

        
         <span>
          <a>Home</a>
          <a>Code</a>
          <a>Docs</a>
          <a>Blog</a>
        </span>
      </nav>
      
    </>
  );
}

export default Intro;
