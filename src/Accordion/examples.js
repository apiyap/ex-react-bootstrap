
import React , {useContext}  from 'react';

import {
    Accordion,
    Card,
    Button,
    useAccordionToggle,
    AccordionContext,

} from 'react-bootstrap';


function NavAccordion(){

    return(
        <>
        <h3>Accordion</h3>
        <h5>Accordions provide a way to restrict Card components to only open one at a time.</h5>
        <br/>
        <h3>Examples</h3>
        <p>Accordions use Card components to provide styling of the Accordion components. Use AccordionToggle to provide a button that switches between each AccordionCollapse component.</p>
        <h3>Basic Example</h3>
        <div>
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Click me!
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Click me!
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        </div>

        <br/>
        </>
    )


}

function FullCollapsed(){
    return(
        <>
        <h3>Fully Collapsed State</h3>
        <p>If you want your Accordion to start in a fully-collapsed state, then simply don't pass in a defaultActiveKey prop to Accordion.</p>
        <div>
        <Accordion>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Click me!
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Click me!
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>


        </div>
        <br />
        </>
    )
}

function HeaderClickable(){
    return(
        <>
        <h3>Entire Header Clickable</h3>
        <p>Each of the Card components in the Accordion can have their entire header clickable, by setting the AccordionToggle's underlying component to be a CardHeader component.</p>
        <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>

        <br/>
        </>
    )
}

function MyCustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <button
        type="button"
        style={{ backgroundColor: 'pink' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

function CustomToggle(){
    return (
        <>
        <h3>Custom Toggle</h3>
        <p>You can now hook into the Accordion toggle functionality via useAccordionToggle to make custom toggle components.</p>
        
        <div>
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                <MyCustomToggle eventKey="0">Click me!</MyCustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <MyCustomToggle eventKey="1">Click me!</MyCustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    
        </div>

        <br/>
        </>
    );
}

function MyContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = currentEventKey === eventKey;
  
    return (
      <button
        type="button"
        style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

function ContextAwareToggle(){
    return(
        <>
        <h3>Custom Toggle with Expansion Awareness</h3>
        <p>You may wish to have different styles for the toggle if it's associated section is expanded, this can be achieved with a custom toggle that is context aware and also takes advantage of the useAccordionToggle hook.</p>
        <div>
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                <MyContextAwareToggle eventKey="0">Click me!</MyContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <MyContextAwareToggle eventKey="1">Click me!</MyContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        </div>

        <br/>
        </>
    )
}

const Ex ={
    Accordion : NavAccordion,
    FullCollapsed : FullCollapsed,
    HeaderClickable : HeaderClickable,
    CustomToggle : CustomToggle,
    ContextAwareToggle : ContextAwareToggle,


}

export default Ex ;