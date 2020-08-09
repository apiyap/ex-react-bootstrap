import React  from 'react';
//import logo from '../logo.svg';
import {

    Container,
    Row,
    Col,
    Image,

} from 'react-bootstrap';

function Images(){
    return (
        <>
        <h3>Images</h3>
        <p></p>
        <br/>
        <h3>Shape</h3>
        <p>Use the rounded, roundedCircle and thumbnail props to customise the image.</p>
        <div>
        <Container>
            <Row>
                <Col xs={6} md={4}>
                <Image src="holder.js/171x180" rounded />
                </Col>
                <Col xs={6} md={4}>
                <Image src="holder.js/171x180" roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                <Image src="holder.js/171px180" thumbnail />
                </Col>
            </Row>
        </Container>
        
        </div>

        <br/>
        </>
    )
}

function Fluids(){
    return(
        <>
        <h3>Fluid</h3>
        <p>Use the fluid to scale image nicely to the parent element.</p>
        <div>
        <Image src="holder.js/100px250" fluid />
        </div>
        <br/>
        </>
    )
}


const Ex ={
    Images: Images,
    Fluids : Fluids,

}

export default Ex ;
