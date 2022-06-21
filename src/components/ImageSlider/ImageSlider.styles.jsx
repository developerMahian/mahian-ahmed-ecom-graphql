import styled from "styled-components";

export const Container = styled.div`
	position: relative;
`;

export const SliderPagination = styled.div`
	position: absolute;
	bottom: 1.6rem;
	right: 1.6rem;

	svg {
		width: 2.4rem;
		height: 2.4rem;
		/* without transform it looks a little smaller */
		transform: rotate(360deg);
		cursor: pointer;
		transition: transform 0.2s ease-in-out;

		&:hover {
			transform: scale(1.1);
		}

		&:last-child {
			transform: rotate(180deg);
			margin-left: 0.8rem;

			&:hover {
				transform: rotate(180deg) scale(1.1);
			}
		}
	}
`;
