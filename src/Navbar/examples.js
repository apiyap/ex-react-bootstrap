import React from 'react';
import {
    Nav,
    Navbar,
    Alert,
    Form,
    FormControl,
    InputGroup,
    Button,
    NavDropdown,
    Container,

} from 'react-bootstrap';

import logo from '../logo.svg';

function NavbarOv(){
    return(
        <>
        <h3>Navbars</h3>
        <Alert key="" variant="primary">
        Here’s what you need to know before getting started with the Navbar:<br/>
        Use the expand prop to allow for collapsing the Navbar at lower breakpoints.
        Navbars and their contents are fluid by default. Use optional containers to limit their horizontal width.
        Use spacing and flex utilities to size and position content
        </Alert>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        <br />
        </>
    );
}

function NavBrand(){
    return(
        <>
        <h3>Brand</h3>
        <Alert key="" variant="primary">
        A simple flexible branding component. Images are supported but will likely require custom styling to work well.
        </Alert>
          <Navbar bg="light">
                <Navbar.Brand href="#home">Brand link</Navbar.Brand>
            </Navbar>
            <br />
            <Navbar bg="light">
                <Navbar.Brand>Brand text</Navbar.Brand>
            </Navbar>
            <br />
            <Navbar bg="dark">
                <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                </Navbar.Brand>
            </Navbar>
            <br />
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                React Bootstrap
                </Navbar.Brand>
            </Navbar>
            <br />
        </>
    );
}


function NavForm(){
    return(
        <>
        <h3>Form</h3>
        <Alert key="" variant="primary">
        Use {"<Form inline>"} and your various form controls within the Navbar. Align the contents as needed with utility classes.
        </Alert>
        <Navbar className="bg-light justify-content-between">
            <Form inline>
                <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
                </InputGroup>
            </Form>
            <Form inline>
                <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                <Button type="submit">Submit</Button>
            </Form>
        </Navbar>
        <br />
        </>
    );
}

function NavText(){
    return(
        <>
        <h3> Text and Non-nav links</h3>
        <Alert key="" variant="primary"> 
        Loose text and links can be wrapped Navbar.Text in order to correctly align it vertically.
        </Alert>
        <Navbar>
            <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
        <br />
        </>
    )
}

function NavColor(){

    return(
        <>
        <h3>Color schemes</h3>
        <Alert key="" variant="primary">
        Theming the navbar has never been easier thanks to the combination of theming classes and background-color utilities. Choose from variant="light" for use with light background colors, or variant="dark" for dark background colors. Then, customize with the bg prop or any custom css!
        </Alert>

        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
        <br />
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>

        <br />
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
            </Form>
        </Navbar>
        <br />
        </>
    )
}

function NavContainer(){
    return (
        <>
        <h3>Containers</h3>
        <Alert  variant="primary">
        While not required, you can wrap the Navbar in a {"<Container>"} component to center it on a page, or add one within to only center the contents of a fixed or static top navbar.
        </Alert>
        <Container>
            <Navbar expand="lg" variant="light" bg="light">
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
            </Navbar>
        </Container>
        <br />
        <Alert   variant="primary">
        When the container is within your navbar, its horizontal padding is removed at breakpoints lower than your specified expand={"{'sm' | 'md' | 'lg' | 'xl'}"} prop. This ensures we’re not doubling up on padding unnecessarily on lower viewports when your navbar is collapsed.
        </Alert>

        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
            </Container>
        </Navbar>

        <br />
        </>
    )
}

function NavPlace(){
    return(
        <>
        <h3>Placement</h3>
        <Alert  variant="primary">
        You can use Bootstrap's position utilities to place navbars in non-static positions. Choose from fixed to the top, fixed to the bottom, or stickied to the top (scrolls with the page until it reaches the top, then stays there). Fixed navbars use position: fixed, meaning they’re pulled from the normal flow of the DOM and may require custom CSS (e.g., padding-top on the {"<body>"}) to prevent overlap with other elements. Also note that .sticky-top uses position: sticky, which isn’t fully supported in every browser.
        </Alert>
        <p>Since these positioning needs are so common for Navbars, we've added convenience props for them</p>
        <h5>Fixed top</h5>
        <Alert  variant="secondary">
        {"<Navbar fixed=\"top\" />"}
        </Alert>
        <br/>
        <h5>Fixed bottom</h5>
        <Alert  variant="success">
        {"<Navbar fixed=\"bottom\" />"}
        </Alert>
        <br/>
        <h5>Sticky top</h5>
        <Alert  variant="danger">
        {"<Navbar sticky=\"top\" />"}
        </Alert>
        <br/>
        <h5>Sticky bottom</h5>
        <Alert  variant="warning">
        {"<Navbar sticky=\"bottom\" />"}
        </Alert>
        <br/>


        </>
    )
}

function NavResponsive(){
    return (
        <>
        <h3>Responsive behaviors</h3>
        <Alert  variant="primary">
        Use the expand prop as well as the Navbar.Toggle and Navbar.Collapse components to control when content collapses behind a button.
        <br/>Set the defaultExpanded prop to make the Navbar start expanded. Set collapseOnSelect to make the Navbar collapse automatically when the user selects an item. You can also finely control the collapsing behavior by using the expanded and onToggle props.
        </Alert>
        <p> Watch out! You need to provide a breakpoint value to expand in order for the Navbar to collapse at all.</p>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <br />
        <br />

        </>
    )
}


const Ex ={
    NavbarOv : NavbarOv,
    NavBrand : NavBrand,
    NavForm : NavForm,
    NavText : NavText,
    NavColor : NavColor,
    NavContainer : NavContainer,
    NavPlace : NavPlace,
    NavResponsive : NavResponsive,

}

export default Ex;