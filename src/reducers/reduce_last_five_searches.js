import {SAVE_NEW_SEARHC} from '../constants/constants'

let LS = localStorage.getItem("searches").split(',');

export default function (state=LS, action) {
    switch (action.type){
        case SAVE_NEW_SEARHC :
            return [
                ...action.payload
            ];
        default :
            return state;
    }
}