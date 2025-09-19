import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "../slices/userSlice";
import { fetchAddUserDetailsApi, fetchUserDetailsApi } from "@/app/api/user";
import { fetchAddUsersFailure, fetchAddUsersRequest, fetchAddUsersSuccess } from "../slices/addUserSlice";

export function* fetchUsersSaga(): Generator<any, void, any> {
  try {
    const response: any = yield call(fetchUserDetailsApi);
    yield put(fetchUsersSuccess(response.data));
  } catch (error: any) {
    yield put(fetchUsersFailure(error.message));
  }
}

export function* fetchAddUsersSaga(action: ReturnType<typeof fetchAddUsersRequest>): Generator<any, void, any> {
  try {
    const response: any = yield call(fetchAddUserDetailsApi, action.payload); // ✅ pass data here
    yield put(fetchAddUsersSuccess(response));
  } catch (error: any) {
    yield put(fetchAddUsersFailure(error.message));
  }
}



export default function* userSaga() {
  yield takeLatest(fetchUsersRequest.type, fetchUsersSaga);
    yield takeLatest(fetchAddUsersRequest.type, fetchAddUsersSaga);

}
