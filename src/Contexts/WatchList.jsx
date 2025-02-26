import React from 'react';
import { createContext, useState } from 'react';
import Swal from 'sweetalert2';


export const watchlistContext = createContext();
const WatchListProvider = ({ children }) => {

  // Component States
  const savedItems = localStorage.getItem("Movies");
  const [watch, setWatch] = useState(savedItems ? JSON.parse(savedItems) : []);


  // Save To Localstorage Function
  const saveToLocalStorage = (item) => {
    localStorage.setItem("Movies", JSON.stringify(item));
  }


  // Add To Watchlist Function
  const addToWatchlist = (movie) => {
    const isMovieWatched = watch.some((item)=> item.id === movie.id);
    if (isMovieWatched) {
      Swal.fire({
        title: "Movie already added!",
        text: "This movie is already in your watched list.",
        icon: "info",
        confirmButtonText: "OK",
      })
    } else {
      const updateData = [...watch, movie];
      setWatch(updateData);
      saveToLocalStorage(updateData);
      Swal.fire({
        title: "Movie Added To Watched",
        icon: "success",
        draggable: true
      });
    }
  }


  // Function To Remove Movie From Watched
  const removeWatchedMovie = (id) => {
    Swal.fire({
      title: "Are you sure You Want To Remove The Movie?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const NewMovies = watch.filter((item)=> item.id !== id);
        setWatch(NewMovies);
        saveToLocalStorage(NewMovies);
        Swal.fire({
          title: "Deleted!",
          text: "Your Movie has been removed.",
          icon: "success"
        });
      }
    });
  }



  return (
    <watchlistContext.Provider value={{ watch, addToWatchlist, removeWatchedMovie }}>
      { children }
    </watchlistContext.Provider>
  )
}

export default WatchListProvider;
