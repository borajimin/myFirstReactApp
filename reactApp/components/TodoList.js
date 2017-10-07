import React from 'react'
import Todo from './Todo'
import InputLine from './InputLine'

var toggleChange = false;

class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      todoPassed: this.props.todos
    }
  }
  componentWillReceiveProps(nextProp){
    (nextProp.todos.length !== this.props.todos) ?
      this.setState({
        todoPassed: nextProp.todos
      })
      :
      this.setState({
        todoPassed: this.props.todos
      })
  }
  render(){

    return(
      <div>
        <InputLine submit={this.props.submit}/>
        <ul>
          {
            this.state.todoPassed.map((data, index)=>((data.completed) ?
            <strike><Todo index={index} tTodo={this.props.togTodo} xClick={this.props.todoXClick} task={data}/></strike> :
            <Todo index={index} tTodo={this.props.togTodo} xClick={this.props.todoXClick} task={data}/>))
          }
        </ul>
      </div>
    )
  }
}

export default TodoList
