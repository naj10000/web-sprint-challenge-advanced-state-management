import React from 'react';
import SmurfForm from './SmurfForm'
import { useSelector, useDispatch } from 'react-redux';
import { getSmurfs, postSmurfs } from '../actions/Actions'


export const Smurfs = () => {
    const smurfs = useSelector( state => state.smurfs)
    const dispatch = useDispatch();
    return (
        <div>
            <SmurfForm/>
            {smurfs.isFetchingData ? (
            <h2>Getting Data</h2>
        ) : (<button onClick={()=> dispatch(getSmurfs(smurfs))}>Get Smurfed</button>)}
        {smurfs.map( smurf => (
                <div >
                <h2>{smurf.name}</h2>
        <p>{smurf.age}</p>
        <p>{smurf.height}</p>
            </div>
        )
        
        )}
            
        </div>
    )
}

export default Smurfs