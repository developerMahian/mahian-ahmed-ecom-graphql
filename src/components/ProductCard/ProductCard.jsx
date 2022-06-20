import { isEmpty } from "lodash";
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { addProduct } from "../../features/cart/cartSlice";

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

	isAttrSelected = () => {
		const foundMatches = this.props.cart.products?.filter((product) => {
			return product.id === this.props.product.id;
		});

		// const isThereAttrs = foundMatches.find(
		// 	(match) => !isEmpty(match.selectedAttributesCart)
		// );

		// for (let i = 0; i < foundMatches.length; i++) {
		// 	if (isEmpty(foundMatches[i].selectedAttributesCart)) {
		// 		if (i > 0) {
		// 			return foundMatches[i - 1].selectedAttributesCart;
		// 		}
		// 	}
		// }

		// give last selected variant..
		return foundMatches[foundMatches.length - 1]?.selectedAttributesCart;
	};

	addToCartHandler = (selectedAttributesCart, priceObj) => {
		if (!this.props.product.inStock) {
			alert("Sorry, this product is out of stock right now...");
		} else if (
			!isEmpty(this.props.product.attributes) &&
			isEmpty(selectedAttributesCart)
		) {
			alert(
				"Please select some attributes and add to cart from the Product-Detail page First"
			);
		} else {
			this.props.addProduct({
				...this.props.product,
				selectedAttributesCart,
				priceObj,
			});
		}
	};

	render() {
		const { id, name, gallery, prices, inStock } = this.props.product;

		const productPrice = prices?.filter(
			({ currency: { label } }) => label === this.props.currency
		)[0];

		// default empty values for destructuring optionally without errors...
		const { amount, currency: { symbol } = {} } = productPrice || {};

		const selectedAttributesCart = this.isAttrSelected();

		return (
			<Card $inStock={inStock}>
				<Link to={`/product-details/${id}`}>
					<ImageWrapper>
						<img src={gallery[0]} alt={`${name} - image`} />

						{!inStock && <OutOfStock>Out of Stock</OutOfStock>}

						<AddToCart
							className="add-to-cart"
							$inStock={inStock}
							onClick={(e) => {
								e.preventDefault();
								this.addToCartHandler(
									selectedAttributesCart,
									productPrice
								);
							}}
						/>
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
	cart: state.cart,
});

export default connect(mapStateToProps, { addProduct })(ProductCard);
