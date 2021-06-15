import React from 'react'

import "./Card.css"

export default props => {

const carStyle = {
    backgroundColor: props.color || '#F00',
    borderColor: props.color || '#F00',
}

    return (

    <div className="Card" style={carStyle}>
        <div className="Title">{ props.titulo }</div>
        <div className="Content">{props.children}</div>
        
        
    </div>

    )
}