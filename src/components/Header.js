import React from 'react';

class Header extends React.Component {
	render() {
		console.log(this);
		return (
			<header className="top">
				<h1>Catch of the Day</h1>
				<h3 className="tagLine">{this.props.tagline}</h3>
			</header>
		)
	}
}

export default Header;