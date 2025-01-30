import React, {useState, useEffect} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SeachResults';
const tmdbKey = '2add80205a34117439e456a51c8b07f2';
const tmdbBaseUrl ='https://api.themoviedb.org/3'
const tmdbReadAccessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYWRkODAyMDVhMzQxMTc0MzllNDU2YTUxYzhiMDdmMiIsIm5iZiI6MTczNTc1OTEyMS41NDgsInN1YiI6IjY3NzU5NTExNDExMTU5OWUzODEyZTc0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uRqRrmRzXCuMosrX13p3urdQ_P-Efpnw0nmhOATtZl0'

function App() {

  
   //Search state
  const [searchTerm, setSearchTerm] = useState("Batman");
  const [movies, setMovies] = useState([])

    function handleSearch(e){
    setSearchTerm(e.target.value)
  }

    //Search API 
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${tmdbReadAccessToken}`
      }
    };
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => {
        return setMovies(res.results)})
      .catch(err => console.error(err));
    }, [searchTerm])
    
    /* Next steps
    - Add a section for seen
    - handleAddToWatchlist()
    - handleAddToSeen()
    - handleRemoveFromWatchlist()
    - handleRemoveFromSeen()
    */


  return (
    <div className="outer-container">
    <header className="header-container">
      <h1>Movie List</h1>
      <h2>Add movies to your watchlist and tracked the ones you have seen!</h2>
      </header>

      <div className="search-bar-container">
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      </div>

    <div className="search-results-container">
    <SearchResults movies={movies}/> 
    </div>

    <div className='watchlist-container'>
      <h2>Watchlist</h2>
    </div>
    </div>
  )
}

export default App
