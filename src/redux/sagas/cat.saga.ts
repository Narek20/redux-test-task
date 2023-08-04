import { takeEvery, put } from 'redux-saga/effects'
import { getAllCats } from 'services/cats.service'

async function* workerGetCats() {
  const data = await getAllCats()

}

function* catSaga() {
  yield takeEvery('catsReducer/fetch', workerGetCats)
}
