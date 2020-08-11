import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ControlSidebar from "./components/ControlSidebar";


import './custom.scss';

export default class AdminLte extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <Menu />
        <Content />
        <ControlSidebar />
        <Footer />
      </>
    );
  }
}
