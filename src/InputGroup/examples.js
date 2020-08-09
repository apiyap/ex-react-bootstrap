import React  from 'react';
//import logo from '../logo.svg';
import {
    Button,
    InputGroup,
    FormControl,
    Dropdown,
    DropdownButton,

} from 'react-bootstrap';

function InputGroups(){
    return (
        <>
        <h3>InputGroup</h3>
        <p>Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place {"<label>"}s outside the input group.</p>
        <br/>
        <div>
        <div>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>

  <label htmlFor="basic-url">Your vanity URL</label>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon3">
        https://example.com/users/
      </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl id="basic-url" aria-describedby="basic-addon3" />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text>$</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Amount (to the nearest dollar)" />
    <InputGroup.Append>
      <InputGroup.Text>.00</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>

  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>With textarea</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl as="textarea" aria-label="With textarea" />
  </InputGroup>
</div>
        </div>

        <br/>
        </>
    )
}

function Sizings(){
    return(
        <>
        <h3>Sizing</h3>
        <p>
        Add the relative form sizing classes to the InputGroup and contents within will automatically resize—no need for repeating the form control size classes on each element.
        </p>
        <div>
        <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <br />
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            />
        </InputGroup>
        <br />
        <InputGroup size="lg">
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        </div>            

        <br/>
        </>
    )
}

function CheckboxRadio(){
    return(
        <>
        <h3>Checkboxes and radios</h3>
        <p>
        Use the InputGroup.Radio or InputGroup.Checkbox to add options to an input group.
        </p>
        <div>
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            </InputGroup.Prepend>
            <FormControl aria-label="Text input with checkbox" />
        </InputGroup>
        <InputGroup>
            <InputGroup.Prepend>
            <InputGroup.Radio aria-label="Radio button for following text input" />
            </InputGroup.Prepend>
            <FormControl aria-label="Text input with radio button" />
        </InputGroup>           
        </div>
        <br/>
        </>
    )
}

function MultipleInputs(){
    return(
        <>
        <h3>Multiple inputs</h3>
        <p>
        While multiple inputs are supported visually, validation styles are only available for input groups with a single input.
        </p>
        <div>
        <InputGroup className="mb-3">
        <InputGroup.Prepend>
            <InputGroup.Text>First and last name</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl />
        <FormControl />
        </InputGroup>
        </div>
        <br/>
        </>
    )
}

function MultipleAddons(){
    return(
        <>
        <h3>Multiple addons</h3>
        <p>Multiple add-ons are supported and can be mixed</p>
        <div>
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
            <InputGroup.Text>0.00</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            placeholder="Recipient's username"
            aria-label="Amount (to the nearest dollar)"
            />
        </InputGroup>
        <InputGroup className="mb-3">
            <FormControl
            placeholder="Recipient's username"
            aria-label="Amount (to the nearest dollar)"
            />
            <InputGroup.Append>
            <InputGroup.Text>$</InputGroup.Text>
            <InputGroup.Text>0.00</InputGroup.Text>
            </InputGroup.Append>
        </InputGroup>
        </div>
        <br/>
        </>
    )
}
function ButtonAddons(){
    return(
        <>
        <h3>Button addons</h3>
        <p>    
        </p>
        <div>
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <Button variant="outline-secondary">Button</Button>
            </InputGroup.Prepend>
            <FormControl aria-describedby="basic-addon1" />
        </InputGroup>

        <InputGroup className="mb-3">
            <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
            <Button variant="outline-secondary">Button</Button>
            </InputGroup.Append>
        </InputGroup>

        <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <Button variant="outline-secondary">Button</Button>
            <Button variant="outline-secondary">Button</Button>
            </InputGroup.Prepend>
            <FormControl aria-describedby="basic-addon1" />
        </InputGroup>

        <InputGroup>
            <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
            <Button variant="outline-secondary">Button</Button>
            <Button variant="outline-secondary">Button</Button>
            </InputGroup.Append>
        </InputGroup>
        </div>
        <br/>
        </>
    )
}

function ButtonDropdowns(){
    return(
        <>
        <h3>Buttons with Dropdowns</h3>
        <div>
        <InputGroup className="mb-3">
            <DropdownButton
            as={InputGroup.Prepend}
            variant="outline-secondary"
            title="Dropdown"
            id="input-group-dropdown-1"
            >
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
            <FormControl aria-describedby="basic-addon1" />
        </InputGroup>

        <InputGroup>
            <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />

            <DropdownButton
            as={InputGroup.Append}
            variant="outline-secondary"
            title="Dropdown"
            id="input-group-dropdown-2"
            >
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
        </InputGroup>
        </div>
        </>
    )
}

const Ex ={
    InputGroup: InputGroups,
    Sizings : Sizings,   
    CheckboxRadio : CheckboxRadio,
    MultipleInputs : MultipleInputs,
    MultipleAddons : MultipleAddons,
    ButtonAddons : ButtonAddons,
    ButtonDropdowns : ButtonDropdowns,
}

export default Ex ;
