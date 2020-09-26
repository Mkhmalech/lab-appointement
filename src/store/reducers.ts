import { Reducer } from "redux";
import { AppointmentActions } from "./actions";

const initialState: any = {

};

export const appointmentReducer: Reducer = (
    state = initialState,
    action: any
) => {
    switch (action.type) {
        case AppointmentActions.APPOINTMENTS_FETCH_ALL_SUCCESS:
            return {
                ...state,
                list : action.payload.fetchAppointements
            };
        default : 
            return { ...state }
    }
}