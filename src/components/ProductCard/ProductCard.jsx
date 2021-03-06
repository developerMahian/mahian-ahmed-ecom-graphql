import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";

import { addProduct } from "../../features/rootReducer";

import { Card, AddToCart, ImageWrapper, OutOfStock, TextInfo } from "./ProductCard.styles";

class ProductCard extends Component {
	isAttrSelected = () => {
		const foundMatch = this.props.cart.products?.find((product) => product.id === this.props.product.id);

		return {
			foundSelectedAttrs: foundMatch?.selectedAttributesCart,
			foundVariantID: foundMatch?.variantID,
		};
	};

	selectPredefinedAttrs = () => {
		const defaultSelection = {};

		this.props.product.attributes?.forEach(({ id, items }) => {
			defaultSelection[id] = { ...items[0] };
		});

		return defaultSelection;
	};

	sortVariantIdProps = (defaultAttrs) => {
		let variantID = this.props.product.id;

		const objKeys = Object.keys(defaultAttrs);
		const sortingArr = this.props.product.attributes?.map((arr) => arr.id);

		const sortedObjKeys = objKeys.sort((a, b) => sortingArr.indexOf(a) - sortingArr.indexOf(b));

		sortedObjKeys.forEach(
			(key) => (variantID += `-(${key.toLowerCase()} - ${defaultAttrs[key].id.toLowerCase()})`)
		);

		return variantID;
	};

	addToCartHandler = (foundSelectedAttrs, foundVariantID, priceObj) => {
		if (!this.props.product.inStock) {
			alert("Sorry, this product is out of stock right now...");
		} else if (!isEmpty(this.props.product.attributes) && isEmpty(foundSelectedAttrs)) {
			const defaultAttrs = this.selectPredefinedAttrs();
			const defaultVarianID = this.sortVariantIdProps(defaultAttrs);

			this.props.addProduct({
				...this.props.product,
				selectedAttributesCart: defaultAttrs || {},
				variantID: defaultVarianID,
				priceObj,
			});
		} else {
			this.props.addProduct({
				...this.props.product,
				selectedAttributesCart: foundSelectedAttrs || {},
				variantID: foundVariantID,
				priceObj,
			});
		}
	};

	render() {
		const { id, name, gallery, prices, inStock } = this.props.product;

		const productPrice = prices?.filter(({ currency: { label } }) => label === this.props.currency)[0];

		// default empty values for destructuring optionally without errors...
		const { amount, currency: { symbol } = {} } = productPrice || {};

		const { foundSelectedAttrs, foundVariantID } = this.isAttrSelected();

		return (
			<Card $inStock={inStock}>
				<Link to={`/product-details/${id}`}>
					<ImageWrapper>
						<img src={gallery[0]} alt={name} />

						{!inStock && <OutOfStock>Out of Stock</OutOfStock>}

						<AddToCart
							className="add-to-cart"
							$inStock={inStock}
							onClick={(e) => {
								e.preventDefault();
								this.addToCartHandler(foundSelectedAttrs, foundVariantID, productPrice);
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
