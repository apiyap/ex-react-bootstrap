import React  from 'react';
//import logo from '../logo.svg';
import {
    Button,

} from 'react-bootstrap';

function Buttons(){
    return (
        <>
        <h3>Template</h3>
        <p>Custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
        <br/>
        <h3>Examples</h3>
        <p>Use any of the available button style types to quickly create a styled button. Just modify the variant prop.</p>
        <div>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
            <Button variant="link">Link</Button>
        
        </div>

        <br/>
        </>
    )
}

const Ex ={
    Buttons: Buttons,


}

export default Ex ;
