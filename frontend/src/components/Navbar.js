// import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";



export default function Navbar() {
 
  return (
    <div className="nav">
      <Link to="/">
        <img className="Logo" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.logologo.com%2Flogos%2Fabstract-mollusk-sea-shell-free-logo.jpg&tbnid=kVLmwWucYG59YM&vet=12ahUKEwiqgv64vv-BAxVp2zgGHdBOAZ8QMygRegUIARCJAQ..i&imgrefurl=https%3A%2F%2Fwww.logologo.com%2F&docid=0ggKiOhRDDk96M&w=600&h=400&q=free%20logo&safe=active&ved=2ahUKEwiqgv64vv-BAxVp2zgGHdBOAZ8QMygRegUIARCJAQ" alt=""></img>
        {/* <h1 className="Logo">Blog</h1> */}
      </Link>

              <div className='Sub-btn '>
              <div>
              <Link to="/" className="home">
                Home
              </Link>
              </div>
              <div>
              <Link  className="Create-btn">
                Create
              </Link>
              </div>
              <div>
              <Link className="About-btn">
                About 
              </Link>
              </div>
             
          <div className="nav-title" id="nav-check">
            <Link >
              Login
            </Link>
          </div>
          </div>
    </div>
  );
}