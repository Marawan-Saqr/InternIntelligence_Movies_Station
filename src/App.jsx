import "./App.css";
import WatchListProvider from "./Contexts/WatchList.jsx";
import MovieContextProvider from "./Contexts/MovieContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopLogo from "./Components/Header/Top_logo/TopLogo.jsx";
import TopNav from "./Components/Header/Top_nav/TopNav.jsx";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import MoviesPage from "./Pages/Movies_page/MoviesPage.jsx";
import Movies from "./Pages/Movies_page/Movies/Movies.jsx";
import ArtworkDetails from "./Pages/Artwork_details/ArtworkDetails.jsx";
import TVShowPage from "./Pages/TV_show_page/TVShowPage.jsx";
import TVShows from "./Pages/TV_show_page/TV_shows/TVShows.jsx";
import Watchlist from "./Components/Watchlist/Watchlist.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <WatchListProvider>
      <MovieContextProvider>
        <BrowserRouter>
          <TopLogo />
          <TopNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/movies-page" element={<MoviesPage />}>
              <Route index element={<Movies />} />
              <Route path="movies" element={<Movies />} />
              <Route
                path="artwork-details/:ARTWORKID"
                element={<ArtworkDetails />}
              />
            </Route>
            <Route path="/tv-show-page" element={<TVShowPage />}>
              <Route index element={<TVShows />} />
              <Route path="tv-show" element={<TVShows />} />
              <Route
                path="artwork-details/:ARTWORKID"
                element={<ArtworkDetails />}
              />
            </Route>
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MovieContextProvider>
    </WatchListProvider>
  );
}

export default App;
