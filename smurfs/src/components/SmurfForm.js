import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfs } from '../actions/Actions'






export const SmurfForm = (props) => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })

    const handleChanges = e => {
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.postSmurfs(newSmurf)
        setNewSmurf({
            name: '',
            age: '',
            height: ''
        })

    }

    return (
        <div>
            
            <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        ADD NAME:
                    <input
                type="text"
                name="name"
                value={newSmurf.name}
                onChange={handleChanges}
                />
                    </div>
               <div>
                   ADD AGE:
               <input 
                type="text"
                name="age"
                value={newSmurf.age}
                onChange={handleChanges}
                />
               </div>
                <div>
                    ADD HEIGHT:
                <input 
                type="text"
                name="height"
                value={newSmurf.height}
                onChange={handleChanges}
                />
                </div>
                

                <button>ADD SMURFS</button>
</div>
            </form>
            
        </div>
    )

           
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(
    mapStateToProps, 
    {postSmurfs})(SmurfForm);
