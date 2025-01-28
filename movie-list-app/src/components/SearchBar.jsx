import React, {useState} from "react";


export default function SearchBar({searchTerm, handleSearch}){

  



    return (
         <input type="text" onChange={(e) => handleSearch(e)} placeholder="Search for a movie!" value={searchTerm} />
    )
       

    
}