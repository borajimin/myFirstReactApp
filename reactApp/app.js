import React from 'react'
import ReactDOM from 'react-dom'


class Todo extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <li><task type='text'>X</task>{this.props.data}</li>
    )
  }
}

class TodoList extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    var dummyData = ['what','why','when','how','which'];
  }
  render(){
    return(
      <ul>
        {dummyData.map((data)=>(<Todo data={data}/>))}
      </ul>
    )
  }
}

ReactDOM.render(<TodoList />, document.getElementById('root'));
