import React from 'react';


const Task = (props) => {
    
    return (
        <div className="card">
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <i>{props.description}</i>
            <p className='bold'>{props.piority}</p>
            <p>{props.children}</p>
        </div>
    )


}





export default Task;
