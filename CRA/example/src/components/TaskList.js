import React from 'react';
import Task from './Task';

const TaskList = (props) => {
    return ( 
        <div>
            <h2>Lista tasków</h2>
            <Task/>
            <Task/>
        </div>
     );
}
 
export default TaskList;