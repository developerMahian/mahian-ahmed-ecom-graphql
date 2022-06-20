import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2.4rem 0;
	border-top: 1px solid #e5e5e5;
	border-bottom: 1px solid #e5e5e5;
`;

export const LeftCol = styled.div`
	h2 {
		font-size: 3rem;
		line-height: 2.7rem;
	}
`;

export const Heading = styled.h2`
	font-weight: 600;
	margin-bottom: 1.6rem;
`;

export const SubHeading = styled.h2`
	margin-bottom: 2rem;
`;

export const Price = styled.h3`
	font-weight: 700;
	font-size: 2.4rem;
	line-height: 2.4rem;
	margin-bottom: 2rem;
`;

export const SelectionHeading = styled.h3`
	font-weight: 700;
	font-size: 1.8rem;
	line-height: 1.8rem;
	margin-bottom: 0.8rem;
`;

export const RightCol = styled.div`
	display: flex;
	gap: 2.4rem;

	img {
		object-fit: contain;
	}
`;

export const QuantityBar = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 2rem;
	align-items: center;

	.quantity {
		font-size: 2.4rem;
		font-weight: 500;
	}

	button {
		width: 4.5rem;
		height: 4.5rem;
		opacity: 0.7;
		background-color: transparent;
		border: 1px solid var(--primary-text-color);
		transition: transform 0.1s ease-in-out;

		svg {
			margin-top: 0.4rem;
		}

		&:active {
			transform: scale(0.95);
		}
	}
`;
