import React, { useState, useEffect } from 'react'; 
import WatchlistButton from './WatchlistButton';
import Watchlist from './Watchlist';

export default function SearchResults({movies, handleAddToWatchlist}) {

    const imageUrl = 'https://image.tmdb.org/t/p/w200'
   


    return (
        <div>
             <ul className='search-results-list'>
                {movies.map((movie, index) => <li key={index}><img src={`${imageUrl}${movie.poster_path}`}></img>
                <div className="button-container">
                <WatchlistButton onClick={() => handleAddToWatchlist(movie)}/>
                </div></li>)}
            </ul>

           

        </div>
           
    )
}