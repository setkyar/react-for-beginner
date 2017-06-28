import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	render() {
		return (
			<form className="store-selector">
				{ /* Hello */ }
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()}/>
				<button type="submit">Visist Store →</button>
			</form>
		)
	}
}

export default StorePicker;