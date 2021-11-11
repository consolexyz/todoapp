import React from "react";
import TodoItem from "./TodoItem";
import TodosData from "./TodosData";
import './style.css'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todos : TodosData
    }
  }
  render(){
    const Todo = this.state.todos.map(item => <TodoItem 
      key= {item.id}
      text= {item.text}
      completed ={item.completed}
      />)
    return(
      <div className ="todo-list">
        {Todo}
      </div>
    )
  }
}

export default App