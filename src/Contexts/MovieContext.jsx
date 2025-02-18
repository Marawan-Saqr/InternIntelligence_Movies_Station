import React from 'react';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';



export const movieContext = createContext();
const MovieContextProvider = ({ children }) => {

  // Component States
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);


  // Get All Movies
  const getAllMovies = async () => {
    const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cc77dc99cfe3060cfe5410df352d4c7d&language=en");
    setMovies(response.data.results);
    setLoading(false);
  }


  useEffect(()=> {
    getAllMovies();
  }, [])


  return (
    <movieContext.Provider value={{ movies, loading }}>
      {children}
    </movieContext.Provider>
  )
}


export default MovieContextProvider;