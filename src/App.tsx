import { useEffect } from "react";
import { getMusicLoading } from "./redux/features/musicSlice";
import { useDispatch } from "react-redux";
import { MusicInterface } from "./interface/musicInterface";
import MusicList from "./components/MusicList";


function App() {
 const makeNullInput: MusicInterface = {
    _id: '',
    title: '',
    artist: '',
    album: '',
    gener: ''
  }

  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(getMusicLoading())

    // dispatch(addMusicYes(makeNullInput))
  }, [dispatch])

  return (
    <div className="App">
      <MusicList/>
    </div>
  );
}

export default App;
