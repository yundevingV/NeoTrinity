import React, { Component } from 'react'

import ScrollContainer from 'react-indiana-drag-scroll'
import Album from './Album'

function HorizontalList() {

    return (
        <div className='hori'>
            <Album/>
            <Album/>
            <Album/>
            
        </div>
    )

}

export default HorizontalList;