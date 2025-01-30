import React, { useState, useEffect } from 'react'; 
import WatchlistButton from './WatchlistButton';
import Watchlist from './Watchlist';

export default function SearchResults({movies, handleAddToWatchlist}) {

    const imageUrl = 'https://image.tmdb.org/t/p/w200'
   
    //got watchlist working but need to figure out how to put it in it's own component

    return (
        <div>
             <ul className='search-results-list'>
                {movies.map((movie) => <li key={movie.id}><img src={`${imageUrl}${movie.poster_path}`}></img>
                <div className="button-container">
                <WatchlistButton onClick={() => handleAddToWatchlist(movie)}/>
                </div></li>)}
            </ul>

           

        </div>
           
    )
}