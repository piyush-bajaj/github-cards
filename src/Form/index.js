import React, { Component } from "react";

class Form extends Component {

	userNameInput = React.createRef();

	handleSubmit = ( event ) => {
		event.preventDefault();
		console.log( this.userNameInput.current.value );
	}
	render() {
		return (
			<form action={ this.handleSubmit }>
				<input type="text" placeholder="Github username" ref={ this.userNameInput } required></input>
				<button>Add card</button>
			</form>
		);
	}
}

export default Form;