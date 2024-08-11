import React,{Component} from "react";


class State extends Component{

  constructor()
   {
    super();
    this.State  = {
      data:1
    }
  }
  apple()
  {
    this.setState({data:this.state.data+1})
  }

  render()
  {
    return
    
    (
      <>
      <h1>{this.State.data}</h1>
      <button onClick = {()=>this.apple()}>update data</button>
      </>
    )
  }
}
export default State;