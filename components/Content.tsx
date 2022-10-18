import React from 'react'

const Content = (props: { children: any }) => {
    const { children } = props
    return (
        <div className='content'>
           {children}
        </div>
    )
}

export default Content