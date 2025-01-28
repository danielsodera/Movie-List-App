import React, { useState, useEffect } from 'react'; 

export default function SearchResults({movies}) {

    const imageUrl = 'https://image.tmdb.org/t/p/w200'
   


    return (
        <div className="search-results-container">
            <ul>
                {movies.map((movie) => <li key={movie.id}><img src={`${imageUrl}${movie.poster_path}`}></img></li>)}
            </ul>




        </div>
    )
}