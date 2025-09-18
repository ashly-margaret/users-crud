import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "../slices/userSlice";
import { fetchUserDetailsApi } from "@/app/api/user";

export function* fetchUsersSaga(): Generator<any, void, any> {
  try {
    const response: any = yield call(fetchUserDetailsApi);
    yield put(fetchUsersSuccess(response.data));
  } catch (error: any) {
    yield put(fetchUsersFailure(error.message));
  }
}


export default function* userSaga() {
  yield takeLatest(fetchUsersRequest.type, fetchUsersSaga);
}
