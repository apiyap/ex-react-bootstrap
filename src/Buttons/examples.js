import React ,{useState , useEffect} from 'react';
//import logo from '../logo.svg';
import {
    Alert,
    Button,
    ButtonGroup,
    ToggleButton,
    ToggleButtonGroup,


} from 'react-bootstrap';

function Buttons(){
    return (
        <>
        <h3>Buttons</h3>
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

function Outlines(){
    return(
        <>
        <h3>Outline buttons</h3>
        <p>For a lighter touch, Buttons also come in outline-* variants with no background color.</p>
        <div>
            <Button variant="outline-primary">Primary</Button>{' '}
            <Button variant="outline-secondary">Secondary</Button>{' '}
            <Button variant="outline-success">Success</Button>{' '}
            <Button variant="outline-warning">Warning</Button>{' '}
            <Button variant="outline-danger">Danger</Button>{' '}
            <Button variant="outline-info">Info</Button>{' '}
            <Button variant="outline-light">Light</Button>{' '}
            <Button variant="outline-dark">Dark</Button>

        </div>
        <br/>
        </>
    )

}

function Tags(){
    return(
        <>
        <h3>Button tags</h3>
        <p>Normally {"<Button>"} components will render a HTML {"<button>"} element. However you can render whatever you'd like, adding a href prop will automatically render an {"<a />"} element. You can use the as prop to render whatever your heart desires. React Bootstrap will take care of the proper ARIA roles for you.</p>
        
        <div>
            <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
            <Button as="input" type="button" value="Input" />{' '}
            <Button as="input" type="submit" value="Submit" />{' '}
            <Button as="input" type="reset" value="Reset" />
        </div>
        <br/>
        </>
    )
}

function Sizes(){
    return(
        <>
        <h3>Sizes</h3>
        <p>Fancy larger or smaller buttons? Add size="lg", size="sm" for additional sizes.</p>
        <div>
            <div className="mb-2">
                <Button variant="primary" size="lg">
                Large button
                </Button>{' '}
                <Button variant="secondary" size="lg">
                Large button
                </Button>
            </div>
            <div>
                <Button variant="primary" size="sm">
                Small button
                </Button>{' '}
                <Button variant="secondary" size="sm">
                Small button
                </Button>
            </div>
        </div>
        <br/>
        <p>Create block level buttons—those that span the full width of a parent—by adding block</p>
        <div>
            <Button variant="primary" size="lg" block>
                Block level button
            </Button>
            <Button variant="secondary" size="lg" block>
                Block level button
            </Button>
        </div>
        <br/>
        </>
    )
}

function Actives(){
    return(
        <>
        <h3>Active state</h3>
        <p>To set a button's active state simply set the component's active prop.</p>
        <div>
            <Button variant="primary" size="lg" active>
                Primary button
            </Button>{' '}
            <Button variant="secondary" size="lg" active>
                Button
            </Button>
        </div>
        <br/>
        <Alert variant="danger">
        Watch out!{" <a>"} elements don't naturally support a disabled attribute. In browsers that support it this is handled with a point-events: none style but not all browsers support it yet.
        <br/>
        React Bootstrap will prevent any onClick handlers from firing regardless of the rendered element.
        </Alert>


        <br/>
        </>
    )
}

function DisableState(){
    return(
        <>
        <h3>Disabled state</h3>
        <p>Make buttons look inactive by adding the disabled prop to.</p>
        <div>
            <Button variant="primary" size="lg" disabled>
                Primary button
            </Button>{' '}
            <Button variant="secondary" size="lg" disabled>
                Button
            </Button>{' '}
            <Button href="#" variant="secondary" size="lg" disabled>
                Link
        </Button>
        </div>
        <br/>
        <Alert variant="danger">
        Watch out! {"<a>"} elements don't naturally support a disabled attribute. In browsers that support it this is handled with a point-events: none style but not all browsers support it yet.
        <br/>
        React Bootstrap will prevent any onClick handlers from firing regardless of the rendered element.
        </Alert>


        <br/>
        </>
    )
}

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}

function LoadingButton() {
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);
  
    const handleClick = () => setLoading(true);
  
    return (
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? 'Loading…' : 'Click to load'}
      </Button>
    );
  }

  
function LoadingState(){
    return(
        <>
        <h3>Button loading state</h3>
        <p>When activating an asynchronous action from a button it is a good UX pattern to give the user feedback as to the loading state, this can easily be done by updating your {"<Button />"}s props from a state change like below.</p>
        <div>
        <LoadingButton/>
        </div>
        <br/>
        </>
    )
}

function ToggleButtonExample(){
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
  
    const radios = [
      { name: 'Active', value: '1' },
      { name: 'Radio', value: '2' },
      { name: 'Radio', value: '3' },
    ];

    
    return (
        <>
        <h3>Toggle [Checkbox / Radio]</h3>
        <p>Buttons can also be used to style checkbox and radio form elements. This is helpful when you want a toggle button that works neatly inside an HTML form.</p>
        <div>
            <ButtonGroup toggle className="mb-2">
                <ToggleButton
                type="checkbox"
                variant="secondary"
                checked={checked}
                value="1"
                onChange={(e) => setChecked(e.currentTarget.checked)}
                >
                Checked
                </ToggleButton>
            </ButtonGroup>
            <br />
            <ButtonGroup toggle>
                {radios.map((radio, idx) => (
                <ToggleButton
                    key={idx}
                    type="radio"
                    variant="secondary"
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                    {radio.name}
                </ToggleButton>
                ))}
            </ButtonGroup>

        </div>
        <br/>
        <Alert variant="info">
        The above handles styling, But requires manually controlling the checked state for each radio or checkbox in the group.
<br/>For a nicer experience with checked state management use the {"<ToggleButtonGroup>"} instead of a {"<ButtonGroup toggle>"} component. The group behaves as a form component, where the value is an array of the selected values for a named checkbox group or the single toggled value in a similarly named radio group.
        </Alert>        
        
        <br/>
       
        </>
    )
}


function Uncontrolled(){
    return(
        <>
        <h3>Uncontrolled</h3>
        <p></p>
        <div>
        <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
            <ToggleButton value={1}>Checkbox 1 (pre-checked)</ToggleButton>
            <ToggleButton value={2}>Checkbox 2</ToggleButton>
            <ToggleButton value={3}>Checkbox 3 (pre-checked)</ToggleButton>
        </ToggleButtonGroup>
        <br />
        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton value={1}>Radio 1 (pre-checked)</ToggleButton>
            <ToggleButton value={2}>Radio 2</ToggleButton>
            <ToggleButton value={3}>Radio 3</ToggleButton>
        </ToggleButtonGroup>            
        </div>
        <br/>
        
        </>
    )
}

function Controlled(){
    const [value, setValue] = useState([1, 3]);

    /*
     * The second argument that will be passed to
     * `handleChange` from `ToggleButtonGroup`
     * is the SyntheticEvent object, but we are
     * not using it in this example so we will omit it.
     */
    const handleChange = (val) => setValue(val);

    return(
        <>
        <h3>Controlled</h3>
        <p></p>
        <div>
            <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                <ToggleButton value={1}>Option 1</ToggleButton>
                <ToggleButton value={2}>Option 2</ToggleButton>
                <ToggleButton value={3}>Option 3</ToggleButton>
            </ToggleButtonGroup>
        </div>
        <br/>
        </>
    )
}

const Ex ={
    Buttons: Buttons,
    Outlines : Outlines,
    Tags : Tags,
    Sizes : Sizes,
    Actives : Actives,
    DisableState : DisableState,
    LoadingState : LoadingState,
    ToggleButton : ToggleButtonExample,
    Uncontrolled : Uncontrolled,
    Controlled : Controlled,


}

export default Ex ;
