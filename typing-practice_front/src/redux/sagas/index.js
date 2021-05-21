import { put, takeEvery } from 'redux-saga/effects';
import { sectionApi } from 'src/http/sectionAPI';
import { LOAD_SECTIONS_LOADING } from 'src/redux/actions/actionTypes/sectionsActionTypes';
import {
  CREATE_SECTION_LOADING,
  DELETE_SECTION_LOADING,
  EDIT_SECTION_LOADING,
  LOAD_SECTION_LOADING
} from 'src/redux/actions/actionTypes/sectionActionTypes';
import { userApi } from 'src/http/userAPI';
import { lessonApi } from 'src/http/lessonAPI';
import {
  loadSectionsSuccess,
  loadSectionsError
} from '../actions/actionCreators/sectionsActionCreators';
import {
  loadSectionSuccess,
  loadSectionError,
  createSectionError,
  createSectionSuccess,
  editSectionError,
  editSectionSuccess,
  deleteSectionSuccess,
  deleteSectionError
} from '../actions/actionCreators/sectionActionCreators';
import {
  userCheckError,
  userCheckSuccess,
  userLoginError,
  userLoginSuccess,
  userRegistrationError,
  userRegistrationSuccess
} from '../actions/actionCreators/userActionCreators';
import {
  USER_CHECK_LOADING,
  USER_LOGIN_LOADING,
  USER_REGISTRATION_LOADING
} from '../actions/actionTypes/userActionTypes';
import {
  loadLessonError,
  loadLessonSuccess
} from '../actions/actionCreators/lessonActionCreators';
import { LOAD_LESSON_LOADING } from '../actions/actionTypes/lessonActionTypes';

function* fetchSections() {
  try {
    const { data } = yield sectionApi.getSections();
    yield put(loadSectionsSuccess(data));
  } catch (error) {
    yield put(loadSectionsError(error));
  }
}

function* fetchSection({ id }) {
  try {
    const { data } = yield sectionApi.getSection(id);
    yield put(loadSectionSuccess(data));
  } catch (error) {
    yield put(loadSectionError(error));
  }
}

function* fetchCreateSection({ sectionData }) {
  try {
    const { data } = yield sectionApi.createSection(sectionData);
    yield put(createSectionSuccess(data));
  } catch (error) {
    yield put(createSectionError(error));
  }
}

function* fetchDeleteSection({ id }) {
  try {
    yield sectionApi.deleteSection(id);
    yield put(deleteSectionSuccess());
  } catch (error) {
    yield put(deleteSectionError(error));
  }
}

function* fetchEditSection({ sectionData }) {
  try {
    const { data } = yield sectionApi.editSection(sectionData);
    yield put(editSectionSuccess(data));
  } catch (error) {
    yield put(editSectionError(error));
  }
}

function* fetchLesson({ id }) {
  try {
    const { data } = yield lessonApi.getLesson(id);
    yield put(loadLessonSuccess(data));
  } catch (error) {
    yield put(loadLessonError(error));
  }
}

function* fetchUserRegistration({ user }) {
  try {
    const data = yield userApi.registration(user);
    yield put(userRegistrationSuccess(data));
  } catch (error) {
    yield put(userRegistrationError(error));
  }
}

function* fetchUserLogin({ user }) {
  try {
    const data = yield userApi.login(user);
    yield put(userLoginSuccess(data));
  } catch (error) {
    yield put(userLoginError(error));
  }
}

function* fetchUserCheck() {
  try {
    const data = yield userApi.check();
    yield put(userCheckSuccess(data));
  } catch (error) {
    yield put(userCheckError(error));
  }
}

export default function* rootSaga() {
  yield takeEvery(LOAD_SECTIONS_LOADING, fetchSections);
  yield takeEvery(LOAD_SECTION_LOADING, fetchSection);
  yield takeEvery(LOAD_LESSON_LOADING, fetchLesson);
  yield takeEvery(USER_REGISTRATION_LOADING, fetchUserRegistration);
  yield takeEvery(USER_LOGIN_LOADING, fetchUserLogin);
  yield takeEvery(USER_CHECK_LOADING, fetchUserCheck);
  yield takeEvery(CREATE_SECTION_LOADING, fetchCreateSection);
  yield takeEvery(EDIT_SECTION_LOADING, fetchEditSection);
  yield takeEvery(DELETE_SECTION_LOADING, fetchDeleteSection);
}
