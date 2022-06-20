import styled from "styled-components";

export const LeftCol = styled.div``;

export const Heading = styled.h2`
	font-weight: 600;
	margin-bottom: 1.6rem;
`;

export const SubHeading = styled.h2`
	margin-bottom: 2rem;
`;

export const Price = styled.h3`
	font-weight: 700;
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
`;

export const QuantityBar = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 2rem;
	align-items: center;

	.quantity {
		font-weight: 500;
	}

	button {
		background-color: transparent;
		border: 1px solid var(--primary-text-color);
		transition: transform 0.1s ease-in-out;

		&:active {
			transform: scale(0.95);
		}
	}
`;

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	align-items: stretch;
	padding: ${({ $miniCart }) => ($miniCart ? "2rem" : "2.4rem")} 0;

	border-top: ${({ $miniCart }) => !$miniCart && "1px solid #e5e5e5"};
	border-bottom: ${({ $miniCart }) => !$miniCart && "1px solid #e5e5e5"};

	${LeftCol} h2 {
		font-size: ${({ $miniCart }) => !$miniCart && "3rem"};
		font-weight: ${({ $miniCart }) => $miniCart && "300"};
		margin-bottom: ${({ $miniCart }) => $miniCart && "0"};
		line-height: ${({ $miniCart }) => ($miniCart ? "2.56rem" : "2.7rem")};
	}

	${Price} {
		font-size: ${({ $miniCart }) => !$miniCart && "2.4rem"};
		font-weight: ${({ $miniCart }) => $miniCart && "500"};
		margin-top: ${({ $miniCart }) => $miniCart && "0.4rem"};
		margin-bottom: ${({ $miniCart }) => $miniCart && "0.8rem"};
	}

	${SelectionHeading} {
		font-size: ${({ $miniCart }) => $miniCart && "1.4rem"};
		font-weight: ${({ $miniCart }) => $miniCart && "400"};
		line-height: ${({ $miniCart }) => $miniCart && "1.6rem"};
		margin-bottom: ${({ $miniCart }) => $miniCart && "0.8rem"};
	}

	${QuantityBar} {
		.quantity {
			font-size: ${({ $miniCart }) => !$miniCart && "2.4rem"};
		}

		button {
			width: ${({ $miniCart }) => ($miniCart ? "2.4rem" : "4.5rem")};
			height: ${({ $miniCart }) => ($miniCart ? "2.4rem" : "4.5rem")};
			opacity: ${({ $miniCart }) => !$miniCart && "0.7"};

			svg {
				width: ${({ $miniCart }) => ($miniCart ? "1.8rem" : "2.5rem")};
				margin-top: ${({ $miniCart }) =>
					$miniCart ? "0.2rem" : "0.4rem"};
			}
		}
	}

	${RightCol} {
		gap: ${({ $miniCart }) => ($miniCart ? "0.8rem" : "2.4rem")};

		img {
			width: ${({ $miniCart }) => ($miniCart ? "100px" : "200px")};
		}
	}
`;
