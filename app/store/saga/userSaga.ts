import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "../slices/userSlice";
import {
  fetchAddUserDetailsApi,
  fetchDeleteUserDetailsApi,
  fetchUpdateUserDetailsApi,
  fetchUserDetailsApi,
} from "@/app/api/user";
import {
  fetchAddUsersFailure,
  fetchAddUsersRequest,
  fetchAddUsersSuccess,
} from "../slices/addUserSlice";
import {
  fetchUpdateUsersFailure,
  fetchUpdateUsersRequest,
  fetchUpdateUsersSuccess,
} from "../slices/updateUserSlice";
import {
  fetchDeleteUsersFailure,
  fetchDeleteUsersRequest,
  fetchDeleteUsersSuccess,
} from "../slices/deleteUserSlice";

export function* fetchUsersSaga(): Generator<any, void, any> {
  try {
    const response: any = yield call(fetchUserDetailsApi);
    yield put(fetchUsersSuccess(response.data));
  } catch (error: any) {
    yield put(fetchUsersFailure(error.message));
  }
}

export function* fetchAddUsersSaga(
  action: ReturnType<typeof fetchAddUsersRequest>
): Generator<any, void, any> {
  try {
    const response: any = yield call(fetchAddUserDetailsApi, action.payload); // ✅ pass data here
    yield put(fetchAddUsersSuccess(response));
  } catch (error: any) {
    yield put(fetchAddUsersFailure(error.message));
  }
}

export function* fetchUpdateUsersSaga(
  action: ReturnType<typeof fetchUpdateUsersRequest>
): Generator<any, void, any> {
  try {
    const { id, data } = action.payload; // ✅ destructure
    const response: any = yield call(fetchUpdateUserDetailsApi, id, data); // ✅ pass both
    console.log("response.........", response);

    yield put(fetchUpdateUsersSuccess(response));
  } catch (error: any) {
    yield put(fetchUpdateUsersFailure(error.message));
  }
}

export function* fetchDeleteUsersSaga(
  action: ReturnType<typeof fetchDeleteUsersRequest>
): Generator<any, void, any> {
  try {
    const { id, data } = action.payload; // ✅ destructure
    const response: any = yield call(fetchDeleteUserDetailsApi, id); // ✅ pass both
    console.log("response.........", response);

    yield put(fetchDeleteUsersSuccess(response));
  } catch (error: any) {
    yield put(fetchDeleteUsersFailure(error.message));
  }
}
export default function* userSaga() {
  yield takeLatest(fetchUsersRequest.type, fetchUsersSaga);
  yield takeLatest(fetchAddUsersRequest.type, fetchAddUsersSaga);
  yield takeLatest(fetchUpdateUsersRequest.type, fetchUpdateUsersSaga);
  yield takeLatest(fetchDeleteUsersRequest.type, fetchDeleteUsersSaga);
}
