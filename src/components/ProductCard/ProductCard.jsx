import { Component } from "react";
import { connect } from "react-redux";
import {
	AddToCart,
	Card,
	ImageWrapper,
	OutOfStock,
	TextInfo,
} from "./ProductCard.styles";

class ProductCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { name, gallery, prices, inStock, currency } = this.props;

		const productPrice = prices.filter(
			({ currency: { label } }) => label === currency
		);

		const [
			{
				amount,
				currency: { symbol },
			},
		] = productPrice;

		return (
			<Card inStock={inStock}>
				<ImageWrapper>
					<img src={gallery[0]} alt={`${name} - image`} />

					{!inStock && <OutOfStock>Out of Stock</OutOfStock>}

					<AddToCart className="add-to-cart" />
				</ImageWrapper>

				<TextInfo>
					<h3 className="title">{name}</h3>
					<p className="price">
						{symbol}
						{amount}
					</p>
				</TextInfo>
			</Card>
		);
	}
}

const mapStateToProps = (state) => ({
	currency: state.currency.label,
});

export default connect(mapStateToProps)(ProductCard);
