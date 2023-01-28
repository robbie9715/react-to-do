import React from "react";
import btnback01 from '../../src/icon/btnback01.svg'
import complete from '../../src/icon/complete.png'
import removee from '../../src/icon/removee.png'
import edit from '../../src/icon/edit.png'
import submite from '../../src/icon/submite.svg'
function Todo({sss, index, completeTodo, remove, editTodo}){
    
    //const[value, setValue]=useState("");
    
    
    
    return(<div>
        <div className="date">
            {sss.date}
        </div>
        
        <div className="todo" style={{textDecoration:sss.iscompleted? "line-through" : ""}}>
            {sss.text} 
                                 
        </div>
        <div className="btnSet">           
            <img className="Subbtn1" src={complete} onClick={()=>completeTodo(index)} alt="aaa"></img>
            <img className="Subbtn1" src={removee} onClick={()=>remove(index)} alt="aaa"></img>
            <img className="Subbtn2" src={edit} onClick={()=>editTodo(index)} alt="aaa"></img>
                {/* <button className="btn" onClick={()=>completeTodo(index)}> {todo.iscompleted? "uncomplete":"complete"}</button>
                <button className="btn" onClick={()=>remove(index)}>Remove</button> */}
                {/* <button className="btn" onClick={()=>edit(index)}>Edit</button> */}
        </div>
        
    </div>
    )
}

export default Todo