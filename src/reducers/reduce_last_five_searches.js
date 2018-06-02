import {SAVE_NEW_SEARHC} from '../constants/constants'

let LS = localStorage.getItem("searches");
if(LS){
    LS = LS.split(',');
} else {
    localStorage.setItem("searches", '');
    LS = localStorage.getItem("searches");
}


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