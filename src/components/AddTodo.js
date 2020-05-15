import React, { Component} from 'react';

class AddTodo extends Component{
	state = {
		title: '',
	}

	onChange = (e) => {
		this.setState({title: e.target.value})
	}

	onSubmit = (e) =>{
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({title: ''})
	}
	render(){
		return (
			<form onSubmit={this.onSubmit} style={{display: 'flex'}}>
				<input 
					type="text" 
					name="title" 
					style={{flex:'18', padding: '5px'}}
					placeholder="Enter Todo Title"
					onChange={this.onChange}/>

				<input 
					type="submit" 
					className="btn" 
					style={{flex: '1'}}
					value="Add Todo"/>
			</form>
		)
	}
}

export default AddTodo;
