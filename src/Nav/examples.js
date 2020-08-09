import React from 'react';
import {Nav,
    Alert,
    Dropdown,
    NavLink,
    NavItem,
    NavDropdown,
} from 'react-bootstrap';


function BaseNav (){
    return(
        <>
        <h3>Base Nav</h3>
        <Alert key="" variant="primary">
        Navigation bits in Bootstrap all share a general Nav component and styles. Swap variants to switch between each style. The base Nav component is built with flexbox and provide a strong foundation for building all types of navigation components.
        </Alert>
        <Nav
        activeKey="#home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
        <Nav.Item>
            <Nav.Link href="#home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
            Disabled
            </Nav.Link>
        </Nav.Item>
        </Nav>
        <br/>
        </>
    );
}


function UlNav(){
    return (
        <>
        <p className="text-center mt-4 mb-4">When a {"<ul>"} is appropriate you can render one via the as prop; be sure to also set your items to {"<li>"} as well!</p>
        <Nav defaultActiveKey="#home" as="ul">
        <Nav.Item as="li">
            <Nav.Link href="#home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        </Nav>
        <br/>
        </>
    );
}

//Alignment
// You can control the the direction and orientation of the Nav by making use of the flexbox layout utility classes. 
// By default, navs are left-aligned, but that is easily changed to center or right-aligned.
function AlNav(){
    return (
        <>
        <h3>Alignment and orientation</h3>
        <Alert key="" variant="primary">
        You can control the the direction and orientation of the Nav by making use of the flexbox layout utility classes. By default, navs are left-aligned, but that is easily changed to center or right-aligned.
        </Alert>
        <Nav className="justify-content-center" activeKey="#home">
            <Nav.Item>
            <Nav.Link href="#home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
                Disabled
            </Nav.Link>
            </Nav.Item>
        </Nav>
        <p className="text-center mt-4 mb-4">Or right-aligned</p>
        <Nav className="justify-content-end" activeKey="#home">
            <Nav.Item>
            <Nav.Link href="#home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
                Disabled
            </Nav.Link>
            </Nav.Item>
        </Nav>
        <br/>
      </>
    );
}

function VlNav(){
    return (
        <>
        <h3>Vertical</h3>
        <Alert key="" variant="primary">
        Create stacked navs by changing the flex item direction with the .flex-column class, or your own css. You can even use the responsive versions to stack in some viewports but not others (e.g. .flex-sm-column).
        </Alert>
        <Nav defaultActiveKey="#home" className="flex-column">
            <Nav.Link href="#home">Active</Nav.Link>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
            <Nav.Link eventKey="disabled" disabled>
                Disabled
            </Nav.Link>
        </Nav>
        <br/>
        </>
    );
}

function TabNav(){
    return (
        <>
        <h3>Tab</h3>
        <Alert key="" variant="primary">
        Visually represent nav items as "tabs". This style pairs nicely with tabbable regions created by our Tab components.
Note: creating a vertical nav (.flex-column) with tabs styling is unsupported by Bootstrap's default stylesheet.
        </Alert>
        <Nav variant="tabs" defaultActiveKey="#home">
            <Nav.Item>
                <Nav.Link href="#home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Option 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
        <br/>
        </>
    );
}

function PillNav(){
    return(
        <>
        <h3>Pills</h3>
        <Alert key="" variant="primary">
        An alternative visual variant.
        </Alert>
        <Nav variant="pills" defaultActiveKey="#home">
            <Nav.Item>
                <Nav.Link href="#home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Option 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
        <br/>
        </>
    );
}

function FillNav(){
    return(
        <>
        <h3>Fill</h3>
        <Alert key="" variant="primary">
        Force the contents of your nav to extend the full available width. To proportionately fill the space use fill. Notice that the nav is the entire width but each nav item is a different size.
        </Alert>
        <Nav fill variant="tabs" defaultActiveKey="#home">
            <Nav.Item>
                <Nav.Link href="#home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
        <br/>
        </>
    );
}
function FillJust(){
    return(
        <>
        <h3>Fill and justify</h3>
        <Alert key="" variant="primary">
        Force the contents of your nav to extend the full available width. To proportionately fill the space use fill. Notice that the nav is the entire width but each nav item is a different size.
        </Alert>
        <Nav fill variant="tabs" defaultActiveKey="#home">
            <Nav.Item>
                <Nav.Link href="#home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
        <p className="text-center mt-4 mb-4">If you want each NavItem to be the same size use justify.</p>
        <Nav justify variant="tabs" defaultActiveKey="#home">
            <Nav.Item>
                <Nav.Link href="#home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
        <br/>
        </>
    );
}

function DropdownNav(){
    return(
        <>
        <h3>Using dropdowns</h3>
        <Alert key="" variant="primary">
        You can mix and match the Dropdown components with the NavLink and NavItem components to create a Dropdown that plays well in a Nav component
        </Alert>
        <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink}>Click to see more…</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>Hello there!</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <br/>
        </>
    );
}

function NavDropdownExample() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  
    return (
        <>
        <Alert key="" variant="primary">
            The above demonstrates how flexible the component model can be. But if you didn't want to roll your own versions we've included a straight-forward {"<NavDropdown>"} that works for most cases.
        </Alert>
      <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
        <Nav.Item>
          <Nav.Link eventKey="1" href="#/home">
            NavLink 1 content
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" title="Item">
            NavLink 2 content
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3" disabled>
            NavLink 3 content
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Dropdown" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <br/>
      </>
    );
  }

  

 const Ex ={
    BaseNav : BaseNav,
    UlNav : UlNav,
    AlNav : AlNav,
    VlNav : VlNav,
    TabNav : TabNav,
    PillNav : PillNav,
    FillNav : FillNav,
    FillJust : FillJust,
    Dropdown : DropdownNav,
    NavDropdown : NavDropdownExample,
}

export default Ex;