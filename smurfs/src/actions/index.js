import axios from 'axios';
// import { networkInterfaces } from 'os';

const url = 'http://localhost:3333/smurfs';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';

export const fetchingSmurfs = () => dispatch => {
  dispatch ({ type: FETCH_SMURF_START });
  axios
    .get(url)
    .then(res => dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_SMURF_FAIL, payload: err }));
};

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAIL = 'ADD_SMURF_FAIL';

export const addingSmurf = newSmurf => dispatch => {
  dispatch ({ type: ADD_SMURF_START });
  axios
    .post(url, newSmurf)
    .then(res => dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_SMURF_FAIL, payload: err }))
};

export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAIL = 'DELETE_SMURF_FAIL';

export const deletingSmurf = id => dispatch => {
  dispatch ({ type: DELETE_SMURF_START });
  axios
    .delete(`${url}/${id}`)
    .then(res => dispatch({ type: DELETE_SMURF_SUCCESS, payload: id }))
    .catch(err => dispatch({ type: DELETE_SMURF_FAIL, payload: err }))
};
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
