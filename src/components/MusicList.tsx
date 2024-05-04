import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store";
import { MusicInterface } from "../interface/musicInterface";
import { MdDelete } from "react-icons/md";
import { GrEdit } from "react-icons/gr";

import {
  ButtonDiv,
  ButtonIcon,
  Delete,
  Edit,
  StyledTable,
  TableContainer
} from "../styles/Table.style";
import { StyledButton } from "../styles/Button.style";
import { useNavigate } from "react-router-dom";
import { closeErrorMessage, getMusicLoading, makeLoading } from "../redux/features/musicSlice";
import Loading from "./Loading";
import { toast } from "react-toastify";

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
    toast.info(errorMessage, {
      position: "top-center",
      autoClose: 1000,
    }); dispatch(closeErrorMessage())
  }

  if (loading) {
    return (
      <Loading />

    )
  }


  return (<>

    {musicList.length === 0 ?
      <div>

        <h1>No Data Here</h1>
      </div>
      :
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
                  <ButtonDiv>
                      <StyledButton bg="" onClick={() => handleEdit(row._id)}>Edit</StyledButton>
                  <StyledButton bg="#B74C4C" onClick={() => handleDelete(row._id)}>Delete</StyledButton>
                  </ButtonDiv>
                 
                  <ButtonIcon>
                    <Edit onClick={() => handleEdit(row._id)}><GrEdit /></Edit>
                    <Delete onClick={() => handleDelete(row._id)}> <MdDelete />
                    </Delete>

                  </ButtonIcon>
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>}</>
  );
};

export default MusicList;