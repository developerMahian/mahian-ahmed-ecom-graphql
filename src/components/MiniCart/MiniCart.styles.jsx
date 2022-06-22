import styled from "styled-components";

export const Container = styled.div`
	position: absolute;
	top: 100%;
	right: 0;
	min-width: 32.5rem;
	padding: 3.2rem 1.6rem;
	background-color: var(--primary-bg);
	box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
	cursor: default;
`;

export const Heading = styled.h3`
	font-weight: 500;
	margin-bottom: 1.2rem;

	span {
		font-weight: 700;
		text-transform: capitalize;
	}
`;

export const CartItemSection = styled.div`
	max-height: 45rem;
	overflow-y: auto;
	overflow-x: hidden;
`;

export const TotalQty = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 0.5rem;
	margin-bottom: 3.2rem;

	div:first-child {
		font-family: "Roboto", sans-serif;
		font-weight: 500;
	}

	div:last-child {
		font-weight: 700;
	}
`;

export const BottomBtnSection = styled.div`
	display: flex;
	justify-content: space-between;

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 14.1rem;
		height: 4.3rem;
		font-size: 1.4rem;
		font-weight: 600;
		line-height: 120%;
		text-transform: uppercase;
		border: 1px solid rgba(0, 0, 0, 0.5);
	}

	a:last-child {
		color: var(--primary-bg);
		background-color: var(--primary-green);
		border: none;
	}
`;
