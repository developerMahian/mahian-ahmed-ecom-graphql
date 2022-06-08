import { Component } from "react";
import styled from "styled-components";

import { ReactComponent as ProductCartIcon } from "../../assets/svg/product-cart.svg";

class ProductCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currency: "USD",
		};
	}

	render() {
		const { name, gallery, prices, inStock } = this.props;

		const productPrice = prices.filter(
			({ currency: { label } }) => label === this.state.currency
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

const Card = styled.div`
	width: 100%;
	max-width: 38.6rem;
	min-height: 44.4rem;
	padding: 1.6rem;
	background-color: var(--primary-bg);
	transition: box-shadow 0.3s ease-in-out;

	&:hover {
		box-shadow: 0 0 2.5rem 0.5rem rgba(0, 0, 0, 0.1);

		.add-to-cart {
			opacity: 1;
		}
	}

	img {
		opacity: ${({ inStock }) => !inStock && "0.5"};
	}

	.title,
	.price {
		color: ${({ inStock }) => !inStock && "var(--primary-text-gray)"};
	}
`;

const ImageWrapper = styled.div`
	position: relative;
	margin-bottom: 2rem;

	img {
		width: 100%;
		height: 34rem;
	}
`;

const OutOfStock = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
	font-size: 2.4rem;
	text-transform: uppercase;
	color: var(--primary-text-gray);
`;

const AddToCart = styled(ProductCartIcon)`
	position: absolute;
	right: 6px;
	bottom: -24px;
	width: 6rem;
	height: 6rem;
	cursor: pointer;
	opacity: 0;
	transition: 0.3s ease-in-out;
	transition-property: opacity, transform;

	&:hover {
		transform: scale(1.1);
	}
`;

const TextInfo = styled.div`
	.title,
	.price {
		font-size: 1.8rem;
	}

	.title {
		font-weight: 300;
		margin-bottom: 2px;
	}

	.price {
		font-weight: 500;
	}
`;

export default ProductCard;
