import React from 'react'
import ReactDOM from 'react-dom'


class Todo extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <li><button>X</button>{this.props.task}</li>
    )
  }
}

class TodoList extends React.Component{
  constructor(props){
    super(props);
  }
  // componentWillMount(){
  //   var dummyData = ['what','why','when','how','which'];
  // }
  render(){
    var dummyData = ['what','why','when','how','which'];
    return(
      <ul>
        {dummyData.map((data)=>(<Todo task={data}/>))}
      </ul>
    )
  }
}

ReactDOM.render(<TodoList />, document.getElementById('root'));
