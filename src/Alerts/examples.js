import React, {useState} from 'react';

import {
    Alert,
    Button,

} from 'react-bootstrap';


function Alerts(){
    const all = [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant, idx) => (
        <Alert key={idx} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ));

    return(
        <>
        <h3>Alerts</h3>
        <h4>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</h4>
        <h3>Examples#</h3>
        <p>Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight variants.</p>
        <div>
            {all}
        </div>
        <br/>
        </>
    );
}

function Links()
{
    const all = [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant, idx) => (
        <Alert key={idx} variant={variant}>
          This is a {variant} alert with{' '}
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
          like.
        </Alert>
      )); 

    return (
        <>
        <h3>Links</h3>
        <p>For links, use the {"<Alert.Link>"} component to provide matching colored links within any alert.</p>
        {all}

        <br/>
        </>
    );
}

function Contents(){
    
    return (
        <>
        <h3>Additional content</h3>
        <p>Alerts can contain whatever content you like. Headers, paragraphs, dividers, go crazy.</p>
        <Alert variant="success">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
                Aww yeah, you successfully read this important alert message. This example
                text is going to run a bit longer so that you can see how spacing within an
                alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
                Whenever you need to, be sure to use margin utilities to keep things nice
                and tidy.
            </p>
        </Alert>

        <br/>
        </>
    )
}

function Dismissing(){
    const [show, setShow] = useState(true);

    var content ='';

    if(show)
    {
        content = (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
              Change this and that and try again. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
              Cras mattis consectetur purus sit amet fermentum.
            </p>
          </Alert>
        );
    }else{
        content = (
            <Button onClick={() => setShow(true)}>Show Alert</Button>
        );
    }

    return(
        <>
        <h3>Dismissing</h3>
        <p>Add the dismissible prop to add a functioning dismiss button to the Alert.</p>   
        <div>
            {content}
        </div>
        
        <br/>
        </>
    )
}


function AlertDismissible() {
    const [show, setShow] = useState(true);
  
    return (
      <>
        <h3>Alert Dismissible</h3>
        <p>You can also control the visual state directly which is great if you want to build more complicated alerts.</p> 

        <Alert show={show} variant="success">
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
            fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close me y'all!
            </Button>
          </div>
        </Alert>
  
        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
        <br/>
        <br/>
      </>
    );
  }
  

const Ex ={
    Alerts : Alerts,
    Links : Links,
    Contents : Contents,
    Dismissing : Dismissing,
    AlertDismissible : AlertDismissible,


}

export default Ex ;
