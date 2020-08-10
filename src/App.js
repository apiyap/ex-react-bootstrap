import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './custom.scss';

import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import Sidebar from "./sidebar.js";
import './sidebar.css'


import TopNav from './topnav';
import Home from './home';
import About from './about';
import NoMatch from './nomatch';


import ExAleart from './Alerts';
import ExAccordion from './Accordion';
import ExBadges from './Badges';
import ExBreadcrumbs from './Breadcrumbs';
import ExButtons from './Buttons';
import ExButtonGroups from './ButtonGroups';
import ExCards from './Cards';
import ExCarousels from './Carousels';
import ExDropdowns from './Dropdowns';
import ExForms from './Forms';
import ExInputGroup from './InputGroup';
import ExImages from './Images';
import ExFiguress from './Figures';
import ExJumbotrons from './Jumbotron';
import ExListgroups from './Listgroups';
import ExModals from './Modals';
import ExNav from './Nav';
import ExNavbar from './Navbar';
import ExOverlays from './Overlays';
import ExPaginations from './Pagination';
import ExPopovers from './Popovers';
import ExProgress from './Progress';
import ExSpinners from './Spinners';
import ExTables from './Tables';
import ExTabs from './Tabs';
import ExTooltips from './Tooltips';
import ExToasts from './Toasts';
import ExTransitions from './Transitions';
import ExResponsiveEmbed from './UtilsResponsiveEmbed';
import ExReactOverlays from './ReactOverlays';





function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Router>
          <TopNav/>
          
          <Container fluid >
              <Row >
                  <Col xs={2} id="sidebar-wrapper">      
                    <Sidebar />
                  </Col>
                  <Col  xs={10} id="page-content-wrapper">
                  <Switch>
                    <Route exact path="/" component={Home} />

                    <Route path="/aleart" component={ExAleart} />
                    <Route path="/accordion" component={ExAccordion} />
                    <Route path="/badges" component={ExBadges} />
                    <Route path="/breadcrumbs" component={ExBreadcrumbs} /> 
                    <Route path="/buttons" component={ExButtons} />
                    <Route path="/buttonGroups" component={ExButtonGroups} />
                    <Route path="/cards" component={ExCards} />
                    <Route path="/carousels" component={ExCarousels} />
                    <Route path="/dropdowns" component={ExDropdowns} />
                    <Route path="/forms" component={ExForms} />
                    <Route path="/inputgroup" component={ExInputGroup} />
                    <Route path="/images" component={ExImages} />
                    <Route path="/figures" component={ExFiguress} />
                    <Route path="/jumbotrons" component={ExJumbotrons} />
                    <Route path="/listgroups" component={ExListgroups} />
                    <Route path="/modals" component={ExModals} />
                    <Route path="/nav" component={ExNav} />
                    <Route path="/navbar" component={ExNavbar} />
                    <Route path="/overlays" component={ExOverlays} />
                    <Route path="/paginations" component={ExPaginations} />
                    <Route path="/popovers" component={ExPopovers} />
                    <Route path="/progress" component={ExProgress} />
                    <Route path="/spinners" component={ExSpinners} />
                    <Route path="/tables" component={ExTables} />
                    <Route path="/tabs" component={ExTabs} />
                    <Route path="/tooltips" component={ExTooltips} />
                    <Route path="/toasts" component={ExToasts} />
                    <Route path="/transitions" component={ExTransitions} />
                    <Route path="/responsiveembed" component={ExResponsiveEmbed} />
                    <Route path="/reactoverlays" component={ExReactOverlays} />
                    
                    <Route path="/about" component={About} />
                    <Route component={NoMatch} />
                  </Switch>
                  </Col> 
              </Row>

          </Container>
        </Router>
      </React.Fragment>
      
    </div>
  );
}

export default App;
