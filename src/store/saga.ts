import { all, fork, takeEvery } from 'redux-saga/effects'
import { AppointmentActions } from './actions';
import * as config from '../../../store/config';

// fetch all catalogs
function* appointmentFetchAll({path, payload} : any){
    yield config.tryFetching(
        path,
        payload,
        AppointmentActions.APPOINTMENTS_FETCH_ALL_ERROR,
        AppointmentActions.APPOINTMENTS_FETCH_ALL_SUCCESS
    )
}
//watcher func dispatcher
function* watchFetchAppointments(){
    // save update new test
    yield takeEvery(AppointmentActions.APPOINTMENTS_FETCH_ALL, appointmentFetchAll)

}
export function* AppointmentSaga(){
    yield all([fork(watchFetchAppointments)])
}