import React ,{ useState}  from 'react';
//import logo from '../logo.svg';
import {
    Button, Alert,
    Collapse,Fade,
    
} from 'react-bootstrap';

function Transitions(){
    const [open, setOpen] = useState(false);

    return (
        <>
        <h3>Transitions</h3>
        <p>Bootstrap includes a few general use CSS transitions that can be applied to a number of components. React Bootstrap, bundles them up into a few composable {"<Transition>"} components from <a target="blank" href="https://github.com/reactjs/react-transition-group">react-transition-group</a>, a commonly used animation wrapper for React.
<br/>Encapsulating animations into components has the added benefit of making them more broadly useful, as well as portable for using in other libraries. All React-bootstrap components that can be animated, support pluggable {"<Transition>"} components.</p>
        <br/>
        <h3>Add a collapse toggle animation to an element or component.</h3>
        <Alert variant="warning">
            <Alert.Heading>Smooth animations</Alert.Heading>
            If you're noticing choppy animations, and the component that's being collapsed has non-zero margin or padding, try wrapping the contents of your {"<Collapse>"} inside a node with no margin or padding, like the {"<div> "}in the example below. This will allow the height to be computed properly, so the animation can proceed smoothly.
        </Alert>
        <div>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                click
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </Collapse>
        
        </div>

        <br/>
        </>
    )
}

function Fades(){
    const [open, setOpen] = useState(false);

    return(
        <>
        <h3>Fade</h3>
        <p>
        Add a fade animation to a child element or component.
        </p>
        <div>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-fade-text"
                aria-expanded={open}
            >
                Toggle text
            </Button>
            <Fade in={open}>
                <div id="example-fade-text">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </Fade>
        </div>
        <br/>
        </>
    )
}
const Ex ={
    Transitions: Transitions,
    Fades : Fades,


}

export default Ex ;
