import React, { Component } from 'react';
import CheckRequest from './components/checkrequest';
import NewRequest from './components/newrequest'
class App extends Component {
  constructor(props){
    super(props)
    this.state={
        page : "index"
    }
}
handleToCreate= () => {
  this.setState({
    page : "create"})
}
handleBack = () => {
  this.setState({
    page : "index"})
}

  render() {
    return (
      <div className="App container">
        {(()=>{
          if(this.state.page == 'index') {
            return <div>
            <button className="button is-success" onClick = {this.handleToCreate}> Create </button>
            <CheckRequest />
            </div>
          }else{
            return <NewRequest backBtn={this.handleBack}/>
          }
        })()}
        {/* <CheckRequest /> */}
        {/* <NewRequest /> */}

      </div>
    );
  }
}

export default App;
