import React from 'react';
import Task from './Task';

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active)
    const done = props.tasks.filter(task => !task.active)
    
    const activeTasks = active.map(task =>(
        <Task key={task.id} task={task} delete={props.delete} change={props.change}/>
    ))

    const doneTasks = done.map(task =>(
        <Task key={task.id} task={task} delete={props.delete} change={props.change}/>
    ))
    return ( 
        <>
            <div className="active">
                <h1>Lista zadań do zrobienia</h1>
                {activeTasks.length > 0 ?
                 activeTasks : <p>Brak zadań do zrobienia</p>}
            </div>

            <hr/>
            
            <div className="done">
                <h3>Zadania zrobione <em>({doneTasks.length})</em></h3>
                {doneTasks.slice(0,5)}
                <span style={{fontSize:"10px",}}>{doneTasks.length >5 ? "Wyświetlonych 5 ostatnich zadań" : false}</span>
            </div>
        </>
     );
}
 
export default TaskList;