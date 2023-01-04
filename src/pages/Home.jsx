import React from 'react';
import CoinSearchBar from '../components/CoinSearchBar';
import Trending from '../components/Trending';

const Home = ({coins}) => {
  return (
    <div>
        <CoinSearchBar coins={coins}/>
        <Trending />
    </div>
  );
}

export default Home;