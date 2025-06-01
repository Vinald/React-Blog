import React from 'react'
import {Link} from "react-router-dom";

function NotFound() {
  return (
    <div className={'not-found'}>
        <h2>404</h2>
        <p>The page is not found</p>
        <Link to="/">Back to home</Link>
    </div>
  )
}

export default NotFound