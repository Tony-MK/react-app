import React, { Component} from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component{

	getStyle = () =>{
		return {
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			backgroundColor: this.props.todo.completed ? '#ccc': '#f4f4f4',
			textDecoration : this.props.todo.completed ? 'line-through':'none',
		}
	}

	

	render(){
		const { id,title } = this.props.todo;

		return (
			<div style={this.getStyle()}>

      	<p > 
      		<input type="checkbox" onChange={this.props.markComplete.bind(this,id)} />
      		<span style={{marginLeft:'15px'}}> {title} </span>
      		<button style={btnStyle} onClick={this.props.deleteTodo.bind(this,id)}>x</button>
      	</p>
    	</div>
		);
	}
};

// PropTypes
TodoItem.propType = {
	todo: PropTypes.object.isRequired,
};

const btnStyle = {
	background : 'red',
	color: '#fff',
	border: 'none',
	padding: '5px 9px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right',
}
export default TodoItem;
