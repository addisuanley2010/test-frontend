import { useState } from 'react';
import { Circle, StatisticItem, StatisticLabel, StatisticsContainer } from '../styles/Statistics.style';
import MusicList from './MusicList';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { StatInterface } from '../interface/musicInterface';
import Artists from './Artists';
import Albums from './Albums';
import Geners from './Geners';
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
      {num == 1 && <Artists />}
      {num == 2 && <Albums />}
      {num == 3 && <Geners />}

    </>

  );
};


export default Statistics