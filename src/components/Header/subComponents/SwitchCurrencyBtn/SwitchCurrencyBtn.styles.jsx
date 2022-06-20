import styled from "styled-components";

export const Container = styled.div`
	position: relative;
`;

export const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 0.65rem;
	font-size: 1.8rem;
	font-weight: 600;
	cursor: pointer;
`;

export const Dropdown = styled.ul`
	position: absolute;
	top: 100%;
	left: -15%;
	min-width: 11rem;
	background-color: var(--primary-bg);
	box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.1);
`;

export const DropdownItem = styled.li`
	text-align: center;
	font-size: 1.8rem;
	font-weight: 500;
	padding: 1rem;
	cursor: pointer;
	transition: background-color 0.2s ease-in-out;

	&:first-child {
		padding-top: 1.5rem;
	}

	&:last-child {
		padding-bottom: 1.5rem;
	}

	&:hover {
		background-color: #eee;
	}
`;
