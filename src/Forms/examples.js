import React , {useState}  from 'react';
import { Formik } from 'formik';
import * as yup from 'yup'; // for everything

//import logo from '../logo.svg';
import {
    Button,
    Form,
    Alert,
    Row,Col,
    InputGroup,
    FormControl,

} from 'react-bootstrap';

function Forms(){
    return (
        <>
        <h3>Forms</h3>
        <p>
        The {"<FormControl>"} component renders a form control with Bootstrap styling. The {"<FormGroup>"} component wraps a form control with proper spacing, along with support for a label, help text, and validation state. To ensure accessibility, set controlId on {"<FormGroup>"}, and use {"<FormLabel>"} for the label.
        </p>
        <br/>
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        <br/>
        <Alert variant="success">
        The {"<FormControl>"} component directly renders the {"<input>"} or other specified component. If you need to access the value of an uncontrolled {"<FormControl>"}, attach a ref to it as you would with an uncontrolled input, then call ReactDOM.findDOMNode(ref) to get the DOM node. You can then interact with that node as you would with any other uncontrolled input.
<br/>If your application contains a large number of form groups, we recommend building a higher-level component encapsulating a complete field group that renders the label, the control, and any other necessary components. We don't provide this out-of-the-box, because the composition of those field groups is too specific to an individual application to admit a good one-size-fits-all solution.
        </Alert>
        <br/>
        </>
    )
}


function FormControls(){
    return(
        <>
        <h3>Form controls</h3>
        <p>
        For textual form controls—like inputs, selects, and textareas—use the FormControl component. FormControl adds some additional styles for general appearance, focus state, sizing, and more.
        </p>
        <div>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Example select</Form.Label>
                    <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Example multiple select</Form.Label>
                    <Form.Control as="select" multiple>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
            </Form>
        </div>
        <br/>
        <p>For file inputs, use Form.File.</p>
        <div>
        <Form>
            <Form.Group>
                <Form.File id="exampleFormControlFile1" label="Example file input" />
            </Form.Group>
        </Form>
        </div>
        <br/>
        </>
    )
}


function Sizing(){
    return(
        <>
        <h3> Sizing </h3>
        <p>Use size on {"<FormControl>"} and {"<FormLabel>"} to change the size of inputs and labels respectively.</p>
        <div>
        <Form.Group>
            <Form.Control size="lg" type="text" placeholder="Large text" />
            <br />
            <Form.Control type="text" placeholder="Normal text" />
            <br />
            <Form.Control size="sm" type="text" placeholder="Small text" />
        </Form.Group>
        </div>
        <p>Select</p>
        <div>
            <Form.Group>
                <Form.Control as="select" size="lg">
                    <option>Large select</option>
                </Form.Control>
                <br />
                <Form.Control as="select">
                    <option>Default select</option>
                </Form.Control>
                <br />
                <Form.Control size="sm" as="select">
                    <option>Small select</option>
                </Form.Control>
            </Form.Group>

        </div>
        <br/>
        </>
    )
}
function Readonly(){
    return(
        <>
        <h3>Readonly</h3>
        <p>Add the readOnly prop on an input to prevent modification of the input's value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor.</p>
        <div>
            <Form.Control type="text" placeholder="Readonly input here..." readOnly />
        </div>
        <h4>Readonly plain text</h4>
        <div>
            <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                    Email
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue="email@example.com" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Password
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
            </Form>
        </div>
        <br/>
        </>
    )
}

function RangeInputs(){
    return(
        <>
        <h3>Range Inputs</h3>
        <p></p>
        <div>
        <Form>
            <Form.Group controlId="formBasicRange">
                <Form.Label>Range</Form.Label>
                <Form.Control type="range" />
            </Form.Group>
        </Form>
        </div>
        <br/>
        </>
    )

}

function CheckAndRadio(){
    return(
        <>
        <h3>Checkboxes and Radios</h3>
        <p>For the non-textual checkbox and radio controls, FormCheck provides a single component for both types that adds some additional styling and improved layout.</p>
        
        <h4>Default (stacked)</h4>
        <p>
        By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with FormCheck.
        </p>
        <div>
            <Form>
                {['checkbox', 'radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                    <Form.Check 
                        type={type}
                        id={`default-${type}`}
                        label={`default ${type}`}
                    />

                    <Form.Check
                        disabled
                        type={type}
                        label={`disabled ${type}`}
                        id={`disabled-default-${type}`}
                    />
                    </div>
                ))}
            </Form>
        </div>
        <br/>
        <h4>Inline</h4>
        <p>Group checkboxes or radios on the same horizontal row by adding the inline prop.</p>
        <div>
            <Form>
            {['checkbox', 'radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                <Form.Check inline label="1" type={type} id={`inline-${type}-1`} />
                <Form.Check inline label="2" type={type} id={`inline-${type}-2`} />
                <Form.Check
                    inline
                    disabled
                    label="3 (disabled)"
                    type={type}
                    id={`inline-${type}-3`}
                />
                </div>
            ))}
            </Form>
        </div>
        <h4>Without labels</h4>
        <p>
        When you render a FormCheck without a label (no children) some additional styling is applied to keep the inputs from collapsing. Remember to add an aria-label when omitting labels!
        </p>
        <div>

        <Form.Check aria-label="option 1" />
        <Form.Check type="radio" aria-label="radio 1" />

        </div>
        <h4>Customizing FormCheck rendering</h4>
        <p>
        When you need tighter control, or want to customize how the FormCheck component renders, it may better to use it's constituent parts directly.
<br/>By provided children to the FormCheck you can forgo the default rendering and handle it yourself. (You can still provide an id to the FormCheck or FormGroup and have it propagate to the label and input).
        </p>
        <div>
        <Form>
        {['checkbox', 'radio'].map((type) => (
            <div key={type} className="mb-3">
            <Form.Check type={type} id={`check-api-${type}`}>
                <Form.Check.Input type={type} isValid />
                <Form.Check.Label>{`Custom api ${type}`}</Form.Check.Label>
                <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
            </Form.Check>
            </div>
        ))}
        </Form>
        </div>
        <br/>
        </>
    )
}
function Layouts(){
    return(
        <>
        <h3>Layout</h3>
        <p>
        FormControl and FormCheck both apply display: block with width: 100% to controls, which means they stack vertically by default. Additional components and props can be used to vary this layout on a per-form basis.
        </p>
        <br/>
        <h4>Form groups</h4>
        <p>
        The FormGroup component is the easiest way to add some structure to forms. It provides a flexible container for grouping of labels, controls, optional help text, and form validation messaging. By default it only applies margin-bottom, but it picks up additional styles in {"<Form inline >"} as needed. Use it with fieldsets, divs, or nearly any other element.
        <br/>You also add the controlId prop to accessibly wire the nested label and input together via the id.
        </p>
        <div>
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form>
        </div>
        <h4>Form grid</h4>
        <p>More complex forms can be built using the grid components. Use these for form layouts that require multiple columns, varied widths, and additional alignment options.</p>
        <div>
            <Form>
                <Row>
                    <Col>
                    <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Last name" />
                    </Col>
                </Row>
            </Form>
        </div>
        <h4>Form row</h4>
        <p>You may also swap {"<Row>"} for{" <Form.Row>"}, a variation of the standard grid row that overrides the default column gutters for tighter and more compact layouts.</p>
        <div>
            <Form>
                <Form.Row>
                    <Col>
                    <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Last name" />
                    </Col>
                </Form.Row>
            </Form>
        </div>
        <br/>
        <p>More complex layouts can also be created with the grid system.</p>
        <div>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        <br/>
        </>
    )
}

function HorizontalForm(){
    return(
        <>
        <h3>Horizontal form</h3>
        <p>You may also swap {"<Row>"} for {"<Form.Row>"}, a variation of the standard grid row that overrides the default column gutters for tighter and more compact layouts.</p>
        <div>
            <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                Email
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="email" placeholder="Email" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Password
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>
            <fieldset>
                <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                    Radios
                </Form.Label>
                <Col sm={10}>
                    <Form.Check
                    type="radio"
                    label="first radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    />
                    <Form.Check
                    type="radio"
                    label="second radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    />
                    <Form.Check
                    type="radio"
                    label="third radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                    />
                </Col>
                </Form.Group>
            </fieldset>
            <Form.Group as={Row} controlId="formHorizontalCheck">
                <Col sm={{ span: 10, offset: 2 }}>
                <Form.Check label="Remember me" />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Sign in</Button>
                </Col>
            </Form.Group>
            </Form>
        </div>
        <br/>
        </>
    )
}

function HorizontalLabelSizing(){
    return (
        <>
        <h3>Horizontal form label sizing</h3>
        <p>You can size the {"<FormLabel>"} using the column prop as shown.</p>
        <div>
            <Form.Group>
            <Form.Row>
                <Form.Label column="lg" lg={2}>
                Large Text
                </Form.Label>
                <Col>
                <Form.Control size="lg" type="text" placeholder="Large text" />
                </Col>
            </Form.Row>
            <br />
            <Form.Row>
                <Form.Label column lg={2}>
                Normal Text
                </Form.Label>
                <Col>
                <Form.Control type="text" placeholder="Normal text" />
                </Col>
            </Form.Row>
            <br />
            <Form.Row>
                <Form.Label column="sm" lg={2}>
                Small Text
                </Form.Label>
                <Col>
                <Form.Control size="sm" type="text" placeholder="Small text" />
                </Col>
            </Form.Row>
            </Form.Group>
        </div>
        <br/>
        </>
    )
}

function ColumnSizing(){
    return (
        <>
        <h3>Column sizing</h3>
        <p>
        As shown in the previous examples, our grid system allows you to place any number of {"<Col>"}s within a {"<Row>"} or {"<Form.Row>"}. They'll split the available width equally between them. You may also pick a subset of your columns to take up more or less space, while the remaining {"<Col>"}s equally split the rest, with specific column classes like {"<Col xs={7}>"}.
        </p>
        <div>
            <Form>
                <Form.Row>
                    <Col xs={7}>
                    <Form.Control placeholder="City" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="State" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Zip" />
                    </Col>
                </Form.Row>
            </Form>
        </div>
        <br/>
        </>
    )
}

function AutoSizing(){
    return(
        <>
        <h3>Auto-sizing</h3>
        <p>
        The example below uses a flexbox utility to vertically center the contents and changes {"<Col>"} to {"<Col xs=\"auto\">"} so that your columns only take up as much space as needed. Put another way, the column sizes itself based on on the contents.
        </p>
        <div>
            <Form>
            <Form.Row className="align-items-center">
                <Col xs="auto">
                <Form.Label htmlFor="inlineFormInput" srOnly>
                    Name
                </Form.Label>
                <Form.Control
                    className="mb-2"
                    id="inlineFormInput"
                    placeholder="Jane Doe"
                />
                </Col>
                <Col xs="auto">
                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                    Username
                </Form.Label>
                <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                    <InputGroup.Text>@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="inlineFormInputGroup" placeholder="Username" />
                </InputGroup>
                </Col>
                <Col xs="auto">
                <Form.Check
                    type="checkbox"
                    id="autoSizingCheck"
                    className="mb-2"
                    label="Remember me"
                />
                </Col>
                <Col xs="auto">
                <Button type="submit" className="mb-2">
                    Submit
                </Button>
                </Col>
            </Form.Row>
            </Form>
        </div>
        <br/>
        <p>And of course custom form controls are supported.</p>
        <div>
            <Form>
            <Form.Row className="align-items-center">
                <Col xs="auto" className="my-1">
                <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                    Preference
                </Form.Label>
                <Form.Control
                    as="select"
                    className="mr-sm-2"
                    id="inlineFormCustomSelect"
                    custom
                >
                    <option value="0">Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Control>
                </Col>
                <Col xs="auto" className="my-1">
                <Form.Check
                    type="checkbox"
                    id="customControlAutosizing"
                    label="Remember my preference"
                    custom
                />
                </Col>
                <Col xs="auto" className="my-1">
                <Button type="submit">Submit</Button>
                </Col>
            </Form.Row>
            </Form>
        </div>
        <br/>
        </>
    )
}

function InlineForms(){
    return(
        <>
        <h3>Inline forms</h3>
        <div>
            <p>Use the inline prop to display a series of labels, form controls, and buttons on a single horizontal row. Form controls within forms vary slightly from their default states.</p>
                <ul>
                    <li>
                    Controls are display: flex, collapsing any HTML white space and allowing you to provide alignment control with spacing and utilities.
                    </li>
                    <li>
                    Controls and input groups receive width: auto to override the Bootstrap default width: 100%.
                    </li>
                    <li>
                    Controls only appear inline in viewports that are at least 576px wide to account for narrow viewports on mobile devices.
                    </li>
                </ul>
            <p>
            You may need to manually address the width and alignment of individual form controls with spacing utilities (as shown below). Lastly, be sure to always include a {"<Form.Label>"} with each form control, even if you need to hide it from non-screenreader visitors with the srOnly prop.
            </p>
        </div>
        <div>
            <Form inline>
            <Form.Label htmlFor="inlineFormInputName2" srOnly>
                Name
            </Form.Label>
            <Form.Control
                className="mb-2 mr-sm-2"
                id="inlineFormInputName2"
                placeholder="Jane Doe"
            />
            <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
                Username
            </Form.Label>
            <InputGroup className="mb-2 mr-sm-2">
                <InputGroup.Prepend>
                <InputGroup.Text>@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl id="inlineFormInputGroupUsername2" placeholder="Username" />
            </InputGroup>
            <Form.Check
                type="checkbox"
                className="mb-2 mr-sm-2"
                id="inlineFormCheck"
                label="Remember me"
            />
            <Button type="submit" className="mb-2">
                Submit
            </Button>
            </Form>
        </div>
        <p>Custom form controls and selects are also supported.</p>
        <div>
            <Form inline>
            <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                Preference
            </Form.Label>
            <Form.Control
                as="select"
                className="my-1 mr-sm-2"
                id="inlineFormCustomSelectPref"
                custom
            >
                <option value="0">Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Control>
            <Form.Check
                type="checkbox"
                className="my-1 mr-sm-2"
                id="customControlInline"
                label="Remember my preference"
                custom
            />
            <Button type="submit" className="my-1">
                Submit
            </Button>
            </Form>
        </div>
        <br/>
        <Alert variant="success">
        <Alert.Heading>Alternatives to hidden labels</Alert.Heading>
        
Assistive technologies such as screen readers will have trouble with your forms if you don’t include a label for every input. For these inline forms, you can hide the labels using the srOnly prop. There are further alternative methods of providing a label for assistive technologies, such as the aria-label, aria-labelledby or title attribute. If none of these are present, assistive technologies may resort to using the placeholder attribute, if present, but note that use of placeholder as a replacement for other labelling methods is not advised.
        </Alert>
        <br/>
        </>
    )
}

function HelpTexts(){
    return(
        <>
        <h3>Help text</h3>
        <p>
        Block-level help text in forms can be created using {"<Form.Text>"}. Inline help text can be flexibly implemented using any inline HTML element and utility classes like.text-muted.
        </p>
        <Alert variant="success">
        <Alert.Heading>Associating help text with form controls </Alert.Heading>
Help text should be explicitly associated with the form control it relates to using the aria-describedby attribute. This will ensure that assistive technologies—such as screen readers—will announce this help text when the user focuses or enters the control.
        </Alert>
        <p>
        Help text below inputs can be styled with {"<Form.Text>"}. This component includes display: block and adds some top margin for easy spacing from the inputs above.
        </p>
        <div>
        <>
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
        <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
        />
        <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and numbers, and
            must not contain spaces, special characters, or emoji.
        </Form.Text>
        </>
        </div>
        <p>
        Inline text can use any typical inline HTML element (be it a {"<small>"},{" <span>"}, or something else) with nothing more than a utility class.
        </p>
        <div>
            <Form inline>
            <Form.Group>
                <Form.Label htmlFor="inputPassword6">Password</Form.Label>
                <Form.Control
                type="password"
                className="mx-sm-3"
                id="inputPassword6"
                aria-describedby="passwordHelpInline"
                />
                <Form.Text id="passwordHelpBlock" muted>
                Must be 8-20 characters long.
                </Form.Text>
            </Form.Group>
            </Form>
        </div>
        <br/>
        </>
    )
}

function DisabledForms(){
    return(
        <>
        <h3>Disabled forms</h3>
        <p>
        Add the disabled boolean attribute on an input to prevent user interactions and make it appear lighter.
        </p>
        <div>
        
        <Form.Group>
            <Form.Label>Disabled input</Form.Label>
            <Form.Control placeholder="Disabled input" disabled />
        </Form.Group>
        <Form.Group>
            <Form.Label>Disabled select menu</Form.Label>
            <Form.Control as="select" disabled>
            <option>Disabled select</option>
            </Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Check type="checkbox" label="Can't check this" disabled />
        </Form.Group>
        
        </div>
        <p>
        Add the disabled attribute to a {"<fieldset>"} to disable all the controls within.
        </p>
        <div>
            <Form>
            <fieldset disabled>
                <Form.Group>
                <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
                <Form.Control id="disabledTextInput" placeholder="Disabled input" />
                </Form.Group>
                <Form.Group>
                <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
                <Form.Control as="select" id="disabledSelect">
                    <option>Disabled select</option>
                </Form.Control>
                </Form.Group>
                <Form.Group>
                <Form.Check
                    type="checkbox"
                    id="disabledFieldsetCheck"
                    label="Can't check this"
                />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </fieldset>
            </Form>
        </div>

        <br/>
        <Alert variant="warning">
        <Alert.Heading>Caveat with anchors</Alert.Heading>
By default, browsers will treat all native form controls ({"<input>"}, {"<select>"} and {"<button>"} elements) inside a {"<fieldset disabled> "}as disabled, preventing both keyboard and mouse interactions on them. However, if your form also includes {"<a ... class=\"btn btn-*\">"} elements, these will only be given a style of pointer-events: none. As noted in the section about disabled state for buttons (and specifically in the sub-section for anchor elements), this CSS property is not yet standardized and isn’t fully supported in Internet Explorer 10, and won’t prevent keyboard users from being able to focus or activate these links. So to be safe, use custom JavaScript to disable such links.
        </Alert>
        <br/>
        <Alert variant="danger">
        <Alert.Heading>Cross-browser compatibility</Alert.Heading>
While Bootstrap will apply these styles in all browsers, Internet Explorer 11 and below don’t fully support the disabled attribute on a {"<fieldset>"}. Use custom JavaScript to disable the fieldset in these browsers.
        </Alert>
        <br/>


        <br/>
        </>
    )
}

function Validations(){
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    
    return(
        <>
        <h3>Validation</h3>
        <p>
        Provide valuable, actionable feedback to your users with form validation feedback
        </p>
        <h3>Native HTML5 form validation</h3>
        <p>
        For native HTML form validation–available in all our supported browsers, the :valid and :invalid pseudo selectors are used to apply validation styles as well as display feedback messages.
        <br/>Bootstrap scopes the :valid and :invalid styles to parent .was-validated class, usually applied to the {"<Form>"} (you can use the validated prop as a shortcut). Otherwise, any required field without a value shows up as invalid on page load. This way, you may choose when to activate them (typically after form submission is attempted).
        </p>
        <Alert variant="warning">
        Watch out! Browsers provide their own validation UI by default on forms. You can disable the default UI by adding the HTML noValidate attribute to your {"<Form>"} or {"<form>"} element.
        </Alert>
        <br/>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        defaultValue="Mark"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        defaultValue="Otto"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>Username</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required
                        />
                        <Form.Control.Feedback type="invalid">
                        Please choose a username.
                        </Form.Control.Feedback>
                    </InputGroup>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="State" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" placeholder="Zip" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                    </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    />
                </Form.Group>
                <Button type="submit">Submit form</Button>
            </Form>
        </>

    )
}

// const { Formik } = formik;



function ServerStyle(){

    const schema = yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        username: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
        zip: yup.string().required(),
        terms: yup.bool().required(),
      });
      
    return(
        <>
        <h3>Form libraries and server-rendered styles</h3>
        <p>
        It's often beneficial (especially in React) to handle form validation via a library like Formik, or react-formal. In those cases, isValid and isInvalid props can be added to form controls to manually apply validation styles. Below is a quick example integrating with Formik.
        </p>
        <div>
        <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: 'Mark',
        lastName: 'Otto',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              id="validationFormik0"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
        </div>
        <br/>
        <br/>

        </>
    )
}


function Tooltips(){
    const schema = yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        username: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
        zip: yup.string().required(),
        file: yup.string().required(),
        terms: yup.bool().required(),
      });

    return(
        <>
        <h3>Tooltips</h3>
        <p>
        If your form layout allows it, you can use the tooltip prop to display validation feedback in a styled tooltip. Be sure to have a parent with position: relative on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup.
        </p>
        <div>
        <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
                firstName: 'Mark',
                lastName: 'Otto',
            }}
            >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
            }) => (
            <Form noValidate onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationFormik101">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        type="text"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        isValid={touched.firstName && !errors.firstName}
                    />
                    <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationFormik102">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        type="text"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        isValid={touched.lastName && !errors.lastName}
                    />

                    <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
                    <Form.Label>Username</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        isInvalid={!!errors.username}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                        {errors.username}
                        </Form.Control.Feedback>
                    </InputGroup>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationFormik103">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="City"
                        name="city"
                        value={values.city}
                        onChange={handleChange}
                        isInvalid={!!errors.city}
                    />

                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.city}
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationFormik104">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="State"
                        name="state"
                        value={values.state}
                        onChange={handleChange}
                        isInvalid={!!errors.state}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.state}
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationFormik105">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Zip"
                        name="zip"
                        value={values.zip}
                        onChange={handleChange}
                        isInvalid={!!errors.zip}
                    />

                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.zip}
                    </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    <Form.File
                    className="position-relative"
                    required
                    name="file"
                    label="File"
                    onChange={handleChange}
                    isInvalid={!!errors.file}
                    feedback={errors.file}
                    id="validationFormik107"
                    feedbackTooltip
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Check
                    required
                    name="terms"
                    label="Agree to terms and conditions"
                    onChange={handleChange}
                    isInvalid={!!errors.terms}
                    feedback={errors.terms}
                    id="validationFormik106"
                    feedbackTooltip
                    />
                </Form.Group>
                <Button type="submit">Submit form</Button>
                </Form>
            )}
            </Formik> 
        </div>
        <br/>
        </>
    )
}


function Customforms(){
    return (
        <>
        <h3>Custom forms</h3>
        <p>
        For even more customization and cross browser consistency, use our completely custom form elements to replace the browser defaults. They’re built on top of semantic and accessible markup, so they’re solid replacements for any default form control.
        </p>
        <h3>Checkboxes and radios</h3>
        <p>
        Custom checkbox and radio styles are achieved with a resourceful use of the :checked selector and :after pseudo elements, but are Structurally similar to the default FormCheck. By default the checked and indeterminate icons use embedded svg icons from Open Iconic.
        <br/>Apply Bootstrap's custom elements by adding the custom prop.
        </p>
        <div>
            <Form>
            {['checkbox', 'radio'].map((type) => (
                <div key={`custom-${type}`} className="mb-3">
                <Form.Check 
                    custom
                    type={type}
                    id={`custom-${type}`}
                    label={`Check this custom ${type}`}
                />

                <Form.Check
                    custom
                    disabled
                    type={type}
                    label={`disabled ${type}`}
                    id={`disabled-custom-${type}`}
                />
                </div>
            ))}
            </Form>

        </div>
        <br/>
        <br/>
        </>
    )
}

function Switches(){
    return(
        <>
        <h3>Switches</h3>
        <p>
        A switch has the markup of a custom checkbox but uses type="switch" to render a toggle switch. Switches also support the same customizable children as {"<FormCheck>"}.
        </p>
        <div>
        <Form>
            <Form.Check 
                type="switch"
                id="custom-switch"
                label="Check this switch"
            />
            <Form.Check 
                disabled
                type="switch"
                label="disabled switch"
                id="disabled-custom-switch"
            />
        </Form>            
        </div>
        <br/>
        <Alert variant="warning">
        You can also use the {"<Form.Switch>"} alias which encapsulates the above, in a very small component wrapper.
        </Alert>
        <br/>
        </>
    )
}

function Inlines(){
    return(
        <>
        <h3>Inline</h3>
        <p></p>
        <div>
        <Form>
        {['checkbox', 'radio'].map((type) => (
            <div key={`custom-inline-${type}`} className="mb-3">
            <Form.Check
                custom
                inline
                label="1"
                type={type}
                id={`custom-inline-${type}-1`}
            />
            <Form.Check
                custom
                inline
                label="2"
                type={type}
                id={`custom-inline-${type}-2`}
            />
            <Form.Check
                custom
                inline
                disabled
                label="3 (disabled)"
                type={type}
                id={`custom-inline-${type}-3`}
            />
            </div>
        ))}
        </Form>
        </div>
        <br/>
        </>
    )
}


function Selects(){
    return(
        <>
        <h3>Select</h3>
        <p>
        For the select form control you can pass the custom prop to get custom styling of the select element. Custom styles are limited to the select initial appearance and cannot modify the option styling due to browser limitations.
        </p>
        <div>
        <Form>
        <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Custom select</Form.Label>
            <Form.Control as="select" custom>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </Form.Control>
        </Form.Group>
        </Form>
        </div>
        <br/>
        <h5>Sizing</h5>
        <p>
        The custom select element supports sizing.
        </p>
        <div>
            <Form>
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                <Form.Label>Custom select Small</Form.Label>
                <Form.Control as="select" size="sm" custom>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                <Form.Label>Custom select Large</Form.Label>
                <Form.Control as="select" size="lg" custom>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Form.Control>
            </Form.Group>
            </Form>
        </div>
        <br/>

        <h5>HTML size</h5>
        <p>You can also specify the visible options of your select element.</p>
        <div>
        <Form>
        <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
            <Form.Label>Select with three visible options</Form.Label>
            <Form.Control as="select" htmlSize={3} custom>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </Form.Control>
        </Form.Group>
        </Form>
        </div>
        <br/>
        </>
    )
}


function Ranges(){
    return(
        <>
        <h3>Range</h3>
        <p>
        For the range form control you can pass the custom prop to get custom styling of the select element. The track (the background) and thumb (the value) are both styled to appear the same across browsers. As only IE and Firefox support “filling” their track from the left or right of the thumb as a means to visually indicate progress, we do not currently support it.
        </p>
        <div>
        <Form>
        <Form.Group controlId="formBasicRangeCustom">
            <Form.Label>Range</Form.Label>
            <Form.Control type="range" custom />
        </Form.Group>
        </Form>
        </div>
        <br/>
        </>
    )
}

function Files(){
    return(
        <>
        <h3>File</h3>
        <p>
        A custom styled File uploader.
        </p>
        <Alert variant="warning">
        The custom FormFile will by default not visibly display your selected file. This requires additional JS. The recommended plugin to animate custom file input is bs-custom-file-input.
        </Alert>
        <div>
        <Form>
        <Form.File 
            id="custom-file"
            label="Custom file input"
            custom
        />
        </Form>
        </div>
        <br/>
        <h5>Translating or customizing the strings with HTML</h5>
        <p>
        Bootstrap also provides a way to translate the “Browse” text in HTML with the data-browse attribute which can be added to the custom input label (example in Dutch):
        </p>
        <Alert variant="warning" >
        Note that the data-browse attribute does not to anything unless the custom prop is set.
        </Alert>
        <div>
        <Form>
        <Form.File 
            id="custom-file-translate-html"
            label="Voeg je document toe"
            data-browse="Bestand kiezen"
            custom
        />
        </Form>
        </div>
        <br/>
        <h5>Translating or customizing the strings with SCSS</h5>
        <p>
        Please refer to the official <a target="blank" href="https://getbootstrap.com/docs/4.4/components/forms/#translating-or-customizing-the-strings-with-scss">Bootstrap documentation for translating via SCSS.</a> The lang prop can be used to pass the language.
        </p>
        <div>
        <Form>
        <Form.File 
            id="custom-file-translate-scss"
            label="Custom file input"
            lang="en"
            custom
        />
        </Form>
        </div>
        <br/>
        <h5>Customizing FormFile rendering</h5>
        <p>
        When you need tighter control, or want to customize how the FormFile component renders, it may be better to use it's constituent parts directly.
        <br/>By providing children to the FormFile you can forgo the default rendering and handle it yourself. (You can still provide an id to the FormFile and have it propagate to the label and input).
        </p>
        <Alert variant="warning">
        When customizing the FormFile rendering it is important to note the order of the label and input elements.
        <ul>
            <li>If you are not setting the custom prop thelabel should be before the input.</li>
            <li>If you are setting the custom prop the input element has to be placed before the label or the buttonText prop will not work.</li>
        </ul>
        </Alert>
        <div>
        <Form>
        <div className="mb-3">
            <Form.File id="formcheck-api-custom" custom>
            <Form.File.Input isValid />
            <Form.File.Label data-browse="Button text">
                Custom file input
            </Form.File.Label>
            <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
            </Form.File>
        </div>
        <div className="mb-3">
            <Form.File id="formcheck-api-regular">
            <Form.File.Label>Regular file input</Form.File.Label>
            <Form.File.Input />
            </Form.File>
        </div>
        </Form>
        </div>
        <br/>
        </>
    )
}

const Ex ={
    Forms: Forms,
    FormControls : FormControls,
    Sizing : Sizing,
    Readonly : Readonly,
    RangeInputs : RangeInputs,
    CheckAndRadio : CheckAndRadio,
    Layouts : Layouts,
    HorizontalForm : HorizontalForm,
    HorizontalLabelSizing:HorizontalLabelSizing,
    ColumnSizing : ColumnSizing,
    AutoSizing : AutoSizing,
    InlineForms : InlineForms,
    HelpTexts : HelpTexts,
    DisabledForms : DisabledForms,
    Validations : Validations,
    ServerStyle : ServerStyle,
    Tooltips : Tooltips,
    Customforms : Customforms,
    Switches : Switches,
    Inlines : Inlines,
    Selects : Selects,
    Ranges : Ranges,
    Files : Files,

}

export default Ex ;
