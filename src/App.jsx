import './App.css';
import MovieContextProvider from './Contexts/MovieContext.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopLogo from './Components/Header/Top_logo/TopLogo.jsx';
import TopNav from './Components/Header/Top_nav/TopNav.jsx';
import Home from './Pages/Home/Home.jsx';
import MoviesPage from './Pages/Movies_page/MoviesPage.jsx';
import Movies from './Components/Movies/Movies.jsx';
import Footer from './Components/Footer/Footer.jsx';


function App() {
  return (
    <MovieContextProvider>
      <BrowserRouter>
        <TopLogo />
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies-page" element={<MoviesPage />}>
            <Route index element={<Movies />} />
            <Route path="movies" element={<Movies />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </MovieContextProvider>
  );
}

export default App;
