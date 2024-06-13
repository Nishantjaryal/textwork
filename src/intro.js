import React from "react";
import "./App.css";
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
          {/* <a>Home</a> */}
          <a href="https://github.com/Nishantjaryal/textwork">Repo</a>
          {/* <a>Docs</a> */}
          {/* <a>Blog</a> */}
        </span>
      </nav>
      
    </>
  );
}

export default Intro;
