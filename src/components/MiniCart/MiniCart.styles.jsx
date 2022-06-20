import styled from "styled-components";

export const Container = styled.div`
	position: absolute;
	top: 100%;
	right: 0;
	min-width: 32.5rem;
	padding: 3.4rem 1.6rem;
	background-color: var(--primary-bg);
	box-shadow: 0 0 1rem 1rem rgba(0, 0, 0, 0.1);
`;

// export const

export const BottomBtnSection = styled.div`
	display: flex;
	justify-content: space-between;

	button {
		width: 14.1rem;
		height: 4.3rem;
		font-size: 1.4rem;
		font-weight: 600;
		line-height: 120%;
		text-transform: uppercase;
		border: 1px solid rgba(0, 0, 0, 0.5);
	}

	button:last-child {
		color: var(--primary-bg);
		background-color: var(--primary-green);
		border: none;
	}
`;
