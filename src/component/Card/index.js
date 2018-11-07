import React from 'react'

const Card = ({title,children}) => (
    <div>
    <div style = {{
        padding: 20,
        margin: 5,
        backgroundColor: 'lightgrey',
    }}>
    {children}
    </div>
    </div>
)

export default Card