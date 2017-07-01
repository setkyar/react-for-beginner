import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
	render() {
		const {details, index} = this.props;
		const isAvaialable = details.status === 'available';
		const buttonText = isAvaialable ? 'Add To Order' : 'Sold Out!';

		return (
			<li className="menu-fish">
				<img src={details.image} alt={details.name} />
				<h3 className="fish-name">
					{details.name}
					<span className="price">{formatPrice(details.price)}</span>
				</h3>
				<p>{details.desc}</p>
				<button onClick={ () => this.props.addToOrder(index) } disabled={!isAvaialable}>{buttonText}</button>
			</li>
		)
	}
}

export default Fish;