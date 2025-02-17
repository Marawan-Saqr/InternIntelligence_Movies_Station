import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopLogo from './Components/Header/Top_logo/TopLogo.jsx';
import TopNav from './Components/Header/Top_nav/TopNav.jsx';

function App() {
  return (
    <BrowserRouter>
      <TopLogo />
      <TopNav />
      <Routes>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
