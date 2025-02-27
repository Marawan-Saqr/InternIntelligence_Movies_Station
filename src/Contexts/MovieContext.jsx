import React from 'react';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';



export const movieContext = createContext();
const MovieContextProvider = ({ children }) => {

  // Component States
  const [movies, setMovies] = useState([]);
  const [marvel, setMarvel] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState(null);
  const [related, setRelated] = useState([]);
  const [actors, setActors] = useState([]);


  // Get All Movies
  const getAllMovies = async () => {
    const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cc77dc99cfe3060cfe5410df352d4c7d&language=en");
    setMovies(response.data.results);
    setLoading(false);
  }


  // Get All Marvel Movies
  const getAllMarvelMovies = async () => {
    const response = await axios.get("https://api.themoviedb.org/3/company/420/movies?api_key=cc77dc99cfe3060cfe5410df352d4c7d&language=en");
    setMarvel(response.data.results);
    setLoading(false);
  }


  // Get All Upcoming Movies
  const getAllUpcomingMovies = async () => {
    const response = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=cc77dc99cfe3060cfe5410df352d4c7d&language=en");
    setUpcoming(response.data.results);
    setLoading(false);
  }


  // Pagination Function For Movies
  const getPage = async (page) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=cc77dc99cfe3060cfe5410df352d4c7d&language=en&page=${page}`);
    setMovies(response.data.results);
    setLoading(false);
  }


  // Get Movie Details By ID
  const getMovieDetails = async (movieID) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=cc77dc99cfe3060cfe5410df352d4c7d&language=en`);
    setDetails(response.data);
    setLoading(false);
  }


  // Get Related Movies By ID
  const getRelatedMovies = async (movieID) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=cc77dc99cfe3060cfe5410df352d4c7d&language=en`);
    setRelated(response.data.results);
    setLoading(false);
  }


  // Get Actors Of Movies By ID
  const getActors = async (movieID) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=cc77dc99cfe3060cfe5410df352d4c7d&language=en`);
    setActors(response.data.cast);
    setLoading(false);
  }


  // UseEffect
  useEffect(()=> {
    getAllMovies();
    getAllMarvelMovies();
    getAllUpcomingMovies();
  }, [])


  return (
    <movieContext.Provider value={{ movies, marvel, upcoming, loading, getPage, details, related, getRelatedMovies, getMovieDetails, actors, getActors }}>
      {children}
    </movieContext.Provider>
  )
}


export default MovieContextProvider;