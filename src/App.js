import {moviedata} from './components/Data';
import './App.css';
import { useState } from 'react';
import MovieList from './components/movielist/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './components/movielist/moviecard/addmovie/filter/Filter';
import AddMovie from './components/movielist/moviecard/addmovie/AddMovie';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import MovieLoading from './components/movieloading/MovieLoading';



function App() {
  const [movies,setMovies] = useState(moviedata)
  const [title, setTitle] = useState('') 
  const [rate, seTRate] = useState(0) 
  const handleChange = (e) => {
    setTitle(e.target.value)
    
  }
  const handleAdd = (newMovie) => {
    setMovies([...movies,newMovie])
    
  }
  const handleDelete =(idMovie) =>{
    setMovies(movies.filter((el) => el.id !== idMovie))
  }
  
  const ratingChanged = (rate) => {
   seTRate(rate)}
  
  return (
    <div className="App">
       <Router>

<Switch>
<Route exact path="/">
      
        <Filter handleChange={handleChange} title={title} ratingChanged={ratingChanged}/>
     <MovieList handleDelete={handleDelete}  movies={movies.filter (elt=> (elt.title.trim().toUpperCase().includes(title.toUpperCase().trim()))&&(elt.rate>=rate))}/> 
    <AddMovie handleAdd={handleAdd}/>
    </Route>
    <Route path="/movies/:id"  render={(props)=> <MovieLoading {...props} movies={movies}/>}/>
    </Switch>
    </Router>
    
    </div>

  );
}

export default App;
