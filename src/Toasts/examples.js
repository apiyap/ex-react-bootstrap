import React ,{ useState } from 'react';
//import logo from '../logo.svg';
import {
    Toast,
    Row,
    Col,
    Button,

} from 'react-bootstrap';

function Toasts(){
    return (
        <>
        <h3>Toasts</h3>
        <p>
            Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.
            <br/>Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems. They’re built with flexbox, so they’re easy to align and position.
        </p>
        <br/>
        <h3>Examples</h3>
        <h5>Basic</h5>
        <p>
            To encourage extensible and predictable toasts, we recommend a header and body. Toast headers use display: flex, allowing easy alignment of content thanks to our margin and flexbox utilities.
            <br/>Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button.
        </p>
        <div>
            <Toast>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                    <strong className="mr-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
            </Toast>
        </div>

        <br/>
        </>
    )
}


function Dismissible(){
    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);
  
    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);

    return(
        <>
        <h3>Dismissible</h3>
        <br/>
        <div>
            <Row>
                <Col xs={6}>
                    <Toast show={showA} onClose={toggleShowA}>
                    <Toast.Header>
                        <img
                        src="holder.js/20x20?text=%20"
                        className="rounded mr-2"
                        alt=""
                        />
                        <strong className="mr-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                    </Toast>
                </Col>
                <Col xs={6}>
                    <Button onClick={toggleShowA}>
                    Toggle Toast <strong>with</strong> Animation
                    </Button>
                </Col>
                <Col xs={6} className="my-1">
                    <Toast onClose={toggleShowB} show={showB} animation={false}>
                    <Toast.Header>
                        <img
                        src="holder.js/20x20?text=%20"
                        className="rounded mr-2"
                        alt=""
                        />
                        <strong className="mr-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                    </Toast>
                </Col>
                <Col xs={6}>
                    <Button onClick={toggleShowB}>
                    Toggle Toast <strong>without</strong> Animation
                    </Button>
                </Col>
            </Row>
        </div>
        <br/>
        </>
    )
}

function Stacking(){
    return(
        <>
        <h3>Stacking</h3>
        <p>When you have multiple toasts, we default to vertically stacking them in a readable manner.</p>
        <div>
            <Toast>
                <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Bootstrap</strong>
                <small>just now</small>
                </Toast.Header>
                <Toast.Body>See? Just like this.</Toast.Body>
            </Toast>
            <Toast>
                <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Bootstrap</strong>
                <small>2 seconds ago</small>
                </Toast.Header>
                <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
            </Toast>
        </div>
        <br/>
        </>
    )
}

function Placement(){
    return(
        <>
        <h3>Placement</h3>
        <p>
        Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle.
        </p>
        <div
            aria-live="polite"
            aria-atomic="true"
            style={{
                position: 'relative',
                minHeight: '100px',
            }}
            >
            <Toast
                style={{
                position: 'absolute',
                top: 0,
                right: 0,
                }}
            >
                <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Bootstrap</strong>
                <small>just now</small>
                </Toast.Header>
                <Toast.Body>See? Just like this.</Toast.Body>
            </Toast>
        </div>
        <br/>
        <p>
        For systems that generate more notifications, consider using a wrapping element so they can easily stack.
        </p>
        <div
            aria-live="polite"
            aria-atomic="true"
            style={{
                position: 'relative',
                minHeight: '200px',
            }}
            >
            <div
                style={{
                position: 'absolute',
                top: 0,
                right: 0,
                }}
            >
                <Toast>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                    <strong className="mr-auto">Bootstrap</strong>
                    <small>just now</small>
                </Toast.Header>
                <Toast.Body>See? Just like this.</Toast.Body>
                </Toast>
                <Toast>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                    <strong className="mr-auto">Bootstrap</strong>
                    <small>2 seconds ago</small>
                </Toast.Header>
                <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
                </Toast>
            </div>
        </div>
        <br/>
        </>
    )
}

function Autohide(){
    const [show, setShow] = useState(false);

    return(
        <>
        <h3>Autohide</h3>
        <p>
        A Toast can also automatically hide after X milliseconds. For that, use the autohide prop in combination with delay the prop to sepecify the delay. But be aware, that it will only trigger the onClose function, you have to set manually the show property.
        </p>
        <Row>
        <Col xs={6}>
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>
                <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
                />
                <strong className="mr-auto">Bootstrap</strong>
                <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
            </Toast>
        </Col>
        <Col xs={6}>
            <Button onClick={() => setShow(true)}>Show Toast</Button>
        </Col>
        </Row>

        <br/>
        </>
    )
}

const Ex ={
    Toasts: Toasts,
    Dismissible : Dismissible,
    Stacking : Stacking,
    Placement : Placement,
    Autohide : Autohide,

}

export default Ex ;
