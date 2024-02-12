import React from 'react'

export default function Tarea(props) {
    return (
        <div key={props.i} className='row col-lg-7'>
            <span className='col-lg-5 fs-3'>{props.e}</span>
            <button onClick={() => props.eliminar(props.i)} value={props.i} className='col-1 float-right btn btn-danger'>X</button>
        </div>
    )
}
