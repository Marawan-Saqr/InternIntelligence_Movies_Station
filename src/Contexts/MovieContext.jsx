import React from 'react';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';



export const movieContext = createContext();
const MovieContextProvider = ({ children }) => {

  // Component States
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [marvel, setMarvel] = useState([]);
  const [loading, setLoading] = useState(true);


  // Get All Movies
  const getAllMovies = async () => {
    const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cc77dc99cfe3060cfe5410df352d4c7d&language=en");
    setMovies(response.data.results);
    setLoading(false);
  }


  // Get All TV Shows
  const getAllShows = async () => {
    const response = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=cc77dc99cfe3060cfe5410df352d4c7d&language=en");
    setShows(response.data.results);
    setLoading(false);
  }


  // Get All Marvel Movies
  const getAllMarvelMovies = async () => {
    const response = await axios.get("https://api.themoviedb.org/3/company/420/movies?api_key=cc77dc99cfe3060cfe5410df352d4c7d&language=en");
    setMarvel(response.data.results);
    setLoading(false);
  }


  // UseEffect
  useEffect(()=> {
    getAllMovies();
    getAllShows();
    getAllMarvelMovies();
  }, [])


  return (
    <movieContext.Provider value={{ movies, shows, marvel, loading }}>
      {children}
    </movieContext.Provider>
  )
}


export default MovieContextProvider;