import React, { Component } from "react";

class Form extends Component {

	state = {
		userName: ''
	}

	handleSubmit = ( event ) => {
		event.preventDefault();
		console.log( this.state.userName );
	}
	render() {
		return (
			<form action={ this.handleSubmit }>
				<input
					type="text"
					placeholder="Github username"
					value={ this.state.userName }
					onChange={ event => this.setState( { userName: event.target.value } ) }
					required></input>
				<button>Add card</button>
			</form>
		);
	}
}

export default Form;