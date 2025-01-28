import React from 'react'
import './App.css'
import SearchBar from './components/SearchBar'

function App() {


  return (
    <>
    <header className="header-container">
      <h1>Movie List</h1>
      <h2>Add movies to your watchlist and tracked the ones you have watched!</h2>
      </header>
    <SearchBar />

    </>
  )
}

export default App
