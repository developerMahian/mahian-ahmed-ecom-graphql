import styled from "styled-components";

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
	font-family: "Source Sans Pro", sans-serif;
	background-color: ${({ $colorHex }) => $colorHex || "transparent"};
	border: 1px solid var(--primary-text-color);
	text-align: center;
	transition: all 0.2s ease-in-out;
`;

export const SelectionRow = styled.div`
	display: flex;
	gap: 1.125rem;
	margin-bottom: ${({ $miniCart }) => ($miniCart ? "0.8rem" : "2.4rem")};

	${SelectionLabel} {
		cursor: ${({ $miniCart }) => !$miniCart && "pointer"};

		${({ $miniCart, $isColorBox }) => {
			if ($miniCart) {
				if ($isColorBox) {
					return "min-width: 1.6rem; min-height: 1.6rem; font-size: 1.4rem; padding: 0.4rem 0.65rem;";
				} else {
					return "min-width: 2.4rem; min-height: 2.4rem; font-size: 1.4rem; padding: 0.4rem 0.65rem;";
				}
			} else {
				if ($isColorBox) {
					return "min-width: 3.2rem; min-height: 3.2rem; padding: 1rem 1.5rem;";
				} else {
					return "min-width: 6.3rem; min-height: 4.5rem; padding: 1rem 1.5rem;";
				}
			}
		}};
	}
`;

export const CtaBtn = styled.button`
	text-transform: uppercase;
	font-size: ${({ $isCartBtn }) => ($isCartBtn ? "1.4rem" : "1.6rem")};
	font-weight: 600;
	border: none;
	padding: ${({ $isCartBtn }) => ($isCartBtn ? "1.3rem" : "1.6rem")} 3.2rem;
	width: ${({ $isCartBtn }) => ($isCartBtn ? "100%" : "29.2rem")};
	height: ${({ $isCartBtn }) => ($isCartBtn ? "4.3rem" : "5.2rem")};
	color: var(--primary-bg);
	background-color: var(--primary-green);
	margin-bottom: 4rem;
	opacity: ${({ $inStock }) => !$inStock && ".7"};
	cursor: ${({ $inStock }) => !$inStock && "no-drop"};
`;

export const EmptyCart = styled.h1`
	font-size: 2.25rem;
	font-weight: 600;
	text-align: center;
`;
