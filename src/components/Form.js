import React, { Component } from 'react';



class Form extends Component{




	
render(){
	return(

		<div className="content">
			<div className="addTask">
				<form onSubmit={(evt) => this.props.handleSubmit(evt)}>
					<label>
					Name:
					<input 
						onChange={(evt) => this.props.handleChange(evt)}
						value={this.props.inputValue}
						required
					/>
					</label>
					
				</form>
			</div>
		</div>

	);
}


} 

export  default Form;