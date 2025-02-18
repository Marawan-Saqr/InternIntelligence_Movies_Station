import './App.css';
import MovieContextProvider from './Contexts/MovieContext.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopLogo from './Components/Header/Top_logo/TopLogo.jsx';
import TopNav from './Components/Header/Top_nav/TopNav.jsx';
import Home from './Pages/Home/Home.jsx';
import Footer from './Components/Footer/Footer.jsx';


function App() {
  return (
    <MovieContextProvider>
      <BrowserRouter>
        <TopLogo />
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MovieContextProvider>
  );
}

export default App;
