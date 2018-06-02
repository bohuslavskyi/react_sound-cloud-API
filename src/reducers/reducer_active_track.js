import {TRACK_SELECTED} from '../constants/constants'


export default function (state={}, action) {
    switch (action.type){
        case TRACK_SELECTED :
            return {
                ...state,
                ...action.payload
            };
        default :
            return state;
    }
}