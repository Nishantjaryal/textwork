import React from "react";
import "./App.css"

export default class Footer extends React.Component {
    
    render(){
        const styles = {
            footer : {
               "display": "flex",
               "alignItems": "center",
               "justifyContent": "center",
               "width": "100%",
               "boxSizing": "border-box",
               "padding": "20px",
               "background":"transparent",
               "flexDirection": "row",
               marginTop:'20px',
            }
        }
        return(
            <>
             <footer style={styles.footer}>
                <p>Copyright © All rights reserved</p>
             </footer>
            </>
        )
    }
}