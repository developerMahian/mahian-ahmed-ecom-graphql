import styled from "styled-components";
import { ReactComponent as ProductCartIcon } from "../../assets/svg/product-cart.svg";

export const Card = styled.div`
	width: 100%;
	max-width: 38.6rem;
	height: fit-content;
	padding: 1.6rem;
	background-color: var(--primary-bg);
	transition: box-shadow 0.3s ease-in-out;

	&:hover {
		box-shadow: 0 0 2.5rem 0.5rem rgba(0, 0, 0, 0.1);

		.add-to-cart {
			opacity: ${({ $inStock }) => ($inStock ? "1" : "0.5 !important")};
		}
	}

	img {
		opacity: ${({ $inStock }) => !$inStock && "0.5"};
	}

	.title,
	.price {
		color: ${({ $inStock }) => !$inStock && "var(--primary-text-gray)"};
	}
`;

export const ImageWrapper = styled.div`
	position: relative;
	margin-bottom: 2rem;

	img {
		width: 100%;
	}
`;

export const OutOfStock = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
	font-size: 2.4rem;
	text-transform: uppercase;
	color: var(--primary-text-gray);
`;

export const AddToCart = styled(ProductCartIcon)`
	position: absolute;
	right: 6px;
	bottom: -24px;
	width: 6rem;
	height: 6rem;
	opacity: 0;
	transition: 0.3s ease-in-out;
	transition-property: opacity, transform;
	cursor: ${({ $inStock }) => ($inStock ? "pointer" : "not-allowed")};

	&:hover {
		transform: ${({ $inStock }) => ($inStock ? "scale(1.1)" : "none")};
	}
`;

export const TextInfo = styled.div`
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
