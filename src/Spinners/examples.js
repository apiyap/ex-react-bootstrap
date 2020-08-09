import React  from 'react';
//import logo from '../logo.svg';
import {
    Spinner,
    Button,

} from 'react-bootstrap';

function Spinners(){
    return (
        <>
        <h3>Spinners</h3>
        <p>Spinners can be used to show the loading state in your projects. Spinners can be used as a</p>
        <br/>
        <div>
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>

        <br/>
        </>
    )
}

function Animations(){
    return(
        <>
        <h3>Animations</h3>
        <p>
        Bootstrap offers two animation styles for spinners. The animation style can be configured with the animation property. An animation style must always be provided when creating a spinner.
        </p>
        <br/>
        <h5><b>Border Spinner - border</b></h5>
        <div>
        <Spinner animation="border" />
        </div>
        <br/>
        <h5><b>Grow Spinner - grow</b></h5>
        <div>
        <Spinner animation="grow" />
        </div>
        <br/>
        </>
    )
}

function Variants(){
    return(
        <>
        <h3>Variants</h3>
        <p>
        All standard visual variants are available for both animation styles by setting the variant property. Alternatively spinners can be custom sized with the style property, or custom CSS classes.
        </p>
        <div>
            <Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="secondary" />
            <Spinner animation="border" variant="success" />
            <Spinner animation="border" variant="danger" />
            <Spinner animation="border" variant="warning" />
            <Spinner animation="border" variant="info" />
            <Spinner animation="border" variant="light" />
            <Spinner animation="border" variant="dark" />
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="dark" />
        </div>
        <br/>
        </>
    )
}

function Sizing(){
    return(
        <>
        <h3>Sizing</h3>
        <p>
        In addition to the standard size, a smaller additional preconfigured size is available by configuring the size property to sm.
        </p>
        <div>
            <Spinner animation="border" size="sm" />
            <Spinner animation="border" />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" />
        </div>
        <br/>
        </>
    )
}

function Buttons(){
    return(
        <>
        <h3>Buttons</h3>
        <p>
        Like the original Bootstrap spinners, these can also be used with buttons. To use this component out-of-the-box it is recommended you change the element type to span by configuring the as property when using spinners inside buttons.
        </p>
        <div>
            <Button variant="primary" disabled>
                <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                />
                <span className="sr-only">Loading...</span>
            </Button>{' '}
            <Button variant="primary" disabled>
                <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
                />
                Loading...
            </Button>
        </div>
        <br/>
        </>
    )
}
function Accessibility(){
    return(
        <>
        <h3>Accessibility</h3>
        <p>
            To ensure the maximum accessibility for spinner components it is recommended you provide a relevant ARIA role property, and include screenreader-only readable text representation of the spinner's meaning inside the component using Bootstrap's sr-only class.
            <br/>The example below provides an example of accessible usage of this component.
        </p>
        <div>
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
        <br/>
        </>
    )
}
const Ex ={
    Spinners: Spinners,
    Animations : Animations,
    Variants : Variants,
    Sizing : Sizing,
    Buttons : Buttons,
    Accessibility : Accessibility,
}

export default Ex ;
