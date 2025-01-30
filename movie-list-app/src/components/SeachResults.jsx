import React, { useState, useEffect } from 'react'; 
import WatchlistButton from './WatchlistButton';
import SeenButton from './SeenButton';
import Watchlist from './Watchlist';

export default function SearchResults({movies}) {

    const imageUrl = 'https://image.tmdb.org/t/p/w200'
   
    //got watchlist working but need to figure out how to put it in it's own component
    const [watchlist, setWatchlist] = useState([])

    function handleAddToWatchlist(movie){
        setWatchlist((prev) => [...prev, movie])
        console.log(watchlist)
    }

    return (
        <div>
             <ul className='search-results-list'>
                {movies.map((movie) => <li key={movie.id}><img src={`${imageUrl}${movie.poster_path}`}></img>
                <div className="button-container">
                <WatchlistButton onClick={() => handleAddToWatchlist(movie)}/>
                <SeenButton />
                </div></li>)}
            </ul>

            <div className='watchList-container'>
            {watchlist.map((movie) => <li><img src={`${imageUrl}${movie.poster_path}`} /></li>)}
            </div>

        </div>
           
    )
}