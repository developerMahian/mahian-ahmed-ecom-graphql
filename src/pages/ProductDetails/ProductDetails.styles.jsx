import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 10rem;
	margin-top: 5rem;
`;

export const ImageCol = styled.div`
	display: flex;
	gap: 3.65rem;
`;

export const ThumbnailGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;

	img {
		min-width: 8rem;
		cursor: pointer;
	}
`;

// export const PreviewImg = styled.img`
// 	width: 6.1rem;
// 	height: 6.1rem;
// `

export const TextCol = styled.div`
	/* flex: 0.4; */
`;

export const Heading = styled.div`
	font-size: 3rem;
	margin-bottom: 4.3rem;

	.brand {
		font-weight: 600;
		margin-bottom: 1.6rem;
		line-height: 2.7rem;
	}

	.title {
		line-height: 3.5rem;
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

export const SelectionRow = styled.div`
	min-width: ${({ $isColorBox }) => (!$isColorBox ? "6.3rem" : "3.2rem")};
	min-height: ${({ $isColorBox }) => (!$isColorBox ? "4.5rem" : "3.2rem")};
	display: flex;
	gap: 1.125rem;
	margin-bottom: 2.4rem;
`;

export const InputGroup = styled.div`
	display: flex;

	input:checked + label {
		background-color: ${({ $isColorBox }) => !$isColorBox && "black"};
		color: ${({ $isColorBox }) => !$isColorBox && "white"};
		border-color: ${({ $isColorBox }) => $isColorBox && "transparent"};
		outline: ${({ $isColorBox }) =>
			$isColorBox && "1px solid var(--primary-green)"};
		outline-offset: ${({ $isColorBox }) => $isColorBox && "2px"};
	}
`;

export const HiddenRadio = styled.input`
	border: 0;
	clip: rect(0 0 0 0);
	clippath: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`;

export const SelectionLabel = styled.label`
	height: 100%;
	padding: 1rem 1.5rem;
	font-family: "Source Sans Pro", sans-serif;
	background-color: ${({ $colorHex }) => $colorHex || "transparent"};
	border: 1px solid var(--primary-text-color);
	text-align: center;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
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

export const Desc = styled.div`
	font-family: "Roboto", sans-serif;
	line-height: 2.6rem;
	max-width: 29.2rem;
`;
