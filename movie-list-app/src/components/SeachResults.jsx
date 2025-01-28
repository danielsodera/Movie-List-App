import React, { useState, useEffect } from 'react'; 
import WatchlistButton from './WatchlistButton';
import SeenButton from './SeenButton';

export default function SearchResults({movies}) {

    const imageUrl = 'https://image.tmdb.org/t/p/w200'
   


    return (
            <ul>
                {movies.map((movie) => <li key={movie.id}><img src={`${imageUrl}${movie.poster_path}`}></img>
                <div className="button-container">
                <WatchlistButton />
                <SeenButton />
                </div></li>)}
            </ul>
    )
}