import React from 'react';
import Task from './Task';

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active)
    const done = props.tasks.filter(task => !task.active)
    
    if(done.length >=2){
        done.sort( (a,b) => (b.finishDate - a.finishDate) )
    }

    if(active.length >=2){
        active.sort((a,b)=> {
            a = a.text.toLowerCase()
            b = b.text.toLowerCase()
            if(a < b) return -1;
            if(a > b) return 0;
            return 0;
        })
    }

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