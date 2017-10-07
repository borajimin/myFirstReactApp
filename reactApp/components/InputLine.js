import React from 'react'

class InputLine extends React.Component{
  constructor(props){
    super(props);
    this.state={
      todo: ''
    }
  }
  changeVal(e){
    this.setState({
      todo: e.target.value
    })
  }
  submitVal(e){
    e.preventDefault();
    this.props.submit(this.state.todo);
    this.setState({
      todo: ''
    })
  }
  render(){
    return(
      <form onSubmit={(e)=>this.submitVal(e)}>
        <input onChange={(e)=>this.changeVal(e)}type='text' placeholder='task' value={this.state.todo}/>
        <button type='submit'>Add to do</button>
      </form>
    )
  }
}

export default InputLine
