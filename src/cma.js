import React from 'react';

function Cma(props) {
    return(
    <div>
        <h1>We are offering {props.courseName}</h1>
        <h1>we are also offering Exemptions for {props.degreeHolder} </h1>
    </div>
    )
}
export default Cma;