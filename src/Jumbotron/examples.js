import React  from 'react';
//import logo from '../logo.svg';
import {
    Button,
    Jumbotron,
    Container,

} from 'react-bootstrap';

function Jumbotrons(){
    return (
        <>
        <h3>Jumbotron</h3>
        <p>A lightweight, flexible component that can optionally extend the entire viewport to showcase key content on your site.</p>
        <br/>
        <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
        </p>
        <p>
            <Button variant="primary">Learn more</Button>
        </p>
        </Jumbotron>

        <br/>
        <Jumbotron fluid>
        <Container>
            <h1>Fluid jumbotron</h1>
            <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
            </p>
        </Container>
        </Jumbotron>
        <br/>
        </>
    )
}

const Ex ={
    Jumbotrons: Jumbotrons,


}

export default Ex ;
