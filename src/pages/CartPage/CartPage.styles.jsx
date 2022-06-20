import styled from "styled-components";

export const Heading = styled.h1`
	margin-top: 7rem;
	margin-bottom: 5.5rem;
	font-size: 3.2rem;
	font-weight: 700;
	text-transform: uppercase;
	line-height: 4rem;
`;

export const OrderSection = styled.div`
	width: 28rem;
	margin-top: 3.2rem;
`;

export const OrderInfo = styled.div`
	display: flex;
	gap: 1rem;
	margin-bottom: 0.8rem;

	& > div > div {
		font-size: 2.4rem;
		line-height: 2.8rem;
		margin-bottom: 0.8rem;
		text-transform: capitalize;
	}

	.label div:last-child {
		font-weight: 500;
	}

	.value {
		font-weight: 700;
	}
`;

export const EmptyCart = styled.h1`
	font-size: 2.25rem;
	font-weight: 600;
	text-align: center;
`;
