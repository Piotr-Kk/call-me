import * as React from "react";


// export class TaskList extends React.Component {

//   render() {
//     return (

//     )
//   }
// }



interface AppState {
  inputValue: string,
  listOfTasks: string[],
  htmlList: any[]
}

export class App extends React.Component<{}, AppState> {

  constructor(props: any){
    super(props);

    this.state = {
      inputValue: '',
      listOfTasks: [],
      htmlList: []
    }
  }
  

  render() {
    return (
      <div id="app">
        <h1>What you want TO DO?</h1>
        <input value={ this.state.inputValue } onKeyUp={ (e) => this.onKeyPressed(e) } onChange={ (e) => this.onInputChange(e) }></input>
        {this.state.htmlList}      
      </div>
    )
  }

  onInputChange(e: any) {
    this.setState({ inputValue: e.target.value });
  }

  onKeyPressed(e: any) {
    if(e.keyCode === 13) {
      this.addTaskToList(this.state.inputValue);
      this.setState({ inputValue: '' });
    }
  }

  addTaskToList(value: string) {
    this.state.listOfTasks.push(value);

    let _htmlList = this.state.listOfTasks.map((task: string) => <div key={ task }>{ task }</div>);
    
    this.setState({ htmlList: _htmlList })
    console.log(value);
  }

}
