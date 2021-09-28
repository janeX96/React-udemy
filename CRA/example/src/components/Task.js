import React from 'react';

const Task = (props) => {

    const style = {
        color: 'red',
    }
    const {id, text, date, active, important, finishDate} = props.task

    const finish = new Date(finishDate).toLocaleString()
    if(active){
         return ( 
       <div>
            <p>
               <strong style={important ? style : null}>{text}</strong> - do <span>{date} </span>
                <button 
                onClick={()=> props.change(id)}>
                    Zostało zrobione
                </button>
            <button onClick={()=> props.delete(id)}>X</button>
            </p>
           
       </div>
     );
    }
    else{
        return(
            <div>
            <p>
               <strong >{text}</strong><em> - (zrobić do {date}) </em>
               <br/>
               - potwierdzenie wykonania <span>{finish} </span>
            <button onClick={()=> props.delete(id)}>X</button>
            </p>
           
       </div>
        )
    }

   
}
 
export default Task;