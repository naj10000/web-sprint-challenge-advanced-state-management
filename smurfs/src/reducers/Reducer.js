import { GET_SMURFS, ADD_SMURFS, POST_SMURFS } from '../actions/Actions'


const initialState = {
    smurfs: [],
    isFetchingData: false,
    error: ''
}


export const Reducer = (state = initialState, action) => {
        switch(action.type){
            case GET_SMURFS:
                return {
                    ...state,
                    isFetchingData: true,
                }
            case ADD_SMURFS: 
                return {
                    ...state,
                    isFetchingData: false,
                    smurfs: action.payload
                }

            case POST_SMURFS: 
                return {
                    ...state,
                    smurfs: [
                        ...state.smurfs,
                        action.payload
                    ]
                }

                default: 
                return state;
        }
}