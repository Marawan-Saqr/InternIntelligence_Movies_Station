import React from 'react';
import './Watchlist.css';
import { Container } from 'react-bootstrap';
import { watchlistContext } from '../../Contexts/WatchList.jsx';
import { useContext } from 'react';

const Watchlist = () => {

  // Component States
  const { watch } = useContext(watchlistContext);


  return (
    <div>
      <Container>
        
      </Container>
    </div>
  )
}

export default Watchlist;