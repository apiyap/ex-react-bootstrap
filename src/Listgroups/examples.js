import React   from 'react';
//import logo from '../logo.svg';
import {
    ListGroup,
    Alert,
    Tab,
    Row,
    Col,


} from 'react-bootstrap';

function Listgroups(){
    return (
        <>
        <h3>List groups</h3>
        <p>List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.</p>
        <br/>
        <h3>Basic Example</h3>
        <div>
        <ListGroup>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        </div>

        <br/>
        </>
    )
}

function Activeitems(){
    return(
        <>
        <h3>Active items</h3>
        <p>Set the active prop to indicate the list groups current active selection.</p>
        <div>
        <ListGroup as="ul">
        <ListGroup.Item as="li" active>
            Cras justo odio
        </ListGroup.Item>
        <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item as="li" disabled>
            Morbi leo risus
        </ListGroup.Item>
        <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
        </div>
        <br/>
        </>
    )
}
function Disableditems(){
    return(
        <>
        <h3>Disabled items</h3>
        <p>
        Set the disabled prop to prevent actions on a{" <ListGroup.Item>"}. For elements that aren't naturally disable-able (like anchors) onClick handlers are added that call preventDefault to mimick disabled behavior.
        </p>
        <div>
        <ListGroup>
            <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
        </div>
        <br/>
        </>
    )
}

function Actionableitems(){
    function alertClicked() {
        alert('You clicked the third ListGroupItem');
      }
    return(
        <>
        <h3>Actionable items</h3>
        <p>
        Toggle the action prop to create actionable list group items, with disabled, hover and active styles. List item actions will render a {"<button>"} or {"<a>"} (depending on the presence of an href) by default but can be overridden by setting the as prop as usual.
       <br/>List items actions are distinct from plain items to ensure that click or tap affordances aren't applied to non-interactive items.
        </p>
        <div>
        <ListGroup defaultActiveKey="#link1">
            <ListGroup.Item action href="#link1">
            Link 1
            </ListGroup.Item>
            <ListGroup.Item action href="#link2" disabled>
            Link 2
            </ListGroup.Item>
            <ListGroup.Item action onClick={alertClicked}>
            This one is a button
            </ListGroup.Item>
        </ListGroup>
        </div>
        <br/>
        </>
    )
}

function Flushs(){
    return(
        <>
        <h3>Flush</h3>
        <p>
        Add the flush variant to remove outer borders and rounded corners to render list group items edge-to-edge in a parent container such as a Card.
        </p>
        <div>
        <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
        </div>
        <br/>
        </>
    )
}

function Horizontals(){
    return(
        <>
        <h3>Horizontal</h3>
        <p>
        Use the horizontal prop to make the ListGroup render horizontally. <b>Currently horizontal list groups cannot be combined with flush list groups.</b>
        </p>
        <div>
            <ListGroup horizontal>
                <ListGroup.Item>This</ListGroup.Item>
                <ListGroup.Item>ListGroup</ListGroup.Item>
                <ListGroup.Item>renders</ListGroup.Item>
                <ListGroup.Item>horizontally!</ListGroup.Item>
            </ListGroup>
        </div>
        <br/>
        <p>
        There are responsive variants to horizontal: setting it to <b>{"{sm|md|lg|xl} "}</b>makes the list group horizontal starting at that breakpoint’s min-width.
        </p>
        <div>
            {
                ['sm', 'md', 'lg', 'xl'].map((breakpoint, idx) => (
                    <ListGroup horizontal={breakpoint} className="my-2" key={idx}>
                      <ListGroup.Item>This ListGroup</ListGroup.Item>
                      <ListGroup.Item>renders horizontally</ListGroup.Item>
                      <ListGroup.Item>on {breakpoint}</ListGroup.Item>
                      <ListGroup.Item>and above!</ListGroup.Item>
                    </ListGroup>
                  ))
            }
        </div>
        <br/>
        </>

    )
}


function ContextualClasses(){
    return(
        <>
        <h3>Contextual classes</h3>
        <p>
        Use contextual variants on {"<ListGroup.Item>"}s to style them with a stateful background and color.
        </p>
        <div>
        <ListGroup>
            <ListGroup.Item>No style</ListGroup.Item>
            <ListGroup.Item variant="primary">Primary</ListGroup.Item>
            <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
            <ListGroup.Item variant="success">Success</ListGroup.Item>
            <ListGroup.Item variant="danger">Danger</ListGroup.Item>
            <ListGroup.Item variant="warning">Warning</ListGroup.Item>
            <ListGroup.Item variant="info">Info</ListGroup.Item>
            <ListGroup.Item variant="light">Light</ListGroup.Item>
            <ListGroup.Item variant="dark">Dark</ListGroup.Item>
        </ListGroup>
        </div>
        <br/>
        <p>
        When paired with actions, additional hover and active styles apply.
        </p>
        <div>
        <ListGroup>
            <ListGroup.Item>No style</ListGroup.Item>
            <ListGroup.Item variant="primary">Primary</ListGroup.Item>
            <ListGroup.Item action variant="secondary">
                Secondary
            </ListGroup.Item>
            <ListGroup.Item action variant="success">
                Success
            </ListGroup.Item>
            <ListGroup.Item action variant="danger">
                Danger
            </ListGroup.Item>
            <ListGroup.Item action variant="warning">
                Warning
            </ListGroup.Item>
            <ListGroup.Item action variant="info">
                Info
            </ListGroup.Item>
            <ListGroup.Item action variant="light">
                Light
            </ListGroup.Item>
            <ListGroup.Item action variant="dark">
                Dark
            </ListGroup.Item>
        </ListGroup>
        </div>
        <br/>
        <Alert variant="warning">
        <Alert.Heading> Conveying meaning to assistive technologies</Alert.Heading>
            Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the .sr-only class.
        </Alert>
        <br/>
        </>
    )
}


function DemoTabbedInterfaces(){
    return(
        <>
        <h3>Tabbed Interfaces</h3>
        <p>
        You can also use the Tab components to create ARIA compliant tabbable interfaces with the {"<ListGroup>"} component. Swap out the {"<Nav>"} component for the list group and you are good to go.
        </p>
        <div>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={4}>
                    <ListGroup>
                        <ListGroup.Item action href="#link1">
                        Link 1
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                        Link 2
                        </ListGroup.Item>
                    </ListGroup>
                    </Col>
                    <Col sm={8}>
                    <Tab.Content>
                        <Tab.Pane eventKey="#link1">
                        In loving thee thou know'st I am forsworn, But thou art twice forsworn, to me love swearing; In act thy bed-vow broke, and new faith torn, In vowing new hate after new love bearing: But why of two oaths' breach do I accuse thee, When I break twenty? I am perjur'd most; For all my vows are oaths but to misuse thee, And all my honest faith in thee is lost: For I have sworn deep oaths of thy deep kindness, Oaths of thy love, thy truth, thy constancy;
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                        That thou art blam'd shall not be thy defect, For slander's mark was ever yet the fair; The ornament of beauty is suspect, A crow that flies in heaven's sweetest air. So thou be good, slander doth but approve Thy worth the greater being woo'd of time; For canker vice the sweetest buds doth love, And thou present'st a pure unstained prime. Thou hast passed by the ambush of young days Either not assail'd, or victor being charg'd;
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
        <br/>
        </>
    )
}

const Ex ={
    Listgroups: Listgroups,
    Activeitems : Activeitems,
    Disableditems : Disableditems,
    Actionableitems : Actionableitems,
    Flushs : Flushs,
    Horizontals : Horizontals,
    ContextualClasses : ContextualClasses,
    TabbedInterfaces : DemoTabbedInterfaces,


}

export default Ex ;
