import React  from 'react';
//import logo from '../logo.svg';
import {
    Pagination,

} from 'react-bootstrap';

function Paginations(){
    let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}


    return (
        <>
        <h3>Pagination</h3>
        <p>A set of presentational components for building pagination UI.</p>
        <br/>
        <div>
        <Pagination>{items}</Pagination>
        <br />

        <Pagination size="lg">{items}</Pagination>
        <br />

        <Pagination size="sm">{items}</Pagination>
        </div>

        <br/>
        </>
    )
}

function MoreOptions(){
    return(
        <>
        <h3>More options</h3>
        <p>
        For building more complex pagination UI, there are few convenient sub-components for adding "First", "Previous", "Next", and "Last" buttons, as well as an Ellipsis item for indicating previous or continuing results.
        </p>
        <div>
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </div>
        <br/>
        </>
    )
}
const Ex ={
    Pagination: Paginations,
    MoreOptions : MoreOptions,
    

}

export default Ex ;
