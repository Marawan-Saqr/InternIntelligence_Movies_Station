import React from 'react';
import HomeCover from './Home_cover/HomeCover.jsx';
import NewMovies from './New_movies/NewMovies.jsx';
import WatchNow from './Watch_now/WatchNow.jsx';
import MarvelMovies from './Marvel_movies/MarvelMovies.jsx';
import UpcomingMovies from './Upcoming_movies/UpcomingMovies.jsx';
import Unlimited from './Unlimited/Unlimited.jsx';

const Home = () => {
  return (
    <div>
      <HomeCover />
      <NewMovies />
      <WatchNow />
      <MarvelMovies />
      <UpcomingMovies />
      <Unlimited />
    </div>
  )
}


export default Home;