import React from 'react'
import { Button, Card } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";

const MovieCard = ({movie}) => {
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
    <Button variant="primary">Watch</Button>
  </Card.Body>
</Card>
            
        </div>
    )
}

export default MovieCard
