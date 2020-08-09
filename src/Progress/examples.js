import React  from 'react';
//import logo from '../logo.svg';
import {
    ProgressBar,

} from 'react-bootstrap';

function Progress(){
    return (
        <>
        <h3>Progress</h3>
        <p>Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.</p>
        <br/>
        <h3>Examples</h3>
        <p>Default progress bar.</p>
        <div>
            <ProgressBar now={60} />
        </div>

        <br/>
        </>
    )
}

function WithLabel(){
    const now = 60;

    return(
        <>
        <h3>With label</h3>
        <p>
        Add a label prop to show a visible percentage. For low percentages, consider adding a min-width to ensure the label's text is fully visible.
        </p>
        <div>
            <ProgressBar now={now} label={`${now}%`} />
        </div>
        <br/>
        </>
    )
}

function ScreenreaderOnlyLabel(){
    const now = 60;

const progressInstance = <ProgressBar now={now} label={`${now}%`} srOnly />;

    return(
        <>
        <h3>Screenreader only label</h3>
        <p>
        Add a <b>srOnly</b> prop to hide the label visually.
        </p>
        <div>
            {progressInstance}
        </div>
        <br/>
        </>
    )
}

function ContextualAlternatives(){
    return(
        <>
        <h3>Contextual alternatives</h3>
        <p>
        Progress bars use some of the same button and alert classes for consistent styles.
        </p>
        <div>
            <ProgressBar variant="success" now={40} />
            <ProgressBar variant="info" now={20} />
            <ProgressBar variant="warning" now={60} />
            <ProgressBar variant="danger" now={80} />
        </div>
        <br/>
        </>
    )
}
function Stripeds(){
    return(
        <>
        <h3>Striped</h3>
        <p>
        Uses a gradient to create a striped effect. Not available in IE8.
        </p>
        <div>
            <ProgressBar striped variant="success" now={40} />
            <ProgressBar striped variant="info" now={20} />
            <ProgressBar striped variant="warning" now={60} />
            <ProgressBar striped variant="danger" now={80} />
        </div>
        <br/>
        </>
    )

}

function Animated(){
    return(
        <>
        <h3>Animated</h3>
        <p>
        Add animated prop to animate the stripes right to left. Not available in IE9 and below.
        </p>
        <div>
        <ProgressBar animated now={45} />
        </div>
        <br/>
        </>
    )
}

function Stacked(){
    return(
        <>
        <h3>Stacked</h3>
        <p>
        Nest <b> {"<ProgressBar />"}s </b>to stack them.
        </p>
        <div>
        <ProgressBar>
            <ProgressBar striped variant="success" now={35} key={1} />
            <ProgressBar variant="warning" now={20} key={2} />
            <ProgressBar striped variant="danger" now={10} key={3} />
        </ProgressBar>
        </div>
        <br/>
        </>
    )
}

const Ex ={
    Progress: Progress,
    WithLabel : WithLabel,
    ScreenreaderOnlyLabel : ScreenreaderOnlyLabel,
    ContextualAlternatives : ContextualAlternatives,
    Stripeds : Stripeds,
    Animated : Animated,
    Stacked : Stacked,

}

export default Ex ;
