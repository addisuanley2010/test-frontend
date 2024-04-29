

import { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MusicInterface } from '../interface/musicInterface';
import { RootState } from '../store';
import { addMusicToStore } from '../redux/features/inputSlice';
import { StyledButton } from '../styles/Form.style';
import { StyledForm, StyledInput } from '../styles/Form.style';
import { closeErrorMessage, makeLoading } from '../redux/features/musicSlice';
import Loading from './Loading';
import { toast } from 'react-toastify';



const CreateMusic = () => {



  const musicInput: MusicInterface = useSelector((state: RootState) => state.inputMusic);
  const loading: boolean = useSelector((state: RootState) => state.music.loading);
  const errorMessage: string = useSelector((state: RootState) => state.music.errorMessage);

  const dispatch = useDispatch();

  const handleChange = (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(addMusicToStore({ ...musicInput, [prop]: event.target.value }));
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();


    if (musicInput.album == '' || musicInput.title == '' || musicInput.artist == '' || musicInput.gener == '') {
      toast.warn("fill all the fields", {
        position: "top-center",
        autoClose: 1000,
      });
    } else {
      dispatch({ type: 'CREATE_MUSIC', ...musicInput })
      dispatch(makeLoading())
      // dispatch(createMusicLoading(musicInput))

      dispatch(
        addMusicToStore({
          _id: '',
          title: "",
          artist: "",
          album: "",
          gener: ""
        })
      );
    }
  };




  if (errorMessage !== '') {
    dispatch(closeErrorMessage())

    // alert(errorMessage)
    toast.info(errorMessage, {
      position: "top-center",
      autoClose: 1000,
    });
  }

  if (loading) {
    return (
      <Loading />

    )
  }

  return (<>
    <StyledForm onSubmit={handleSubmit}>
      <h2>Create Music</h2>

      <StyledInput
        type="text"
        value={musicInput.title}
        onChange={handleChange("title")}
        placeholder="title" />

      <StyledInput
        type="text"
        value={musicInput.artist}
        onChange={handleChange("artist")}
        placeholder="artist"
      />
      <StyledInput
        type="text"
        value={musicInput.album}
        onChange={handleChange("album")}
        placeholder="album"
      />
      <StyledInput
        type="text"
        value={musicInput.gener}
        onChange={handleChange("gener")}

        placeholder="gener"
      />

      <StyledButton type="submit">Create Music</StyledButton>
    </StyledForm>
  </>

  );
};




export default CreateMusic