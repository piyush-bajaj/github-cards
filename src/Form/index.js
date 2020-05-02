import React, { Component } from "react";
import axios from "axios";

class Form extends Component {

	state = {
		userName: ''
	}

	handleSubmit = async ( event ) => {
		event.preventDefault();
		const response = await axios.get( `https://api.github.com/users/${this.state.userName}` );
		this.props.onSubmit( response.data );
		this.setState( {
			userName: ''
		} );
	}

	render() {
		return (
			<form onSubmit={ this.handleSubmit }>
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