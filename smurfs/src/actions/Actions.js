import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const ADD_SMURFS = 'ADD_SMURFS';
export const SET_ERROR = 'SET_ERROR'
export const POST_SMURFS = 'POST_SMURFS';


///grabbing the smurfs

export const getSmurfs = () => dispatch => {
    dispatch({ type: GET_SMURFS })

    axios
        .get('http://localhost:3333/smurfs')
        .then( res => {
            console.log(res.data)
            dispatch({ type: ADD_SMURFS, payload: res.data})
        })
        .catch( err => {
            console.log(err);
            dispatch({ type: SET_ERROR, payload: 'Error get smurfs: error'})
        })
}

export const postSmurfs = (newSmurf) => dispatch => {
    axios
        .post("http://localhost:3333/smurfs", newSmurf)
        .then(res => {
            dispatch({ type: POST_SMURFS, payload: res.data})
        })
            .catch(error => {
                console.log(error)
            })
}