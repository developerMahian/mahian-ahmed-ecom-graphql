import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
	Card,
	AddToCart,
	ImageWrapper,
	OutOfStock,
	TextInfo,
} from "./ProductCard.styles";

class ProductCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { id, name, gallery, prices, inStock, currency } = this.props;

		const productPrice = prices?.filter(
			({ currency: { label } }) => label === currency
		)[0];

		// default empty values for destructuring optionally without errors...
		const { amount, currency: { symbol } = {} } = productPrice || {};

		return (
			<Card $inStock={inStock}>
				<Link to={`/product-details/${id}`}>
					<ImageWrapper>
						<img src={gallery[0]} alt={`${name} - image`} />

						{!inStock && <OutOfStock>Out of Stock</OutOfStock>}

						<AddToCart className="add-to-cart" $inStock={inStock} />
					</ImageWrapper>

					<TextInfo>
						<h3 className="title">{name}</h3>
						<p className="price">{symbol + amount}</p>
					</TextInfo>
				</Link>
			</Card>
		);
	}
}

const mapStateToProps = (state) => ({
	currency: state.currency.label,
});

export default connect(mapStateToProps)(ProductCard);
