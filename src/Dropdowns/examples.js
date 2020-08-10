import React ,{ useState , } from 'react';
//import logo from '../logo.svg';
import {
    Dropdown,
    DropdownButton,
    ButtonGroup,
    Button,
    SplitButton,
    FormControl,

} from 'react-bootstrap';

function Dropdowns(){
    return (
        <>
        <h3>Dropdowns</h3>
        <p>Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.</p>
        <br/>
        <h3>Overview</h3>
        <p>Dropdowns are toggleable, contextual overlays for displaying lists of links and more. Like overlays, Dropdowns are built using a third-party library Popper.js, which provides dynamic positioning and viewport detection.</p>
        <h3>Accessibility</h3>
        <p>The WAI ARIA standard defines a role="menu" widget, but it's very specific to a certain kind a menu. ARIA menus, must only contain role="menuitem", role="menuitemcheckbox", or role="menuitemradio".
<br/>On the other hand, Bootstrap's dropdowns are designed to more generic and application in a variety of situations. For this reason we don't automatically add the menu roles to the markup. We do implement some basic keyboard navigation, and if you do provide the "menu" role, react-bootstrap will do its best to ensure the focus management is compliant with the ARIA authoring guidelines for menus.</p>
        <br/>
        <h3>Examples</h3>
        <h5>Single button dropdowns</h5>
        <p>The basic Dropdown is composed of a wrapping Dropdown and inner {"<DropdownMenu>"}, and {"<DropdownToggle>"}. By default the {"<DropdownToggle>"} will render a Button component and accepts all the same props.</p>
        <div>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        
        </div>
        <br/>
        <p>Since the above is such a common configuration react-bootstrap provides the {"<DropdownButton>"} component to help reduce typing. Provide a title prop and some {"<DropdownItem>"}s and you're ready to go.</p>
        <div>
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        </div>
        <br/>
        <p>DropdownButton will forward Button props to the underlying Toggle component</p>
        <div>
            <>
            {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
                (variant) => (
                <DropdownButton
                    as={ButtonGroup}
                    key={variant}
                    id={`dropdown-variants-${variant}`}
                    variant={variant.toLowerCase()}
                    title={variant}
                >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3" active>
                    Active Item
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
                ),
            )}
            </>
        </div>
        <br/>
        </>
    )
}

function SplitDwopdown(){
    return(
        <>
        <h3>Split button dropdowns</h3>
        <p>Similarly, You create a split dropdown by combining the Dropdown components with another Button and a ButtonGroup.</p>
        <div>
            <Dropdown as={ButtonGroup}>
                <Button variant="success">Split Button</Button>

                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
        <br/>
        <p>As with DropdownButton, SplitButton is provided as convenience component.</p>
        <div>
        <>
        {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
            (variant) => (
            <SplitButton
                key={variant}
                id={`dropdown-split-variants-${variant}`}
                variant={variant.toLowerCase()}
                title={variant}
            >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                Active Item
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </SplitButton>
            ),
        )}
        </>

        </div>
        <br/>
        </>
    )
}

function Sizing(){
    return(
        <>
        <h3>Sizing</h3>
        <p>Dropdowns work with buttons of all sizes.</p>
        <div>
        <>
        <div className="mb-2">
            {[DropdownButton, SplitButton].map((DropdownType, idx) => (
            <DropdownType
                as={ButtonGroup}
                key={idx}
                id={`dropdown-button-drop-${idx}`}
                size="lg"
                title="Drop large"
            >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownType>
            ))}
        </div>
        <div>
            {[DropdownButton, SplitButton].map((DropdownType, idx) => (
            <DropdownType
                as={ButtonGroup}
                key={idx}
                id={`dropdown-button-drop-${idx}`}
                size="sm"
                variant="secondary"
                title="Drop small"
            >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownType>
            ))}
        </div>
        </>
        </div>
        <br/>
        </>
    )
}


function DropDirections(){
    return(
        <>
        <h3>Drop directions</h3>
        <p>Trigger dropdown menus above, below, left, or to the right of their toggle elements, with the drop prop.</p>
        <div>
        <>
        <div className="mb-2">
            {['up', 'down', 'left', 'right'].map((direction) => (
            <DropdownButton
                as={ButtonGroup}
                key={direction}
                id={`dropdown-button-drop-${direction}`}
                drop={direction}
                variant="secondary"
                title={` Drop ${direction} `}
            >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
            ))}
        </div>

        <div>
            {['up', 'down', 'left', 'right'].map((direction) => (
            <SplitButton
                key={direction}
                id={`dropdown-button-drop-${direction}`}
                drop={direction}
                variant="secondary"
                title={`Drop ${direction}`}
            >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </SplitButton>
            ))}
        </div>
        </>
        </div>
        <br/>
        </>
    )
}

function Dropdownitems(){
    return(
        <>
        <h3>Dropdown items</h3>
        <p>Historically dropdown menu contents had to be links, but that’s no longer the case with v4. Now you can optionally use {"<button>"} elements in your dropdowns instead of just {"<a>"}s.
<br/>You can also create non-interactive dropdown items with {"<Dropdown.ItemText>"}. Feel free to style further with custom CSS or text utilities.</p>
        <div>
        <DropdownButton id="dropdown-item-button" title="Dropdown button">
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
        </DropdownButton>

        </div>
        <br/>
        </>
    )
}

function DemoMenuAlignment(){
    return(
        <>
        <h3>Menu alignment</h3>
        <p>By default, a dropdown menu is aligned to the left, but you can switch it by passing the alignRight prop.</p>
        <div>
        <DropdownButton
            alignRight
            title="Dropdown right"
            id="dropdown-menu-align-right"
        >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownButton>
        </div>
        <br/>
        </>
    )
}


function DemoMenuheaders(){
    return(
        <>
        <h3>Menu headers</h3>
        <p>Add a header to label sections of actions.</p>
 
        <Dropdown.Menu show>
            <Dropdown.Header>Dropdown header</Dropdown.Header>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        </Dropdown.Menu>

        <br/>
        </>
    )
}

function DemoMenudividers(){
    return(
        <>
        <h3>Menu dividers</h3>
        <p>Separate groups of related menu items with a divider.</p>
        <div>
        <Dropdown.Menu show>
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </Dropdown.Menu>
        </div>
        <br/>
        </>
    )
}

function Customizations(){
    return (
        <>
        <h3>Customizations</h3>
        <p>If the default handling of the dropdown menu and toggle components aren't to your liking, you can customize them, by using the more basic {"<Dropdown>"} Component to explicitly specify the Toggle and Menu components</p>
        <div>
        <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle id="dropdown-custom-1">Pow! Zoom!</Dropdown.Toggle>
            <Dropdown.Menu className="super-colors">
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
                Active Item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>{' '}
        <Dropdown as={ButtonGroup}>
            <Button variant="info">mix it up style-wise</Button>
            <Dropdown.Toggle split variant="success" id="dropdown-custom-2" />
            <Dropdown.Menu className="super-colors">
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
                Active Item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>
        <br/>
        </>
    )
}



// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href="#"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));
  
  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');
  
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <FormControl
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );


function CustomsDropdown(){

    return (
        <>
        <h3>Custom Dropdown Components</h3>
        <p>
        For those that want to customize everything, you can forgo the included Toggle and Menu components, and create your own. By providing custom components to the as prop, you can control how each component behaves. Custom toggle and menu components must be able to accept refs.
        </p>
        <div>
        <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            Custom toggle
            </Dropdown.Toggle>

            <Dropdown.Menu as={CustomMenu}>
            <Dropdown.Item eventKey="1">Red</Dropdown.Item>
            <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
                Orange
            </Dropdown.Item>
            <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        </div>
        <br/>
        </>
    )
}

const Ex ={
    Dropdowns: Dropdowns,
    SplitDwopdown : SplitDwopdown,
    Sizing : Sizing,
    DropDirections : DropDirections,
    Dropdownitems : Dropdownitems,
    MenuAlignment : DemoMenuAlignment,
    Menuheaders : DemoMenuheaders,
    Menudividers : DemoMenudividers,
    Customizations : Customizations,
    CustomsDropdown : CustomsDropdown,



}

export default Ex ;
