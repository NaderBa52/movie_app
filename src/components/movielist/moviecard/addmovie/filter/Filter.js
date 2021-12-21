import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Button, Form, FormControl, Navbar } from 'react-bootstrap'

const Filter = ({handleChange,title,ratingChanged}) => {
   
    return (
        <div>
     <Navbar bg="light" expand="lg" className='d-flex justify-content-around'>
  
    <Navbar.Brand href="#">Netflix</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    
    <div>
    <div>  <Form className="d-flex" onChange={handleChange} value={title}>
        <FormControl 
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          
        />
      
      </Form></div>
 <div>      <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    isHalf={true}
    Color="#ffd700"
  /></div>
    </div>
    </Navbar.Collapse>
 
</Navbar>
            
        </div>
    )
}

export default Filter
