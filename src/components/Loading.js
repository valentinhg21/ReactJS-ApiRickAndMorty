import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import './Loading.css'

const Loading = () => {
    return (
        <div className="spinner">
            <Spinner role="status" variant="light" animation="grow" size="">
            <span className="sr-only">Loading...</span>
            </Spinner>
        </div>

    )
}

export default Loading
