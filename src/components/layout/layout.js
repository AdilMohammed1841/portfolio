import React from "react";
import './layout.css';
import NavBar from "../navbar/navBar";

const Layout = (props) => {
  return (
    <div>
      <div className="App-NavBar glass">
        <NavBar scrollHandler={props.scrollHandler} />
      </div>
      <div className='main-content' >
            { props.children || ""    }
      </div>
    </div>
  );
};

export default Layout;
