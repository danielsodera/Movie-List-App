import React, {useState} from "react";


export default function SearchBar({searchTerm, handleSearch}){

  



    return (
        <div className="search-bar-container">

        <input type="text" onChange={(e) => handleSearch(e)} placeholder="Search for a movie!" value={searchTerm} />




        </div>
    )
       

    
}