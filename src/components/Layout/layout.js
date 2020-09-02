import React from "react";
import "./layout.css";
import Sidebar from "../Sidebar/sidebar";

const Layout = (props) => {
  return (
    <div>
      <div className="container">
        {props.children}
        <Sidebar />
      </div>
      <div>
        <h1>Footer</h1>
      </div>
    </div>
  );
};
export default Layout;
