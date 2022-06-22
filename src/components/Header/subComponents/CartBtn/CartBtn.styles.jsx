import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	cursor: pointer;
`;

export const Qty = styled.div`
	position: absolute;
	top: -10px;
	right: -12px;
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	text-align: center;
	font-family: "Roboto", sans-serif;
	font-size: 1.4rem;
	font-weight: 700;
	color: white;
	background-color: var(--primary-text-color);
`;

export const CartOverlay = styled.div`
	position: absolute;
	inset: 0;
	top: 7rem;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.4);
	z-index: -1;
`;
