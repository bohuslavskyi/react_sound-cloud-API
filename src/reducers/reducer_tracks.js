import {TRACK_LIST_LOADED} from '../constants/constants'


export default function (state=[], action) {
    switch (action.type){
        case TRACK_LIST_LOADED :
            return [
                // ...state,
                ...action.payload
            ];
        default :
            return state;
    }
}