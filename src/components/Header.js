import React from 'react';

const Header = (props) => {
	return (
		<header className="top">
			<h1>
				Catch
				<spam className="ofThe">
					<span className="of">of</span>
					<span className="the">the</span>
				</spam>
				Day
			</h1>
			<h3 className="tagLine">{props.tagline}</h3>
		</header>
	)
}

export default Header;