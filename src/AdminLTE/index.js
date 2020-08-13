import React from "react";
import { BrowserRouter as Router} from 'react-router-dom'

import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ControlSidebar from "./components/ControlSidebar";


import $ from "jquery";

import "../custom.scss";



const AdminLTE = () => {
  return (
    <>
      <Router>
        <Header />
        <Menu />
        <Content />
        <ControlSidebar />
        <Footer />
      </Router>
    </>
  );
};

export default AdminLTE;
