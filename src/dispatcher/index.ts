import { store } from '../../../index';
import { AppointmentActions } from '../store/actions';

/**
 * get all appointments
 */
export const AppointmentsFetchAll = () => store.dispatch({
    type : AppointmentActions.APPOINTMENTS_FETCH_ALL,
    path : 'labos/appointement',
    payload: {
        query:`query{fetchAppointements{fullname tele appointement appointementsubmited details needphlebotomist}}` 
    }
})