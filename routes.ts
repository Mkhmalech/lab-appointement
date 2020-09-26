import { appointment } from "./src/icons";
import { ListAll } from './src/admin';

export const appointments = {
    listAll : {
        title : "Rendez-vous de Laboratoire Fes",
        link : `/admin/:username/appointments`,
        component : ListAll
    },
    store : {
        dispatcher : ''
    },
    dock :{
        link : `/admin/:username/appointments`,
        icon : appointment,
    },
}