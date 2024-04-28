

import { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MusicInterface } from '../interface/musicInterface';
import { RootState } from '../store';
import { addMusicToStore } from '../redux/features/inputSlice';
import { StyledButton } from '../styles/Button.style';
import { StyledForm, StyledInput } from '../styles/Form.style';
import { useNavigate, useParams } from 'react-router-dom';
import { closeErrorMessage, getMusicLoading, makeLoading } from '../redux/features/musicSlice';
import Loading from './Loading';



const UpdateMusic = () => {



  const musicInput: MusicInterface = useSelector((state: RootState) => state.inputMusic);
  const loading: boolean = useSelector((state: RootState) => state.music.loading);

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { id } = useParams()
  useEffect(() => {

    dispatch({ type: 'GET_SINGLE', id })




  }, [dispatch])







  const handleChange = (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(addMusicToStore({ ...musicInput, [prop]: event.target.value }));
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();


    if (musicInput.album == '' || musicInput.title == '' || musicInput.artist == '' || musicInput.gener == '') {
      alert('please fill all the fields')
    } else {
      dispatch({ type: 'UPDATE_MUSIC', ...musicInput })
      dispatch(makeLoading())

      // dispatch(getMusicLoading())

    }
  };

  const errorMessage: string = useSelector((state: RootState) => state.music.errorMessage);



  if (loading) {
    return (
      <Loading />

    )
  }

  if (errorMessage !== '') {
    alert(errorMessage)
    dispatch(closeErrorMessage())
    navigate('/')
  }


  
  return (<>
    <StyledForm onSubmit={handleSubmit}>
      <h2>Update Music</h2>

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

      <StyledButton type="submit">Update Music</StyledButton>
    </StyledForm>
  </>

  );
};




export default UpdateMusic