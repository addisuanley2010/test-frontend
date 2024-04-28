import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store";
import { MusicInterface } from "../interface/musicInterface";
import {
  StyledTable,
  TableContainer
} from "../styles/Table.style";
import { StyledButton } from "../styles/Button.style";
import { useNavigate } from "react-router-dom";
import { closeErrorMessage, getMusicLoading, makeLoading } from "../redux/features/musicSlice";
import Loading from "./Loading";

const MusicList = () => {
  const navigate = useNavigate()
  const handleEdit = (id?: string) => {

    navigate(`/edit-music/${id}`)


  };
  const handleDelete = (id?: string) => {
    const confir: boolean = window.confirm('Are you sure?');
    if (confir) {
      dispatch({ type: 'DELETE', id })
      // dispatch(getMusicLoading())
      dispatch(makeLoading())


    };
  }


  const dispatch = useDispatch()
  const musicList: MusicInterface[] = useSelector((state: RootState) => state.music.musics);

  const loading: boolean = useSelector((state: RootState) => state.music.loading);

  const errorMessage: string = useSelector((state: RootState) => state.music.errorMessage);


  if (errorMessage !== '') {
    alert(errorMessage)
    dispatch(closeErrorMessage())
  }

  if (loading) {
    return (
      <Loading />

    )
  }


  return (
    <TableContainer>
      <StyledTable >
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {musicList.map((row, index) => (
            <tr key={row._id}>
              <td>{index + 1}</td>
              <td>{row.title}</td>
              <td>{row.artist}</td>
              <td>{row.album}</td>
              <td>{row.gener}</td>
              <td>
                <StyledButton bg="" onClick={() => handleEdit(row._id)}>Edit</StyledButton>
                <StyledButton bg="#B74C4C" onClick={() => handleDelete(row._id)}>Delete</StyledButton>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default MusicList;