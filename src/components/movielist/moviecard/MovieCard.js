import React from 'react'
import { Button, Card } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


const MovieCard = ({movie,handleDelete}) => {
    return (
        <div>
            <Card style={{ width: '20rem' }}className='mx-3 my-3'>
  <Card.Img variant="top" src={movie.posterUrl} height ='300' />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
     {movie.description}
     <p>
     <ReactStars
    count={movie.rate}
    size={24}
    isHalf={true}
    Color="#ffd700"
  />
     </p>
     
    </Card.Text>
    <Link to={`/movies/${movie.id}`}><Button variant="primary" style={{color:"black"}}  >Watch</Button></Link> <br/> <br/>
    <Button variant="primary"  onClick={()=>handleDelete(movie.id) }>Delete</Button>
  </Card.Body>
</Card>
            
        </div>
    )
}

export default MovieCard
