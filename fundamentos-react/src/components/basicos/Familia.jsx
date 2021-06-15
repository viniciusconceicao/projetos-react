import React, { cloneElement } from 'react'


export default props => {
    return (
        <div>
            {
            React.Children.map(props.Children, child => {
                return cloneElement(child, props)
            })
            }
        </div>
    )
}