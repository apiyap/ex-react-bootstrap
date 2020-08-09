import React  from 'react';
import logo from '../logo.svg';
import {
    ResponsiveEmbed,

} from 'react-bootstrap';

function DemoResponsiveEmbed(){

    return (
        <>
        <h3>Responsive Embed</h3>
        <p>
            Allow browsers to determine video or slideshow dimensions based on the width of their containing block by creating an intrinsic ratio that will properly scale on any device.
            <br/>You don't need to include frameborder="0" in your iframes.
            <br/>The aspect ratio is controlled via the aspectRatio prop.
        </p>
        <br/>
        <div style={{ width: 660, height: 'auto' }}>
        <ResponsiveEmbed aspectRatio="16by9">
            <embed type="image/svg+xml" src={logo} />
        </ResponsiveEmbed>
        </div>

        <br/>
        </>
    )
}

const Ex ={
    DemoResponsiveEmbed: DemoResponsiveEmbed,


}

export default Ex ;
