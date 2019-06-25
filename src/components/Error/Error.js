import React from 'react';
import './Error.css';

function Error(props) {
  return(
    <>
      <p className="Error">{ props.errorMessage }</p>
    </>
  )
}

export default Error;