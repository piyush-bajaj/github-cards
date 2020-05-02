import React, { Component } from "react";
import CardList from "./CardList";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="header">The Github Cards App</div>
				<CardList />
			</React.Fragment>
		);
	}
}

export default App;