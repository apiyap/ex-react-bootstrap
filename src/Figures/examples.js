import React  from 'react';
//import logo from '../logo.svg';
import {
    Button,
    Figure,
    
} from 'react-bootstrap';

function Figures(){
    return (
        <>
        <h3>Figures</h3>
        <p>Anytime you need to display a piece of content, like an image with an optional caption, consider using a Figure.</p>
        <br/>
        <h3>Figure</h3>
        <p>Displaying related images and text with the Figure component.</p>
        <div>
        <Figure>
        <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="holder.js/171x180"
        />
        <Figure.Caption>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
        </Figure>
        </div>

        <br/>
        </>
    )
}

const Ex ={
    Figures: Figures,


}

export default Ex ;
