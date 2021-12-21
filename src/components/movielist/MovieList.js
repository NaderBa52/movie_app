import React from 'react'
import MovieCard from './moviecard/MovieCard'

const MovieList = ({movies,handleDelete}) => {
    return (
        <div className='container'>
         <div className='row ml-4'>
         { movies.map (movie => <MovieCard key={movie.id} movie={movie} handleDelete={handleDelete}/>)}
         </div>
        </div>
    )
}

export default MovieList
