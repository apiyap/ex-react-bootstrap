import React, {useState , useRef}  from 'react';
//import logo from '../logo.svg';
import {
    Button,
    Overlay,
    Tooltip,
    OverlayTrigger,

} from 'react-bootstrap';

function Tooltips(){
    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <>
        <h3>Tooltips</h3>
        <p>A tooltip component for a more stylish alternative to that anchor tag title attribute.</p>
        <br/>
        <h3>Examples</h3>
        <p>Hover over the links below to see tooltips.</p>
        <div>
        Tight pants next level keffiyeh you probably haven't heard of them.
        <OverlayTrigger
        key="xx"
        placement="top"
        overlay={
            <Tooltip id={`tooltip-a-link`}>
            Tooltip on <strong>Hahaha</strong>.
            </Tooltip>
        }
        >
            <a href ="#"> Farm-to-table seitan, </a>
        </OverlayTrigger>
         
         
         mcsweeney's fixie sustainable quinoa 8-bit american apparel have a terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's cleanse vegan chambray. A really ironic artisan whatever keytar, scenester farm-to-table banksy Austin twitter handle freegan cred raw denim single-origin coffee viral.
        </div>
        <br/>
        <p>
        You can pass the Overlay injected props directly to the Tooltip component.
        </p>
        <div>
            <Button ref={target} onClick={() => setShow(!show)}>
                Click me!
            </Button>
            <Overlay target={target.current} show={show} placement="right">
                {(props) => (
                <Tooltip id="overlay-example" {...props}>
                    My Tooltip
                </Tooltip>
                )}
            </Overlay>
        </div>
        <br/>
        <p>
        Or pass a Tooltip element to OverlayTrigger instead.
        </p>
        <div>
            {['top', 'right', 'bottom', 'left'].map((placement) => (
                <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                    Tooltip on <strong>{placement}</strong>.
                    </Tooltip>
                }
                >
                <Button variant="secondary">Tooltip on {placement}</Button>
                </OverlayTrigger>
            ))}

        </div>
        <br/>
        </>
    )
}

const Ex ={
    Tooltips: Tooltips,


}

export default Ex ;
