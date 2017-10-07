import React from 'react'
import TodoList from './TodoList'

var dummyData = [
  {taskText: "what", completed: false},
  {taskText: "why", completed: false},
  {taskText: "when", completed: false},
  {taskText: "how", completed: false},
  {taskText: "which", completed: false}
]

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      todos: []
    }
  }
  componentDidMount(){
    this.setState({
      todos: dummyData
    })
  }
  addTodo(task){
    dummyData = [...dummyData, {'taskText': task, 'completed': false}];
    this.setState({
      todos: dummyData
    })
  }
  removeTodo(index){
    dummyData = dummyData.filter((data)=>{if(dummyData.indexOf(data)!==index){
      return data;
    }})
    this.setState({
      todos: dummyData
    })
  }
  toggleTodo(index){
    var newData = this.state.todos;
    newData[index].completed = !newData[index].completed;
    dummyData = newData;
    this.setState({
      todos: dummyData
    })
  }
  render(){
    return(
      <div>
        <TodoList togTodo={(i)=>this.toggleTodo(i)} todoXClick={(i)=>this.removeTodo(i)} submit={(e)=>this.addTodo(e)} todos={this.state.todos}/>
      </div>
    )
  }
}

export default TodoApp
