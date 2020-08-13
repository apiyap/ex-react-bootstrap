import React, { useLayoutEffect, useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ControlSidebar from "./components/ControlSidebar";

import { useSelector, useDispatch } from "react-redux";
import {
  updateleftMenuCollapsed,
  updateleftMenuOpen,
  updateWindowSize,
  getParams,
} from './features/admin-lte3/AdminLteSlide'


import "./custom.scss";

const SideMenuClassName = {
  COLLAPSED: "sidebar-collapse",
  OPEN: "sidebar-open",
  CLOSED: "sidebar-closed",
};


export default function AdminLte() {

  // useWindowSize()
  const dispatch = useDispatch();
  const params = useSelector(getParams)

  function updateSize() {
    const wSize = { width: window.innerWidth, height: window.innerHeight };
    dispatch(updateWindowSize(wSize));
    SideMenuAutoCollapse(true)
  }

  function SideMenuExpand() {
    if (params.window.autoCollapseSize) {
      if (params.window.size.width <= params.window.autoCollapseSize) {
        document.body.classList.add(SideMenuClassName.OPEN);
        dispatch(updateleftMenuOpen(true));
      }
    }

    dispatch(updateleftMenuCollapsed(false));
    document.body.classList.remove(SideMenuClassName.COLLAPSED);
    document.body.classList.remove(SideMenuClassName.CLOSED);
  }

  function SideMenuCollapse() {
    if (params.window.autoCollapseSize) {
      if (params.window.WindowSize <= params.window.autoCollapseSize) {
        document.body.classList.remove(SideMenuClassName.OPEN);
        document.body.classList.remove(SideMenuClassName.CLOSED);
        dispatch(updateleftMenuOpen(false));
      }
    }

    dispatch(updateleftMenuCollapsed(true));
    document.body.classList.add(SideMenuClassName.COLLAPSED);
  }

  function SideMenuToggle() {
    if (!document.body.classList.contains(SideMenuClassName.COLLAPSED)) {
      SideMenuCollapse();
    } else {
      SideMenuExpand();
    }
  }

  function SideMenuAutoCollapse(resize = false) {
    if (params.window.autoCollapseSize) {

      if (params.window.size.width <= params.window.autoCollapseSize) {
        if (!document.body.classList.contains(SideMenuClassName.OPEN)) {
          document.body.classList.add(SideMenuClassName.OPEN);
          
        }
      } else if (resize == true) {
        if (document.body.classList.contains(SideMenuClassName.OPEN)) {
          document.body.classList.remove(SideMenuClassName.OPEN);
        } else if (document.body.classList.contains(SideMenuClassName.CLOSED)) {
          SideMenuExpand();
        }
      }
    }
  }


  function headerMenuClick(e){
    console.log(e)
    switch(e)
    {
      case 'pushmenu':
        SideMenuToggle()
        break;
      default:
        break;
    }
  }

  function  handleOverlayClick() {
    console.log(params.window)
    if (document.body.classList.contains(SideMenuClassName.OPEN)) {
      
      SideMenuToggle();
      document.body.classList.remove(SideMenuClassName.OPEN);
    }
  }

  useLayoutEffect(() => {
    window.addEventListener("resize", updateSize);
    //document.body.addEventListener("click", handleOverlayClick);
    document.body.classList.remove("hold-transition");
    SideMenuAutoCollapse(false)
    console.log("here")
    updateSize();
    return () => {
      window.removeEventListener("resize", updateSize);
      //document.body.removeEventListener("click", handleOverlayClick);
    } 
  }, []);


  return (
    <>
      <div onClickCapture={handleOverlayClick}>
      <Header onMenuClick={headerMenuClick} />
      <Menu />
      <Content />
      <ControlSidebar />
      <Footer />
      </div>
    </>
  );
}








// function useWindowSize() {

//   const dispatch = useDispatch();
//   const params = useSelector(getParams)

//   function updateSize() {
//     const wSize = { width: window.innerWidth, height: window.innerHeight };
//     dispatch(updateWindow(wSize));

//   }

//   function SideMenuExpand() {
//     if (params.window.autoCollapseSize) {
//       if (params.window.size.width <= params.window.autoCollapseSize) {
//         document.body.classList.add(SideMenuClassName.OPEN);
//       }
//     }
//     //this.setState({ showMenu: true });
//     document.body.classList.remove(SideMenuClassName.COLLAPSED);
//     document.body.classList.remove(SideMenuClassName.CLOSED);
//   }

//   function SideMenuCollapse() {
//     if (params.window.autoCollapseSize) {
//       if (params.window.WindowSize <= params.window.autoCollapseSize) {
//         document.body.classList.remove(SideMenuClassName.OPEN);
//         document.body.classList.remove(SideMenuClassName.CLOSED);
//       }
//     }
//     //this.setState({ showMenu: false });
//     document.body.classList.add(SideMenuClassName.COLLAPSED);
//   }

//   function SideMenuToggle() {
//     if (!document.body.classList.contains(SideMenuClassName.COLLAPSED)) {
//       SideMenuCollapse();
//     } else {
//       SideMenuExpand();
//     }
//   }

//   function SideMenuAutoCollapse(resize = false) {
//     if (params.window.autoCollapseSize) {
//       if (params.window.size.width <= params.window.autoCollapseSize) {
//         if (!document.body.classList.contains(SideMenuClassName.OPEN)) {
//           SideMenuCollapse();
//         }
//       } else if (resize == true) {
//         if (document.body.classList.contains(SideMenuClassName.OPEN)) {
//           document.body.classList.remove(SideMenuClassName.OPEN);
//         } else if (document.body.classList.contains(SideMenuClassName.CLOSED)) {
//           SideMenuExpand();
//         }
//       }
//     }
//   }


//   useLayoutEffect(() => {
//     window.addEventListener("resize", updateSize);
//     SideMenuAutoCollapse(true)
//     updateSize();
//     return () => window.removeEventListener("resize", updateSize);
//   }, []);
//   //return size;
// }


