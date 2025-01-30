import React from "react";
import SeenButton from './SeenButton';


export default function Watchlist({watchlist, handleRemoveFromWatchlist}){

  const imageUrl = 'https://image.tmdb.org/t/p/w200'


 


    return (
        <div className='watchList-array-container'>
            {watchlist.map((movie) => <li key={movie.id}><img src={`${imageUrl}${movie.poster_path}`} />
            <div className='button-container'>
             <SeenButton onClick={() => handleRemoveFromWatchlist(movie)}/> </div>
             </li>)}
            </div>
           

        
    )
}