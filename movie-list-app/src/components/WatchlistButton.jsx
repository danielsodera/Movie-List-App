import React, {useState} from "react";

export default function WatchlistButton({onClick}){

   

    return (

            <button className="watchlist-button" onClick={onClick}>Add to Watchlist</button>
    )
}