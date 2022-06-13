import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	gap: 2rem;
	margin-top: 5rem;
`;

export const ImageCol = styled.div`
	width: 60%;
`;

export const TextCol = styled.div``;

export const Heading = styled.div`
	font-size: 3rem;
	line-height: 2.7rem;
	margin-bottom: 4.3rem;

	h1 {
		font-weight: 600;
		margin-bottom: 1.6rem;
	}
`;

export const SubHeading = styled.div`
	font-family: "Roboto Condensed";
	font-weight: 700;
	font-size: 1.8rem;
	text-transform: uppercase;
	line-height: 1.8rem;
	margin-bottom: 1rem;
`;

export const SelectionBoxRow = styled.div`
	display: flex;
	gap: 1.2rem;
	margin-bottom: 2.4rem;
`;

export const SelectionBox = styled.button`
	min-width: 3.2rem;
	min-height: 3.2rem;
	${({ $isSizeBox }) => $isSizeBox && `width: 6.3rem; height: 4.5rem;`}
	padding: 1rem 1.5rem;
	font-family: "Source Sans Pro", sans-serif;
	background-color: ${({ $colorHex }) => $colorHex || "transparent"};
	border: 1px solid var(--primary-text-color);
	transition: all 0.2s ease-in-out;

	&.selected {
		${({ $isSizeBox }) =>
			$isSizeBox && `background-color: black; color: white;`}
		${({ $isColorBox }) =>
			$isColorBox &&
			`border: none; outline: 1px solid var(--primary-green); outline-offset: 2px;`}
	}
`;

export const PrizeRow = styled.div`
	margin-top: 3.6rem;
	margin-bottom: 2rem;

	.prize {
		font-weight: 700;
		font-size: 2.4rem;
		padding: 0.8rem 0;
		line-height: 1.8rem;
	}
`;

export const CtaBtn = styled.button`
	color: var(--primary-bg);
	text-transform: uppercase;
	font-weight: 600;
	border: none;
	padding: 1.6rem 3.2rem;
	width: 29.2rem;
	height: 5.2rem;
	background-color: var(--primary-green);
	margin-bottom: 4rem;
`;

export const Desc = styled.p`
	font-family: "Roboto", sans-serif;
	line-height: 2.6rem;
`;
