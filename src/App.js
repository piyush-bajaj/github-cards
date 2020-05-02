import React, { Component } from "react";
import Card from "./Card";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="header">The Github Cards App</div>
				<Card />
			</React.Fragment>
		);
	}
}

export default App;