import React,{ Component } from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Todos from './components/Todos.js';
import AddTodo from './components/AddTodo.js';
import About from './components/pages/About.js';
import Header from './components/layout/Header.js'
import './App.css';
import axios from 'axios';


class App extends Component{
	state = {
		todos :[],
	}

	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/todos')
			.then(res => this.setState({ todos: res.data}))
	}


	addTodo = (title) => {
		axios.post('https://jsonplaceholder.typicode.com/todos',{	title, id: Math.floor(Math.random() * 10000),completed:false})
			.then(res => {
				console.info(`Added ${title} Todo...`)
				this.setState({ todos: [...this.state.todos, res.data]})
			});
	}

	markComplete = (id) => {
		console.log("Completed",id);
		this.setState({todos: this.state.todos.map((todo) => {
				if (todo.id === id){
					todo.completed = !todo.completed
				}
				return todo
			})}
		)
	}

	deleteTodo = (id) =>{
		axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then(res => {
				console.info("Deleted",res)
				this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
			});		
	}
	

	render(){
	  return (
	    <Router>
	    	<div className="App">
		    	<div className="container">
			    	<Header/>
			    	<Route exact path="/" render={
			    		props => (
				    		<React.Fragment>
						    	<AddTodo addTodo={this.addTodo}/>
						      <Todos 
						      	todos={this.state.todos} 
						      	markComplete={this.markComplete} 
						      	deleteTodo={this.deleteTodo} />
					      </React.Fragment >
			      	)
			    	} />
			      <Route path="/about" component={About} />
			    </div>
			  </div>
	    </Router>
	  );
	}
}

export default App;
