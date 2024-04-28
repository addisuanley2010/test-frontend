import { useState } from 'react';
import { Circle, StatisticItem, StatisticLabel, StatisticsContainer } from '../styles/Statistics.style';
import MusicList from './MusicList';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { StatInterface } from '../interface/musicInterface';
const Statistics = () => {
  const [num, setNum] = useState<number>(0);

  const statValue: StatInterface = useSelector((state: RootState) => state.stat);


  return (
    <>
      <StatisticsContainer>
        <StatisticItem onClick={() => { setNum(0) }}>
          <Circle>{statValue.totalMusic}</Circle>
          <StatisticLabel>Total Music</StatisticLabel>
        </StatisticItem>
        <StatisticItem onClick={() => { setNum(1) }}>
          <Circle>{statValue.totalArtists}</Circle>
          <StatisticLabel>Total Artist</StatisticLabel>
        </StatisticItem>
        <StatisticItem onClick={() => { setNum(2) }}>
          <Circle>{statValue.totalAlbums}</Circle>
          <StatisticLabel>Total Album</StatisticLabel>
        </StatisticItem>
        <StatisticItem onClick={() => { setNum(3) }}>
          <Circle>{statValue.totalGenres}</Circle>
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