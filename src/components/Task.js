import React, { Component } from 'react';



class Task extends Component{

	  removeItem(item, i) {
        this.props.removeTodo(item, i);
    }

	render(){
		return(

				<div className="Task">
				<span style={{ textDecoration: this.props.todo.done ?'line-through':
				'none'}}>
				{this.props.todo.value}
				</span>
				<button onClick={() => this.props.handleClick(this.props.index)}>{this.props.todo.done ? 'undo' : 'complete'}</button>
				</div>

			);
	}
}


export default Task;