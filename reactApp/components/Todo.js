import React from 'react'

class Todo extends React.Component{
  constructor(props){
    super(props);
  }
  remove(e){
    e.preventDefault();
    this.props.xClick(this.props.index);
  }
  toggle(e){
    e.preventDefault();
    this.props.tTodo(this.props.index);
  }
  render(){
    return(
      <li>
        <p onClick={(e)=>this.toggle(e)}>{this.props.task.taskText}</p>
        <button onClick={(e)=>this.remove(e)}>X</button>
      </li>
    )
  }
}

export default Todo
