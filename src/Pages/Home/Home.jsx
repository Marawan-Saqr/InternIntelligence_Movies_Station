import React from 'react';
import HomeCover from '../../Components/Home_cover/HomeCover.jsx';
import NewMovies from '../../Components/New_movies/NewMovies.jsx';
import WatchNow from '../../Components/Watch_now/WatchNow.jsx';
import LatestShow from '../../Components/Latest_shows/LatestShow.jsx';
import MarvelMovies from '../../Components/Marvel_movies/MarvelMovies.jsx';

const Home = () => {
  return (
    <div>
      <HomeCover />
      <NewMovies />
      <WatchNow />
      <LatestShow />
      <MarvelMovies />
    </div>
  )
}


export default Home;