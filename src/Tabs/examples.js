import React , { useState }  from 'react';
//import logo from '../logo.svg';
import {
    Tab,
    Tabs,
    Row,
    Col,
    Nav,
} from 'react-bootstrap';

function Tabbed(){
    return (
        <>
        <h3>Tabbed components</h3>
        <p>Dynamic tabbed interfaces</p>
        <br/>
        <h3>Examples</h3>
        <p>Create dynamic tabbed interfaces, as described in the WAI ARIA Authoring Practices. Tabs is a higher-level component for quickly creating a Nav matched with a set of TabPanes.</p>
        <div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Home">
                When I do count the clock that tells the time, And see the brave day sunk in hideous night; When I behold the violet past prime, And sable curls, all silvered o'er with white; When lofty trees I see barren of leaves, Which erst from heat did canopy the herd, And summer's green all girded up in sheaves, Borne on the bier with white and bristly beard, Then of thy beauty do I question make, That thou among the wastes of time must go,
                </Tab>
                <Tab eventKey="profile" title="Profile">
                Thy bosom is endeared with all hearts, Which I by lacking have supposed dead; And there reigns Love, and all Love's loving parts, And all those friends which I thought buried. How many a holy and obsequious tear Hath dear religious love stol'n from mine eye, As interest of the dead, which now appear But things remov'd that hidden in thee lie! Thou art the grave where buried love doth live, Hung with the trophies of my lovers gone,
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    ffsdfsdfdsfdsf
                </Tab>
            </Tabs>
        </div>

        <br/>
        </>
    )
}

function Controlled(){
    const [key, setKey] = useState('home');

    return(
        <>
        <h3>Controlled</h3>
        <p>
        Tabs can be controlled directly when you want to handle the selection logic personally.
        </p>
        <div>
            <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="home" title="Home">
                O! how much more doth beauty beauteous seem By that sweet ornament which truth doth give. The rose looks fair, but fairer we it deem For that sweet odour, which doth in it live. The canker blooms have full as deep a dye As the perfumed tincture of the roses. Hang on such thorns, and play as wantonly When summer's breath their masked buds discloses: But, for their virtue only is their show, They live unwoo'd, and unrespected fade;
                </Tab>
                <Tab eventKey="profile" title="Profile">
                Love is too young to know what conscience is, Yet who knows not conscience is born of love? Then, gentle cheater, urge not my amiss, Lest guilty of my faults thy sweet self prove: For, thou betraying me, I do betray My nobler part to my gross body's treason; My soul doth tell my body that he may Triumph in love; flesh stays no farther reason, But rising at thy name doth point out thee, As his triumphant prize. Proud of this pride,
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    rwerewrewr
                </Tab>
            </Tabs>
        </div>
        <br/>
        </>
    )
}

function NoAnimation(){

    return(
        <>
        <h3>No animation</h3>
        <p>
        Set the transition prop to false
        </p>
        <div>
            <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                <Tab eventKey="home" title="Home">
                    How heavy do I journey on the way, When what I seek, my weary travel's end, Doth teach that ease and that repose to say, 'Thus far the miles are measured from thy friend!' The beast that bears me, tired with my woe, Plods dully on, to bear that weight in me, As if by some instinct the wretch did know His rider lov'd not speed, being made from thee: The bloody spur cannot provoke him on, That sometimes anger thrusts into his hide,
                </Tab>
                <Tab eventKey="profile" title="Profile">
                That god forbid, that made me first your slave, I should in thought control your times of pleasure, Or at your hand the account of hours to crave, Being your vassal, bound to stay your leisure! O! let me suffer, being at your beck, The imprison'd absence of your liberty; And patience, tame to sufferance, bide each check, Without accusing you of injury. Be where you list, your charter is so strong That you yourself may privilage your time
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    erewrewrer
                </Tab>
            </Tabs>
        </div>
        <br/>
        </>
    )
}

function TabDropdowns(){
    return(
        <>
        <h3>Dropdowns ?</h3>
        <p>
            Dynamic tabbed interfaces should not contain dropdown menus, as this causes both usability and accessibility issues. From a usability perspective, the fact that the currently displayed tab’s trigger element is not immediately visible (as it’s inside the closed dropdown menu) can cause confusion. From an accessibility point of view, there is currently no sensible way to map this sort of construct to a standard WAI ARIA pattern, meaning that it cannot be easily made understandable to users of assistive technologies.
            <br/>That said, it Dropdowns do work technically (sans focus management), but we don't make any claims about support.
        </p>
        <h3>Custom Tab Layout</h3>
        <p>
            For more complex layouts the flexible TabContainer, TabContent, and TabPane components along with any style of Nav allow you to quickly piece together your own Tabs component with additional markup needed.
            <br/>Create a set of NavItems each with an eventKey corresponding to the eventKey of a TabPane. Wrap the whole thing in a TabContainer and you have fully functioning custom tabs component. Check out the below example making use of the grid system and pills.
        </p>
        <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                        <div>
                        Thou art as tyrannous, so as thou art, As those whose beauties proudly make them cruel; For well thou know'st to my dear doting heart Thou art the fairest and most precious jewel. Yet, in good faith, some say that thee behold, Thy face hath not the power to make love groan; To say they err I dare not be so bold, Although I swear it to myself alone. And to be sure that is not false I swear, A thousand groans, but thinking on thy face,
                        </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                         <div>
                         Against my love shall be as I am now, With Time's injurious hand crush'd and o'erworn; When hours have drain'd his blood and fill'd his brow With lines and wrinkles; when his youthful morn Hath travell'd on to age's steepy night; And all those beauties whereof now he's king Are vanishing, or vanished out of sight, Stealing away the treasure of his spring; For such a time do I now fortify Against confounding age's cruel knife,
                         </div>
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
    Tabbed: Tabbed,
    Controlled : Controlled,
    NoAnimation : NoAnimation,
    TabDropdowns : TabDropdowns,
}

export default Ex ;
