import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';

function Postcard(props){

    return(
        <Col className='card' style={{ marginLeft:"15px" }}>
    <img className="card-img-top" style={{width: "410px", height:"300px"}} src={props.image} alt=""/>
    <div className="card-body">
    <h5 className="card-title"> Title is {props.title}</h5>
    <p className="card-text">Handle is {props.handle} </p>
  </div>
        </Col>
    );
}
export default Postcard;