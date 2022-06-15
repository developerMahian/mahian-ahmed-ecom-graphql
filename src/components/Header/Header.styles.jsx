import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderEl = styled.header`
	position: fixed;
	left: 0px;
	right: 0px;
	top: 0px;
	z-index: 100;
	height: 7rem;
	padding: 0 10rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: var(--primary-bg);
	box-shadow: 0 2px 1rem rgba(0, 0, 0, 0.035);

	@media screen and (max-width: 560px) {
		padding: 0 3rem;
	}
`;

export const LeftNav = styled.nav`
	display: flex;
	height: 100%;

	a {
		display: flex;
		align-items: center;
		height: 100%;
		font-weight: 500;
		text-transform: uppercase;
		padding: 0 1.85rem;
		border-bottom: 2px solid transparent;
		box-sizing: content-box;

		&.active {
			color: var(--primary-green);
			border-color: var(--primary-green);
		}
	}
`;

export const LogoWrapper = styled(Link)`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
`;

export const RightNav = styled.nav`
	display: flex;
	align-items: center;
	gap: 2.4rem;

	svg {
		cursor: pointer;
	}
`;
