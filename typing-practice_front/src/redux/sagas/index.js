import { put, takeEvery, delay } from 'redux-saga/effects';
import { sectionApi } from 'src/http/sectionAPI';
import { LOAD_SECTIONS_LOADING } from 'src/redux/actions/actionTypes/sectionsActionTypes';
import { LOAD_SECTION_LOADING } from 'src/redux/actions/actionTypes/sectionActionTypes';
import {
  loadSectionsSuccess,
  loadSectionsError
} from '../actions/actionCreators/sectionsActionCreators';
import {
  loadSectionSuccess,
  loadSectionError
} from '../actions/actionCreators/sectionActionCreators';

function* fetchSections() {
  try {
    yield delay(3000);
    const { data } = yield sectionApi.getSections();
    yield put(loadSectionsSuccess(data));
  } catch (error) {
    yield put(loadSectionsError(error));
  }
}

function* fetchSection({ id }) {
  try {
    yield delay(3000);
    const { data } = yield sectionApi.getSection(id);
    yield put(loadSectionSuccess(data));
  } catch (error) {
    yield put(loadSectionError(error));
  }
}

export default function* rootSaga() {
  yield takeEvery(LOAD_SECTIONS_LOADING, fetchSections);
  yield takeEvery(LOAD_SECTION_LOADING, fetchSection);
}
