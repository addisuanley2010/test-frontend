

import { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MusicInterface } from '../interface/musicInterface';
import { RootState } from '../store';
import { addMusicToStore } from '../redux/features/inputSlice';
import { StyledButton } from '../styles/Button.style';
import { StyledForm, StyledInput } from '../styles/Form.style';
import { createMusicLoading } from '../redux/features/musicSlice';



const CreateMusic = () => {



  const musicInput: MusicInterface = useSelector((state: RootState) => state.inputMusic);
  const loading: boolean = useSelector((state: RootState) => state.music.loading);

  const dispatch = useDispatch();

  const handleChange = (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(addMusicToStore({ ...musicInput, [prop]: event.target.value }));
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();


    if (musicInput.album == '' || musicInput.title == '' || musicInput.artist == '' || musicInput.gener == '') {
      alert('please fill all the fields')
    } else {
      // dispatch({ type: 'CREATE_MUSIC', ...musicInput })
            dispatch(createMusicLoading(musicInput))

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

if(loading){
  return(
    <div>
      <h1>Loading...</h1>
    </div>
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