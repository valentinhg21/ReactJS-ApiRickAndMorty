import React from 'react'
import Alert from 'react-bootstrap/Alert'
import './Error.css'
const Error = () => {
    return (
        <div className="error">
              <Alert  variant='danger'>
                    Error con la busqueda!.
                </Alert>
        </div>
    )
}

export default Error
