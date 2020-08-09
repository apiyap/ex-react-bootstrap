import React  from 'react';
//import logo from '../logo.svg';
import {
    Button,
    ButtonGroup,
    ButtonToolbar,
    InputGroup,
    FormControl,
    DropdownButton,
    Dropdown,

} from 'react-bootstrap';


function ButtonGroups(){
    return (
        <>
        <h3>Button groups</h3>
        <p>Group a series of buttons together on a single line with the button group.</p>
        <br/>
        <h3>Basic example</h3>
        <p>Wrap a series of {"<Button>"}s in a {"<ButtonGroup>"}.</p>
        <div>
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">Left</Button>
            <Button variant="secondary">Middle</Button>
            <Button variant="secondary">Right</Button>
        </ButtonGroup>
        
        </div>

        <br/>
        </>
    )
}

function Toolbars(){
    return (
        <>
        <h3>Button toolbar</h3>
        <p>Combine sets of {"<ButtonGroup>"}s into a {"<ButtonToolbar>"} for more complex components.</p>
        <div>
        <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="mr-2" aria-label="First group">
                <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
            </ButtonGroup>
            <ButtonGroup className="mr-2" aria-label="Second group">
                <Button>5</Button> <Button>6</Button> <Button>7</Button>
            </ButtonGroup>
            <ButtonGroup aria-label="Third group">
                <Button>8</Button>
            </ButtonGroup>
        </ButtonToolbar>
        </div>
        <p>Feel free to mix input groups with button groups in your toolbars. Similar to the example above, you’ll likely need some utilities though to space things properly.</p>
        <div>
        <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
            <ButtonGroup className="mr-2" aria-label="First group">
            <Button variant="secondary">1</Button>{' '}
            <Button variant="secondary">2</Button>{' '}
            <Button variant="secondary">3</Button>{' '}
            <Button variant="secondary">4</Button>
            </ButtonGroup>
            <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                type="text"
                placeholder="Input group example"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon"
            />
            </InputGroup>
        </ButtonToolbar>

        <ButtonToolbar
            className="justify-content-between"
            aria-label="Toolbar with Button groups"
        >
            <ButtonGroup aria-label="First group">
            <Button variant="secondary">1</Button>{' '}
            <Button variant="secondary">2</Button>{' '}
            <Button variant="secondary">3</Button>{' '}
            <Button variant="secondary">4</Button>
            </ButtonGroup>
            <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                type="text"
                placeholder="Input group example"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon2"
            />
            </InputGroup>
        </ButtonToolbar>            
        </div>
        
        <br/>
        </>
    )
}

function Sizing(){
    return(
        <>
        <h3>Sizing</h3>
        <p>Instead of applying button sizing props to every button in a group, just add size prop to the {"<ButtonGroup>"}.</p>
        <div>
        <ButtonGroup size="lg" className="mb-2">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
        </ButtonGroup>
        <br />
        <ButtonGroup className="mb-2">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
        </ButtonGroup>
        <br />
        <ButtonGroup size="sm">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
        </ButtonGroup>            
        </div>

        <br/>
        </>
    )
}

function Nesting(){
    return(
        <>
        <h3>Nesting</h3>
        <p>You can place other button types within the {"<ButtonGroup>"} like {"<DropdownButton>"}s.</p>

        <div>
        <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>

            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
        </ButtonGroup>

        </div>
        <br/>
        </>
    )
}


function Vertical(){
    return(
        <>
        <h3>Vertical variation</h3>
        <p>Make a set of buttons appear vertically stacked rather than horizontally, by adding vertical to the {"<ButtonGroup>"}. Split button dropdowns are not supported here.</p>
        <div>
        <ButtonGroup vertical>
            <Button>Button</Button>
            <Button>Button</Button>

            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>

            <Button>Button</Button>
            <Button>Button</Button>

            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-2">
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>

            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-3">
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
        </ButtonGroup>

        </div>
        <br/>
        </>
    )
}

const Ex ={
    ButtonGroups: ButtonGroups,
    Toolbars : Toolbars,
    Sizing : Sizing,
    Nesting : Nesting,
    Vertical : Vertical,



}

export default Ex ;
