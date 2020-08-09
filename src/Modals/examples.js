import React  , { useState}  from 'react';
//import logo from '../logo.svg';
import {
    Button,
    Modal,
    Row,
    Col,
    Container,

} from 'react-bootstrap';

function Modals(){
    return (
        <>
        <h3>Modals</h3>
        <p>Add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>
        <br/>
        <h3>Overview</h3>
        <ul>
            <li>Modals are positioned over everything else in the document and remove scroll from the {"<body>"} so that modal content scrolls instead.</li>
            <li>Modals are unmounted when closed.</li>
            <li>Bootstrap only supports one modal window at a time. Nested modals aren’t supported, but if you really need them the underlying react-overlays can support them if you're willing.</li>
            <li>Modal's "trap" focus in them, ensuring the keyboard navigation cycles through the modal, and not the rest of the page.</li>
            <li>Unlike vanilla Bootstrap, autoFocus works in Modals because React handles the implementation.</li>
        </ul>
        <h3>Examples</h3>
        <h4>Static Markup</h4>
        <p>Below is a static modal dialog (without the positioning) to demonstrate the look and feel of the Modal.</p>
        <div>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>

        <br/>
        </>
    )
}

function LiveDemo(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <h3>Live demo</h3>
        <p>
        A modal with header, body, and set of actions in the footer. Use {"<Modal/>"} in combination with other components to show or hide your Modal. The <b>{"<Modal/>"} </b>Component comes with a few convenient "sub components":<b>{" <Modal.Header/>"}, {"<Modal.Title/>"}, {"<Modal.Body/>"}, and {"<Modal.Footer/>"},</b> which you can use to build the Modal content.
        </p>
        <div>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
        <br/>
        </>
    )
}


function StaticBackdrop(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    return(
        <>
        <h3>Static backdrop</h3>
        <p>
        When backdrop is set to static, the modal will not close when clicking outside it. Click the button below to try it.
        </p>
        <div>
            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                I will not close if you click outside me. Don't even try to press
                escape key.
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </div>
        <br/>
        </>
    )
}

function WithoutAnimation(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    return(
        <>
        <h3>Without Animation</h3>
        <p>
        A Modal can also be without an animation. For that set the "animation" prop to false.
        </p>
        <div>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
        <br/>
        </>
    )
}

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function AdditionalImportOptions(){
    const [modalShow, setModalShow] = React.useState(false);

    return(
        <>
        <h3>Additional Import Options</h3>
        <p>
        The Modal Header, Title, Body, and Footer components are available as static properties the {"<Modal/>"} component, but you can also, import them directly like: require("react-bootstrap/ModalHeader").
        </p>
        <h5>Vertically centered</h5>
        <p>
        You can vertically center a modal by passing the "centered" prop.
        </p>
        <div>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
        <br/>
        </>
    )
}

function MydModalWithGrid(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Using Grid in Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} md={8}>
                .col-xs-12 .col-md-8
              </Col>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Col>
            </Row>
  
            <Row>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Col>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Col>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function UsingGrids(){
    const [modalShow, setModalShow] = useState(false);

    return(
        <>
        <h3>Using the grid</h3>
        <p>
        You can use grid layouts within a model using regular grid components inside the modal content.
        </p>
        <div>
        <Button variant="primary" onClick={() => setModalShow(true)}>
            Launch modal with grid
        </Button>

        <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        </div>
        <br/>
        </>
    )
}

function OptionalSizes(){
    const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

    return(
        <>
        <h3>Optional Sizes</h3>
        <p>
        You can specify a bootstrap large or small modal by using the "size" prop.
        </p>
        <div>
            <Button onClick={() => setSmShow(true)}>Small modal</Button>{' '}
            <Button onClick={() => setLgShow(true)}>Large modal</Button>
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    Small Modal
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Large Modal
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>
        </div>
        <br/>
        </>
    )
}

function CustomSizeCss(){
    const [show, setShow] = useState(false);

    return(
        <>
        <h3>Sizing modals using custom CSS</h3>
        <p>
        You can apply custom css to the modal dialog div using the "dialogClassName" prop. Example is using a custom css class with width set to 90%.
        </p>
        <div>
            <Button variant="primary" onClick={() => setShow(true)}>
                Custom Width Modal
            </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Custom Modal Styling
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <p>
                    Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                    commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                    ipsam atque a dolores quisquam quisquam adipisci possimus
                    laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                    accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                    reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                    deleniti rem!
                </p>
                </Modal.Body>
            </Modal>
        </div>
        <br/>
        </>
    )
}

const Ex ={
    Modals: Modals,
    LiveDemo : LiveDemo,
    StaticBackdrop : StaticBackdrop,
    WithoutAnimation : WithoutAnimation,
    AdditionalImportOptions : AdditionalImportOptions,
    UsingGrids : UsingGrids,
    OptionalSizes : OptionalSizes,
    CustomSizeCss : CustomSizeCss,
    
}

export default Ex ;
