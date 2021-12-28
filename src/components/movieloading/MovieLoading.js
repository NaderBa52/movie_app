import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const MovieLoading = ({match,movies}) => {
    const movie= movies.find(elt=> elt.id == match.params.id)
    return (
        <div>
            <h2 > {movie.title} </h2>
            <img src={movie.posterUrl} alt="" height="300" width="500" />
            <iframe width="653" height="380" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Link to="/"><Button variant="primary"  style={{color:"bleu"}} >Back </Button></Link>
        </div>
    )
}

export default MovieLoading
