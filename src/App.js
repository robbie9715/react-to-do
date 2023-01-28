import React from "react";
import './App.css'
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";


function App(){
const[todos, setTodos]=React.useState([
  {text:"Meeting",
  iscompleted:false,
  date: "2022-12-25"   
  },
  {text:"Play football",
  iscompleted:false,
  date: "2022-12-26"
  },
  {text:"learn React",
  iscompleted:false,
  date: "2022-12-28"
  }
])

const[resets, setResets]=React.useState("")

const[ekey, setEkey]=React.useState(false)
const[num,setNum]=React.useState(0)


const addTodo=(text, date, index)=>{
  const addOn = {text: text, iscompleted: false, date:date, index}
  const newTodos=[...todos];
  newTodos.splice(index,0,addOn);
  setTodos(newTodos); 
  setEkey(false);
} 

const resetTodo=(text,date,num)=>{
  const reTodo = {text: text, iscompleted: false, date:date, num}
  const newTodos=[...todos];
  newTodos.splice(num,1,reTodo);
  setTodos(newTodos)
  setEkey(false)
}

const completeTodo=(index)=>{
  const newTodos=[...todos];
 if(!newTodos[index].iscompleted) newTodos[index].iscompleted=true;
  else{newTodos[index].iscompleted=false}
  setTodos(newTodos);
}



const remove=(index)=>{
  const newTodos=[...todos];
  newTodos.splice(index,1);
  setTodos(newTodos);
}


const editTodo=(index)=>{
  const resetTodo=todos[index];  
  setResets(resetTodo);
  setEkey(true);
  setNum(index);
} 

//console.log(num);



  return(
    <div className="app">
      <div className="hT">
        TODO LIST
        </div>
      <div className="todo-list">
        {todos.map((sss, index)=>(
          <Todo
            key={index}
            sss={sss}
            index={index}
            completeTodo={completeTodo}
            remove={remove}
            editTodo={editTodo}
            />
            ))}
            <TodoForm 
              addTodo={addTodo}
              resetTodo={resetTodo}
              resets={resets} 
              ekey={ekey}  
              num={num}                                  
              />

            
      </div>
    </div>
  )
}

export default App