import {combineReducers} from 'redux';
import {trackListReducer} from '../track-list/track-list.reducer';


export const appReducer = combineReducers({
  trackListState: trackListReducer
});
