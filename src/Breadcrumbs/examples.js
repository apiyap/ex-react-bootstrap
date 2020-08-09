import React  from 'react';
//import logo from '../logo.svg';
import {
    Breadcrumb,


} from 'react-bootstrap';

function Breadcrumbs(){
    return (
        <>
        <h3>Breadcrumbs</h3>
        <p>Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS. Add active prop to active Breadcrumb.Item . Do not set both active and href attributes. active overrides href and span element is rendered instead of a .</p>
        <br/>
        <h3>Example</h3>
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>

        </div>
        <br/>
        </>
    )
}

const Ex ={
    Breadcrumbs: Breadcrumbs,


}

export default Ex ;
