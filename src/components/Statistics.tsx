import { useState } from 'react';
import { Circle, StatisticItem, StatisticLabel, StatisticsContainer } from '../styles/Statistics.style';
import MusicList from './MusicList';
const Statistics = ({ totalMusic = 12, totalArtist = 12, totalAlbum = 12, totalGenre = 12 }) => {
  const [num, setNum] = useState<number>(0);



  return (
    <>
      <StatisticsContainer>
        <StatisticItem onClick={() => { setNum(0) }}>
          <Circle>{totalMusic}</Circle>
          <StatisticLabel>Total Music</StatisticLabel>
        </StatisticItem>
        <StatisticItem onClick={() => { setNum(1) }}>
          <Circle>{totalArtist}</Circle>
          <StatisticLabel>Total Artist</StatisticLabel>
        </StatisticItem>
        <StatisticItem onClick={() => { setNum(2) }}>
          <Circle>{totalAlbum}</Circle>
          <StatisticLabel>Total Album</StatisticLabel>
        </StatisticItem>
        <StatisticItem onClick={() => { setNum(3) }}>
          <Circle>{totalGenre}</Circle>
          <StatisticLabel>Total Genre</StatisticLabel>
        </StatisticItem>
      </StatisticsContainer>
      <hr />

      {num == 0 && <MusicList />}
      {num == 1 && <div>this is for artist</div>}
      {num == 2 && <div>this is for album</div>}
      {num == 3 && <div>this is for gener</div>}

    </>

  );
};


export default Statistics