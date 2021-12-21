import {moviedata} from './components/Data';
import './App.css';
import { useState } from 'react';
import MovieList from './components/movielist/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './components/movielist/moviecard/addmovie/filter/Filter';

function App() {
  const [movies,setMovies] = useState(moviedata)
  const [title, setTitle] = useState('') 
  const [rate, seTRate] = useState(0) 
  const handleChange = (e) => {
    setTitle(e.target.value)
    
  }
  const ratingChanged = (rate) => {
   seTRate(rate)}
  
  return (
    <div className="App">
      <Filter handleChange={handleChange} title={title} ratingChanged={ratingChanged}/>
     <MovieList   movies={movies.filter (elt=> (elt.title.trim().toUpperCase().includes(title.toUpperCase().trim()))&&(elt.rate>=rate))}/> 
    </div>
  );
}

export default App;
