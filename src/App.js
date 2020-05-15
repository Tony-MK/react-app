import React,{ Component } from 'react';
import Todos from './components/Todos.js';

import './App.css';

class App extends Component{

	state = {
		todos :
			[
				{
					id:1,
					title: "Meeting",
					completed: false,
				},
				{
					id:2,
					title: "Clean",
					completed: false,
				},
				{
					id:3,
					title: "Jog",
					completed: false,
				}
			]
		}

	render(){
	  return (
	    <div className="App">
	      <Todos todos={this.state.todos}/>
	    </div>
	  );
	}
}

export default App;
