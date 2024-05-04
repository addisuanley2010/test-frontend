import { useState } from 'react';
import { Circle, Icon, StatisticItem, StatisticLabel, StatisticsContainer, Text } from '../styles/Statistics.style';
import MusicList from './MusicList';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { StatInterface } from '../interface/musicInterface';
import Artists from './Artists';
import Albums from './Albums';
import Geners from './Geners';
import { GiLoveSong } from "react-icons/gi";
import { RiAlbumFill } from "react-icons/ri";
import { MdGeneratingTokens } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";

const Statistics = () => {
  const [num, setNum] = useState<number>(0);

  const statValue: StatInterface = useSelector((state: RootState) => state.stat);


  return (
    <>
      <StatisticsContainer>
        <StatisticItem onClick={() => { setNum(0) }}>
          <Circle><Icon><GiLoveSong /></Icon><Text>{statValue.totalMusic}</Text></Circle>
          <StatisticLabel>Total Music</StatisticLabel>
        </StatisticItem>
        <StatisticItem onClick={() => { setNum(1) }}>
          <Circle><Icon><IoIosPeople /></Icon><Text>{statValue.totalArtists}</Text></Circle>
          <StatisticLabel>Total Artist</StatisticLabel>
        </StatisticItem>
        <StatisticItem onClick={() => { setNum(2) }}>
          <Circle><Icon><RiAlbumFill /></Icon><Text>{statValue.totalAlbums}</Text></Circle>
          <StatisticLabel>Total Album</StatisticLabel>
        </StatisticItem>
        <StatisticItem onClick={() => { setNum(3) }}>
          <Circle><Icon><MdGeneratingTokens /></Icon><Text>{statValue.totalGenres}</Text></Circle>
          <StatisticLabel>Total Genre</StatisticLabel>
        </StatisticItem>
      </StatisticsContainer >
      <hr />

      {num == 0 && <MusicList />}
      {num == 1 && <Artists />}
      {num == 2 && <Albums />}
      {num == 3 && <Geners />}

    </>

  );
};


export default Statistics