import { call, put, takeEvery } from 'redux-saga/effects';
function* handleAddMusic() {


}
export function* watcMusicSaga() {
  yield takeEvery('CREATE_MUSIC', handleAddMusic);


}