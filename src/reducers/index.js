import {combineReducers} from 'redux';
import TracksReducer from './reducer_tracks';
import ActiveTrack from './reducer_active_track';
import LastFiveFearches from './reduce_last_five_searches'

const rootReducer = combineReducers({
    tracks: TracksReducer,
    activeTrack: ActiveTrack,
    lastFiveSearches: LastFiveFearches
});

export default rootReducer;