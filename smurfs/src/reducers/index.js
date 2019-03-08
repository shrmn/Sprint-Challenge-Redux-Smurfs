/*
  Be sure to import in all of the action types from `../actions`
*/
import { 
  FETCH_SMURF_FAIL,
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS 
} from '../actions'

 // Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

export const smurfsReducer = (state = initialState, action) => {
  switch(action.type) {

    case FETCH_SMURF_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: null
      };
    
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload],
        fetchingSmurfs: false
      };

    case FETCH_SMURF_FAIL:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }

    default:
      return state;
   }
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
