import React, { Component } from "react";

class Card extends Component {
	render() {
		return (
			<div className="github-profile">
				<img src={ this.props.avatar_url } alt="profile" />
				<div className="info">
					<div className="name">{ this.props.login }</div>
					<div className="company">{ this.props.organizations_url }</div>
				</div>
			</div >
		);
	}
}

export default Card;