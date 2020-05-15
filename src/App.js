import React,{ Component } from 'react';
import Todos from './components/Todos.js';
import AddTodo from './components/AddTodo.js';
import Header from './components/layout/Header.js'
import './App.css';

class App extends Component{
	state = {
		todos :[
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


	addTodo = (title) => {
		const todo = 
		this.setState({ 
			todos : 
			[
				this.state.todos, 
				{
					title:title,
					id: Math.floor(Math.random() * 100),
					completed:false,
				}
			]
		});

		console.info(`Added ${title} Todo...`);

	}

	markComplete = (id) => {
		console.log("Completed",id);
		this.setState({todos: this.state.todos.map(
			(todo) => {
				if (todo.id === id){
					todo.completed = !todo.completed
				}
				return todo
			}) 
		})
	}

	deleteTodo = (id) =>{
		this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
		console.info("Deleted",id)
	}
	

	render(){
	  return (
	    <div>
	    	<div className="container">
		    	<Header />
		    	<AddTodo addTodo={this.addTodo}/>
		      <Todos 
		      	todos={this.state.todos} 
		      	markComplete={this.markComplete} 
		      	deleteTodo={this.deleteTodo} 
		      />
		    </div>
	    </div>
	  );
	}
}

export default App;
