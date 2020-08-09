import React ,{ useState ,useRef ,useEffect } from 'react';
//import logo from '../logo.svg';
import {
    Button,
    Popover,
    OverlayTrigger,
    Tooltip,
    Overlay,


} from 'react-bootstrap';

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

    return (
        <>
        <h3>Popovers</h3>
        <p>A popover component, like those found in iOS.</p>
        <br/>
        <h3>Examples</h3>
        <div>

            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <Button variant="success">Click me to see</Button>
            </OverlayTrigger>
        </div>
        <br/>
        <p>As with <b>{"<Tooltip>"}s,</b> you can control the placement of the Popover.</p>
        <div>
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
        Elements with the disabled attribute aren’t interactive, meaning users cannot hover or click them to trigger a popover (or tooltip). As a workaround, you’ll want to trigger the overlay from a wrapper {"<div>"} or {"<span>"} and override the pointer-events on the disabled element.
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
    Popovers: Popovers,
    DisabledElements : DisabledElements,
    ChangingContainers : ChangingContainers,
    UpdatePosDynamic : UpdatePosDynamic,



}

export default Ex ;
