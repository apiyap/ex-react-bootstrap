
import React  from 'react';



import {
    Card,
    Button,
    ListGroup,
    ListGroupItem,
    Nav,
    CardGroup,
    CardDeck,
    CardColumns,

} from 'react-bootstrap';


function Cards(){
    return(
        <>
        <h3>Cards</h3>
        <p>Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.</p>
        <br/>
        <h3>Basic Example</h3>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <br/>
        </>
    )
}

function ContentsType(){
    return(
        <>
        <h3>Content types</h3>
        <br/>
        <h5>Body</h5>
        <p>Use {"<Card.Body>"} to pad content inside a {"<Card>"}.</p>
        <div>
            <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
        </div>
        <br/>
        <p>Alternatively, you can use this shorthand version for Cards with body only, and no other children</p>
        <br/>
        <div>
            <Card body>This is some text within a card body.</Card>
        </div>
        <br/>
        </>
    )
}

function TitleTextLink(){
    return (
        <>
        <h3>Title, text, and links</h3>
        <p>Using {"<Card.Title>"},{" <Card.Subtitle>"}, and {"<Card.Text>"} inside the {"<Card.Body>"} will line them up nicely. {"<Card.Link>"}s are used to line up links next to each other.
<br/>{"<Card.Text>"} outputs {"<p>"} tags around the content, so you can use multiple {"<Card.Text>"}s to create separate paragraphs.</p>
        <div>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>

        </div>

        <br/>
        </>
    )
}

function ListGroups(){
    return(
        <>
        <h3>List Groups</h3>
        <p>Create lists of content in a card with a flush list group.</p>
        <div>
        <Card style={{ width: '18rem' }}>
            <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </Card>
        </div>
        <br/>
        <div>
        <Card style={{ width: '18rem' }}>
            <Card.Header>Featured</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </Card>
        </div>
        <br/>
        </>
    )
}


function KitchenSink(){
    return(
        <>
        <h3>Kitchen Sink</h3>
        <p></p>
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
        <br/>

        </>
    )
}


function HeaderFooter(){
    return(
        <>
        <h3>Header and Footer</h3>
        <p>You may add a header by adding a {"<Card.Header>"} component.</p>
        <div>
            <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
        <br/>
        <p>A {"<CardHeader>"} can be styled by passing a heading element through the{" <as>"} prop</p>
        <div>
            <Card>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
        <br/>
        <div>
            <Card>
                <Card.Header>Quote</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.{' '}
                    </p>
                    <footer className="blockquote-footer">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
        <br/>
        <div>
            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
        <br/>
        </>
    )
}


function Images(){
    return(
        <>
        <h3>Images</h3>
        <p>Cards include a few options for working with images. Choose from appending “image caps” at either end of a card, overlaying images with card content, or simply embedding the image in a card.</p>
        <h4>Image caps</h4>
        <p>Similar to headers and footers, cards can include top and bottom “image caps”—images at the top or bottom of a card.</p>
        <div>
        <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        <br />
        <Card>
            <Card.Body>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src="holder.js/100px180" />
        </Card>

        </div>

        <br/>
        </>
    )
}

function ImageOverlay(){
    return (
        <>
        <h3>Image Overlays</h3>
        <p>Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need additional styles or utilities.</p>
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src="holder.js/100px270" alt="Card image"  />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
        <br/>
        </>
    )
}

function Navigation(){
    return(
        <>
        <h3>Navigation</h3>
        <p>Add some navigation to a card’s header (or block) with React Bootstrap’s Nav components.</p>
        <div>
            <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#first">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#disabled" disabled>
                        Disabled
                        </Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>

        <br/>
        </>
    )
}

function CardStyles(){
    const all = [
        'Primary',
        'Secondary',
        'Success',
        'Danger',
        'Warning',
        'Info',
        'Light',
        'Dark',
      ].map((variant, idx) => (
        <Card
          bg={variant.toLowerCase()}
          key={idx}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>{variant} Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      ));

    return(
        <>
        <h3>Card Styles</h3>
        <h4>Background Color</h4>
        <p>You can change a card's appearance by changing their {"<bg>"}, and {"<text>"} props.</p>
        <div>
        {all}
        </div>


        <br/>
        </>
    )
}

function BorderColors(){
    return(
        <>
        <h3>Border Color</h3>
        <p></p>
        <div>
        <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        <br />

        <Card border="secondary" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Title>Secondary Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        <br />

        <Card border="success" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Title>Success Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        <br />

        <Card border="danger" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Title>Danger Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        <br />

        <Card border="warning" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Title>Warning Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        <br />

        <Card border="info" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Title>Info Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        <br />

        <Card border="dark" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Title>Dark Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        <br />

        <Card border="light" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Title>Light Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
        <br />
        </div>
        <br/>
        </>
    )
}

function CardLayouts(){
    return(
        <>
        <h3>Card layout</h3>
        <h4>Card Groups</h4>
        <div>
        <CardGroup>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            </CardGroup>
        </div>
        <br/>
        </>
    )
}

function CardDecks(){
    return(
        <>
        <h3>Card Deck</h3>
        <div>
        <CardDeck>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            </CardDeck>

        </div>

        <br/>
        </>
    )
}


function DemoCardColumns(){
    return (
        <>
        <h3>Card Columns</h3>
        <div>
        <CardColumns>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Card title that wraps to a new line</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="p-3">
                <blockquote className="blockquote mb-0 card-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                    erat a ante.
                </p>
                <footer className="blockquote-footer">
                    <small className="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                    </small>
                </footer>
                </blockquote>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card bg="primary" text="white" className="text-center p-3">
                <blockquote className="blockquote mb-0 card-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                    erat a ante.
                </p>
                <footer className="blockquote-footer">
                    <small className="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                    </small>
                </footer>
                </blockquote>
            </Card>
            <Card className="text-center">
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                <Card.Text>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img src="holder.js/100px160" />
            </Card>
            <Card className="text-right">
                <blockquote className="blockquote mb-0 card-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                    erat a ante.
                </p>
                <footer className="blockquote-footer">
                    <small className="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                    </small>
                </footer>
                </blockquote>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                <Card.Text>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
                </Card.Body>
            </Card>
            </CardColumns>
        </div>
        <br/>
        </>
    )
}


const Ex ={
    Cards: Cards,
    ContentsType: ContentsType,
    TitleTextLink: TitleTextLink,
    ListGroups : ListGroups,
    KitchenSink : KitchenSink,
    HeaderFooter : HeaderFooter,
    Images : Images,
    ImageOverlay : ImageOverlay,
    Navigation : Navigation,
    CardStyles : CardStyles,
    BorderColors : BorderColors,
    CardLayouts : CardLayouts,
    CardDecks : CardDecks,
    CardColumns : DemoCardColumns,


}

export default Ex ;
