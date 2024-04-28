import { call, put, takeEvery } from 'redux-saga/effects';
import { api } from '../../api';
import { addMusic, closeLoading, deleteMusic, getMusic, getMusicLoading } from '../features/musicSlice';
import axios from 'axios';
import { addMusicToStore } from '../features/inputSlice';
import { MusicInterface } from '../../interface/musicInterface';
import { getStat } from '../features/statSlice';


interface myType { type: string, _id?: string, title: string, artist: string, album: string, gener: string }

type CallReturnType = ReturnType<typeof axios.post>;
interface mytype {
  type: string,
  id: string
}


// ...................GET ALL MUSIC...............................

function* handleGetMusic() {

  const { data } = yield call(axios.get, `${api}/get`)
  yield put(getMusic(data))

}
// ...................DELETE MUSIC...............................

function* handleDeleteTodoSaga(action: mytype) {

  try {

    const { data } = yield call(axios.delete, `${api}/delete/${action.id}`)
    const id: string = data._id
    yield put(deleteMusic(id));
    yield getStatics()
    yield put(closeLoading('successfully deleted thank you'))

  } catch (error) {
    console.log(error)
    yield put(closeLoading('delete failed. try again later!'))
  }


}
// ...................ADD MUSIC...............................
// function* handleAddMusic(action: PayloadAction<MusicInterface>) {
function* handleAddMusic(action: myType) {

  // const { title, album, gener, artist } = action.payload;
  const { title, album, gener, artist } = action;

  try {


    const response: CallReturnType = yield call(axios.post, `${api}/create`, { title, album, gener, artist });
    const { data } = yield response
    const { newPost } = yield data
    yield put(addMusic(newPost));
    yield getStatics()

    yield put(closeLoading('successfully create music thank you'))


  } catch (error) {
    yield put(closeLoading('you are not create the music'))
  }
}// ...................GET SINGLE MUSIC...............................

function* handleSingle(action: mytype) {
  const { data } = yield call(axios.get, `${api}/get/${action.id}`)
  yield put(addMusicToStore(data))

}

// ...................UPDATE MUSIC...............................
function* handleEditMusic(action: myType) {
  const { _id, title, album, gener, artist } = action;
  try {


    yield call(axios.put, `${api}/update/${_id}`, { title, album, gener, artist });
    yield put(closeLoading('successfully create music thank you'))
    yield getStatics()


  } catch (error) {
    yield put(closeLoading('music not updated'))
  }
}


// ...................GET STATISTICS...............................
function* getStatics() {

  const { data } = yield call(axios.get, `${api}/getStatistics`)
  console.log(data)
  const { totalAlbums, totalArtists, totalGenres, totalMusic } = yield data
  yield put(getStat({ totalAlbums, totalArtists, totalGenres, totalMusic }))
}


// ....................................... END OF SAGA ...................................
export function* watcMusicSaga() {
  yield takeEvery(getMusicLoading, handleGetMusic);
  yield takeEvery('DELETE', handleDeleteTodoSaga);
  yield takeEvery('CREATE_MUSIC', handleAddMusic);
  yield takeEvery('GET_SINGLE', handleSingle);
  yield takeEvery('UPDATE_MUSIC', handleEditMusic);
  yield takeEvery('GET_STATISTICS', getStatics);

  // yield takeEvery(createMusicLoading, handleAddMusic);


}