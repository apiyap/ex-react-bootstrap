import React , { useState } from "react";

import {  useSelector } from 'react-redux'
import {

  getParams,
} from '../features/admin-lte3/AdminLteSlide'


const SideMenuClassName = {
  COLLAPSED: "sidebar-collapse",
  OPEN: "sidebar-open",
  CLOSED: "sidebar-closed",
};

//const dispatch = useDispatch()

export default function Header(props){
   const handleClick = props.onMenuClick
  //const [windowWidth, setWindowWidth] = useState(992)
  const params = useSelector(getParams)
  //console.log(params)
  const size = params.window.size;

 

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a
            className="nav-link"
            data-widget="pushmenu"
            href="#"
            role="button"
            onClick={()=>handleClick('pushmenu')}
          >
            <i className="fas fa-bars" />
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="#" className="nav-link" onClick={()=>handleClick('home')}>
            Home
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="#" className="nav-link" onClick={()=>handleClick('win')}>
            {size.width},{size.height}
          </a>
        </li>
      </ul>
      {/* SEARCH FORM */}
      <form className="form-inline ml-3">
        <div className="input-group input-group-sm">
          <input
            className="form-control form-control-navbar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="input-group-append">
            <button className="btn btn-navbar" type="submit">
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
      </form>
      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        {/* Messages Dropdown Menu */}
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#" onClick={()=>handleClick('msg-dropdown')}>
            <i className="far fa-comments" />
            <span className="badge badge-danger navbar-badge">3</span>
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <a href="#" className="dropdown-item">
              {/* Message Start */}
              <div className="media">
                <img
                  src="../../dist/img/user1-128x128.jpg"
                  alt="User Avatar"
                  className="img-size-50 mr-3 img-circle"
                />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    Brad Diesel
                    <span className="float-right text-sm text-danger">
                      <i className="fas fa-star" />
                    </span>
                  </h3>
                  <p className="text-sm">Call me whenever you can...</p>
                  <p className="text-sm text-muted">
                    <i className="far fa-clock mr-1" /> 4 Hours Ago
                  </p>
                </div>
              </div>
              {/* Message End */}
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              {/* Message Start */}
              <div className="media">
                <img
                  src="../../dist/img/user8-128x128.jpg"
                  alt="User Avatar"
                  className="img-size-50 img-circle mr-3"
                />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    John Pierce
                    <span className="float-right text-sm text-muted">
                      <i className="fas fa-star" />
                    </span>
                  </h3>
                  <p className="text-sm">I got your message bro</p>
                  <p className="text-sm text-muted">
                    <i className="far fa-clock mr-1" /> 4 Hours Ago
                  </p>
                </div>
              </div>
              {/* Message End */}
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              {/* Message Start */}
              <div className="media">
                <img
                  src="../../dist/img/user3-128x128.jpg"
                  alt="User Avatar"
                  className="img-size-50 img-circle mr-3"
                />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    Nora Silvester
                    <span className="float-right text-sm text-warning">
                      <i className="fas fa-star" />
                    </span>
                  </h3>
                  <p className="text-sm">The subject goes here</p>
                  <p className="text-sm text-muted">
                    <i className="far fa-clock mr-1" /> 4 Hours Ago
                  </p>
                </div>
              </div>
              {/* Message End */}
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item dropdown-footer">
              See All Messages
            </a>
          </div>
        </li>
        {/* Notifications Dropdown Menu */}
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#" onClick={()=>handleClick('notify-dropdown')}>
            <i className="far fa-bell" />
            <span className="badge badge-warning navbar-badge">15</span>
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span className="dropdown-item dropdown-header">
              15 Notifications
            </span>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <i className="fas fa-envelope mr-2" /> 4 new messages
              <span className="float-right text-muted text-sm">3 mins</span>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <i className="fas fa-users mr-2" /> 8 friend requests
              <span className="float-right text-muted text-sm">12 hours</span>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <i className="fas fa-file mr-2" /> 3 new reports
              <span className="float-right text-muted text-sm">2 days</span>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item dropdown-footer">
              See All Notifications
            </a>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-widget="control-sidebar"
            data-slide="true"
            href="#"
            role="button"
            onClick={()=>handleClick('control-sidebar')}
          >
            <i className="fas fa-th-large" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

// export default class Header extends React.Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
//       showMenu: true,
//       autoCollapseSize: 992,
//       WindowSize: window.innerWidth,
//     };

//     this.handleSideMenuClick = this.handleSideMenuClick.bind(this);
//     this.handleResize = this.handleResize.bind(this);
//     this.handleOverlayClick = this.handleOverlayClick.bind(this);
//     this.SideMenuAutoCollapse = this.SideMenuAutoCollapse.bind(this);
//     this.handleControlSidebarClick = this.handleControlSidebarClick.bind(this);
//   }

//   componentDidMount() {
//     document.body.addEventListener("click", this.handleOverlayClick);
//     window.addEventListener("resize", this.handleResize);

//     //
//     document.body.classList.remove("hold-transition");
//     this.SideMenuAutoCollapse(true);
//   }
//   componentWillUnmount() {
//     document.body.removeEventListener("click", this.handleOverlayClick);
//     window.removeEventListener("resize", this.handleResize);
//   }

//   handleResize(WindowSize, event) {
//     this.setState({ WindowSize: window.innerWidth });
//     this.SideMenuAutoCollapse(true);
//     const dispatch = useDispatch()
//     dispatch( updateBodyWidth(this.state.WindowSize));

//   }

//   SideMenuExpand() {
//     if (this.state.autoCollapseSize) {
//       if (this.state.WindowSize <= this.state.autoCollapseSize) {
//         document.body.classList.add(SideMenuClassName.OPEN);
//       }
//     }
//     this.setState({ showMenu: true });

//     document.body.classList.remove(SideMenuClassName.COLLAPSED);
//     document.body.classList.remove(SideMenuClassName.CLOSED);
//   }

//   SideMenuCollapse() {
//     if (this.state.autoCollapseSize) {
//       if (this.state.WindowSize <= this.state.autoCollapseSize) {
//         document.body.classList.remove(SideMenuClassName.OPEN);
//         document.body.classList.remove(SideMenuClassName.CLOSED);
//       }
//     }
//     this.setState({ showMenu: false });

//     document.body.classList.add(SideMenuClassName.COLLAPSED);
//   }

//   SideMenuToggle() {
//     if (!document.body.classList.contains(SideMenuClassName.COLLAPSED)) {
//       this.SideMenuCollapse();
//     } else {
//       this.SideMenuExpand();
//     }
//   }

//   SideMenuAutoCollapse(resize = false) {
//     if (this.state.autoCollapseSize) {
//       if (this.state.WindowSize <= this.state.autoCollapseSize) {
//         if (!document.body.classList.contains(SideMenuClassName.OPEN)) {
//           this.SideMenuCollapse();
//         }
//       } else if (resize == true) {
//         if (document.body.classList.contains(SideMenuClassName.OPEN)) {
//           document.body.classList.remove(SideMenuClassName.OPEN);
//         } else if (document.body.classList.contains(SideMenuClassName.CLOSED)) {
//           this.SideMenuExpand();
//         }
//       }
//     }
//   }

//   handleSideMenuClick(e) {
//     this.SideMenuToggle();
//   }

//   handleOverlayClick() {
//     if (document.body.classList.contains(SideMenuClassName.OPEN)) {
//       this.SideMenuToggle();
//     }
//   }

//   handleControlSidebarClick(e) {
//     //console.log(e);
//   }


//   _fixHeight(){
    

//   }

//   render() {
//     return (
//       <nav className="main-header navbar navbar-expand navbar-white navbar-light">
//         {/* Left navbar links */}
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <a
//               className="nav-link"
//               data-widget="pushmenu"
//               href="#"
//               role="button"
//               onClick={this.handleSideMenuClick}
//             >
//               <i className="fas fa-bars" />
//             </a>
//           </li>
//           <li className="nav-item d-none d-sm-inline-block">
//             <a href="../../index3.html" className="nav-link">
//               Home
//             </a>
//           </li>
//           <li className="nav-item d-none d-sm-inline-block">
//             <a href="#" className="nav-link">
//               {this.state.WindowSize}
//             </a>
//           </li>
//         </ul>
//         {/* SEARCH FORM */}
//         <form className="form-inline ml-3">
//           <div className="input-group input-group-sm">
//             <input
//               className="form-control form-control-navbar"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <div className="input-group-append">
//               <button className="btn btn-navbar" type="submit">
//                 <i className="fas fa-search" />
//               </button>
//             </div>
//           </div>
//         </form>
//         {/* Right navbar links */}
//         <ul className="navbar-nav ml-auto">
//           {/* Messages Dropdown Menu */}
//           <li className="nav-item dropdown">
//             <a className="nav-link" data-toggle="dropdown" href="#">
//               <i className="far fa-comments" />
//               <span className="badge badge-danger navbar-badge">3</span>
//             </a>
//             <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
//               <a href="#" className="dropdown-item">
//                 {/* Message Start */}
//                 <div className="media">
//                   <img
//                     src="../../dist/img/user1-128x128.jpg"
//                     alt="User Avatar"
//                     className="img-size-50 mr-3 img-circle"
//                   />
//                   <div className="media-body">
//                     <h3 className="dropdown-item-title">
//                       Brad Diesel
//                       <span className="float-right text-sm text-danger">
//                         <i className="fas fa-star" />
//                       </span>
//                     </h3>
//                     <p className="text-sm">Call me whenever you can...</p>
//                     <p className="text-sm text-muted">
//                       <i className="far fa-clock mr-1" /> 4 Hours Ago
//                     </p>
//                   </div>
//                 </div>
//                 {/* Message End */}
//               </a>
//               <div className="dropdown-divider" />
//               <a href="#" className="dropdown-item">
//                 {/* Message Start */}
//                 <div className="media">
//                   <img
//                     src="../../dist/img/user8-128x128.jpg"
//                     alt="User Avatar"
//                     className="img-size-50 img-circle mr-3"
//                   />
//                   <div className="media-body">
//                     <h3 className="dropdown-item-title">
//                       John Pierce
//                       <span className="float-right text-sm text-muted">
//                         <i className="fas fa-star" />
//                       </span>
//                     </h3>
//                     <p className="text-sm">I got your message bro</p>
//                     <p className="text-sm text-muted">
//                       <i className="far fa-clock mr-1" /> 4 Hours Ago
//                     </p>
//                   </div>
//                 </div>
//                 {/* Message End */}
//               </a>
//               <div className="dropdown-divider" />
//               <a href="#" className="dropdown-item">
//                 {/* Message Start */}
//                 <div className="media">
//                   <img
//                     src="../../dist/img/user3-128x128.jpg"
//                     alt="User Avatar"
//                     className="img-size-50 img-circle mr-3"
//                   />
//                   <div className="media-body">
//                     <h3 className="dropdown-item-title">
//                       Nora Silvester
//                       <span className="float-right text-sm text-warning">
//                         <i className="fas fa-star" />
//                       </span>
//                     </h3>
//                     <p className="text-sm">The subject goes here</p>
//                     <p className="text-sm text-muted">
//                       <i className="far fa-clock mr-1" /> 4 Hours Ago
//                     </p>
//                   </div>
//                 </div>
//                 {/* Message End */}
//               </a>
//               <div className="dropdown-divider" />
//               <a href="#" className="dropdown-item dropdown-footer">
//                 See All Messages
//               </a>
//             </div>
//           </li>
//           {/* Notifications Dropdown Menu */}
//           <li className="nav-item dropdown">
//             <a className="nav-link" data-toggle="dropdown" href="#">
//               <i className="far fa-bell" />
//               <span className="badge badge-warning navbar-badge">15</span>
//             </a>
//             <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
//               <span className="dropdown-item dropdown-header">
//                 15 Notifications
//               </span>
//               <div className="dropdown-divider" />
//               <a href="#" className="dropdown-item">
//                 <i className="fas fa-envelope mr-2" /> 4 new messages
//                 <span className="float-right text-muted text-sm">3 mins</span>
//               </a>
//               <div className="dropdown-divider" />
//               <a href="#" className="dropdown-item">
//                 <i className="fas fa-users mr-2" /> 8 friend requests
//                 <span className="float-right text-muted text-sm">12 hours</span>
//               </a>
//               <div className="dropdown-divider" />
//               <a href="#" className="dropdown-item">
//                 <i className="fas fa-file mr-2" /> 3 new reports
//                 <span className="float-right text-muted text-sm">2 days</span>
//               </a>
//               <div className="dropdown-divider" />
//               <a href="#" className="dropdown-item dropdown-footer">
//                 See All Notifications
//               </a>
//             </div>
//           </li>
//           <li className="nav-item">
//             <a
//               className="nav-link"
//               data-widget="control-sidebar"
//               data-slide="true"
//               href="#"
//               role="button"
//               onClick={this.handleControlSidebarClick}
//             >
//               <i className="fas fa-th-large" />
//             </a>
//           </li>
//         </ul>
//       </nav>
//     );
//   }
// }
