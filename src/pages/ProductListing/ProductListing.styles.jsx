import styled from "styled-components";

export const Heading = styled.h1`
	font-size: 4.2rem;
	font-weight: 400;
	height: 6.8rem;
	margin-top: 7rem;
	margin-bottom: 10rem;
	text-transform: uppercase;
`;

export const CardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	justify-items: center;
	gap: 1.4rem;

	@media screen and (max-width: 960px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	@media screen and (max-width: 560px) {
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}
`;
