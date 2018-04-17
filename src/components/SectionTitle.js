import React from 'react'

import Separator from './Separator'

const SectionTitle = ({ title, children }) => ( 
    <div >
        <h1 className="text-center space-top">{ title }</h1>
        <Separator />
        <p className="lead text-center p-3 m-auto" style={{ maxWidth: 512 }}>{ children }</p>
    </div>
)

export default SectionTitle 
