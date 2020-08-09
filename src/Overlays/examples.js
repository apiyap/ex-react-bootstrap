import React , { useState ,useRef , useEffect }  from 'react';
//import logo from '../logo.svg';
import {
    Button,
    Overlay,
    Tooltip,
    OverlayTrigger,
    Alert,
    Image,
    Popover,


} from 'react-bootstrap';

function Overlays(){
    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <>
        <h3>Overlays</h3>
        <p>
        A set of components for positioning beautiful overlays, tooltips, popovers, and anything else you need.
        </p>
        <br/>
        <h4>Overview</h4>
        <p>Things to know about the React-Boostrap Overlay components.</p>
        <ul>
            <li>Overlays rely on the third-party library Popper.js. It's included automatically with React-Bootstrap, but you should reference the API for more advanced use cases.</li>
            <li>The {"<Tooltip>"} and {"<Popover>"} components do not position themselves. Instead the {"<Overlay>"} (or {"<OverlayTrigger>"}) components, inject ref and style props.</li>
            <li>Tooltip expects specific props injected by the {"<Overlay>"} component</li>
            <li>Tooltips for disabled elements must be triggered on a wrapper element.</li>
        </ul>
        <h4>Overlay</h4>
        <p>
        Overlay is the fundamental component for positioning and controlling tooltip visibility. It's a wrapper around Popper.js, that adds support for transitions, and visibility toggling.
        </p>
        <h4>Creating an Overlay</h4>
        <p>
        Overlays consist of at least two elements, the "overlay", the element to be positioned, as well as a "target", the element the overlay is positioned in relation to. You can also also have an "arrow" element, like the tooltips and popovers, but that is optional. Be sure to check out the Popper documentation for more details about the injected props.
        </p>
        <div>
            <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
                Click me to see
            </Button>
            <Overlay target={target.current} show={show} placement="right">
                {({ placement, arrowProps, show: _show, popper, ...props }) => (
                <div
                    {...props}
                    style={{
                    backgroundColor: 'rgba(255, 100, 100, 0.85)',
                    padding: '2px 10px',
                    color: 'white',
                    borderRadius: 3,
                    ...props.style,
                    }}
                >
                    Simple tooltip
                </div>
                )}
            </Overlay>
        </div>

        <br/>
        </>
    )
}


function DemoOverlayTrigger(){
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Simple tooltip
        </Tooltip>
      );

      
    return(
        <>
        <h3>Overlay Trigger</h3>
        <p>
            Since the above pattern is pretty common, but verbose, we've included <b>{"<OverlayTrigger>"}</b> component to help with common use-cases. It even has functionality to delayed show or hides, and a few different "trigger" events you can mix and match.
            <br/>Note that triggering components must be able to accept a ref since <b>{"<OverlayTrigger>"}</b> will attempt to add one. You can use forwardRef() for function components.
        </p>
        <div>
        <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >
            <Button variant="success">Hover me to see</Button>
        </OverlayTrigger>,
        </div>
        <br/>
        </>
    )
}

function CustomizeTrigger(){
    return(
        <>
        <h3>Customizing trigger behavior</h3>
        <p>
            For more advanced behaviors <b>{"<OverlayTrigger>"}</b> accepts a function child that passes in the injected ref and event handlers that coorespond to the configured trigger prop.
            <br/>You can manually apply the props to any element you want or split them up. The example below shows how to position the overlay to a different element than the one that triggers its visibility.
        </p>
        <Alert variant="warning">
        <b>Pro Tip: </b>Using the function form of OverlayTrigger avoids a React.findDOMNode call, for those trying to be strict mode compliant.
        </Alert>
        <div>
        <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>}
        >
            {({ ref, ...triggerHandler }) => (
            <Button
                variant="light"
                {...triggerHandler}
                className="d-inline-flex align-items-center"
            >
                <Image
                ref={ref}
                roundedCircle
                src="holder.js/20x20?text=J&bg=28a745&fg=FFF"
                />
                <span className="ml-1">Hover to see</span>
            </Button>
            )}
        </OverlayTrigger>,
        </div>
        <br/>
        </>
    )
}

function Tooltips(){
    const [show, setShow] = useState(false);
    const target = useRef(null);

    return(
        <>
        <h3>Tooltips</h3>
        <p>
        A tooltip component for a more stylish alternative to that anchor tag title attribute.
        </p>
        <h4>Examples</h4>
        <p>
        Hover over the links below to see tooltips.
        </p>
        <p>You can pass the Overlay injected props directly to the Tooltip component.</p>
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
        <p>Or pass a Tooltip element to OverlayTrigger instead.</p>
        <div>
            <>
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
            </>
        </div>
        <br/>
        </>
    )
}

function Popovers(){
    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Popover right</Popover.Title>
          <Popover.Content>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
          </Popover.Content>
        </Popover>
      );

    return(
        <>
        <h3>Popovers</h3>
        <p>
        A popover component, like those found in iOS.
        </p>
        <h4>Examples</h4>
        <div>
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant="success">Click me to see</Button>
        </OverlayTrigger>
        </div>
        <br/>
        <p>
        As with <b>{"<Tooltip>"}s,</b> you can control the placement of the Popover.
        </p>
        <div>
            <>
            {['top', 'right', 'bottom', 'left'].map((placement) => (
                <OverlayTrigger
                trigger="click"
                key={placement}
                placement={placement}
                overlay={
                    <Popover id={`popover-positioned-${placement}`}>
                    <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
                    <Popover.Content>
                        <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Content>
                    </Popover>
                }
                >
                <Button variant="secondary">Popover on {placement}</Button>
                </OverlayTrigger>
            ))}
            </>
        </div>
        <br/>
        </>
    )
}

function DisabledElements(){
    return(
        <>
        <h3>Disabled elements</h3>
        <p>
        Elements with the disabled attribute aren’t interactive, meaning users cannot hover or click them to trigger a popover (or tooltip). As a workaround, you’ll want to trigger the overlay from a wrapper <b>{"<div>"} or {"<span>"} </b> and override the pointer-events on the disabled element.
        </p>
        <div>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>
            <span className="d-inline-block">
                <Button disabled style={{ pointerEvents: 'none' }}>
                Disabled button
                </Button>
            </span>
            </OverlayTrigger>    
        </div>
        <br/>
        </>
    )
}

function ChangingContainers(){
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
  
    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };

    return(
        <>
        <h3>Changing containers</h3>
        <p>
        You can specify a container to control the DOM element the overlay is appended to. This is especially useful when styles conflict with your Overlay's.
        </p>
        <div>
            <div ref={ref}>
            <Button onClick={handleClick}>Holy guacamole!</Button>

            <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref.current}
                containerPadding={20}
            >
                <Popover id="popover-contained">
                <Popover.Title as="h3">Popover bottom</Popover.Title>
                <Popover.Content>
                    <strong>Holy guacamole!</strong> Check this info.
                </Popover.Content>
                </Popover>
            </Overlay>
            </div>
        </div>
        <br/>
        </>
    )
}

const UpdatingPopover = React.forwardRef(
    ({ popper, children, show: _, ...props }, ref) => {
      useEffect(() => {
        console.log('updating!');
        popper.scheduleUpdate();
      }, [children, popper]);
  
      return (
        <Popover ref={ref} content {...props}>
          {children}
        </Popover>
      );
    },
  );
  
  const longContent = `
    Very long
    Multiline content
    that is engaging and what-not
  `;
  const shortContent = 'Short and sweet!';


function UpdatePosDynamic(){
  const [content, setContent] = useState(shortContent);

  useEffect(() => {
    const timerId = setInterval(() => {
      setContent(content === shortContent ? longContent : shortContent);
    }, 3000);

    return () => clearInterval(timerId);
  });


    return(
        <>
        <h3>Updating position dynamically</h3>
        <p>
        Since we can't know every time your overlay changes size, to reposition it, you need to take manual action if you want to update the position of an Overlay in response to a change.
        <br/>For this, the Overlay component also injects a a popper prop with a scheduleUpdate() method that an overlay component can use to reposition itself.
        </p>
        <div>
            <OverlayTrigger
        trigger="click"
        overlay={
            <UpdatingPopover id="popover-contained">{content}</UpdatingPopover>
        }
        >
        <Button>Holy guacamole!</Button>
        </OverlayTrigger>
        </div>
        <br/>
        </>
    )
}

const Ex ={
    Overlays: Overlays,
    DemoOverlayTrigger : DemoOverlayTrigger,
    CustomizeTrigger : CustomizeTrigger,
    Tooltips : Tooltips,
    Popovers : Popovers,
    DisabledElements : DisabledElements,
    ChangingContainers : ChangingContainers,
    UpdatePosDynamic : UpdatePosDynamic,

}

export default Ex ;
