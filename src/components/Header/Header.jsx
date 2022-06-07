import { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import { getCategoriesList } from "../../queries";

import { ReactComponent as HeaderLogo } from "../../assets/svg/a-logo.svg";
import { ReactComponent as CurrencySwitchIcon } from "../../assets/svg/currency-switch.svg";
import { ReactComponent as CartIcon } from "../../assets/svg/cart.svg";

export class Header extends Component {
	constructor(props) {
		super(props);
		this.state = { allCategories: [] };
	}

	async componentDidMount() {
		const { categories } = await getCategoriesList();

		this.setState({ allCategories: categories?.map(({ name }) => name) });
	}

	render() {
		const { allCategories } = this.state;

		return (
			<HeaderEl>
				<LeftNav>
					{allCategories?.map((name) => (
						<NavLink key={name} to={name}>
							{name}
						</NavLink>
					))}
				</LeftNav>

				<LogoWrapper to="/">
					<HeaderLogo />
				</LogoWrapper>

				<RightNav>
					<CurrencySwitchIcon />
					<CartIcon />
				</RightNav>
			</HeaderEl>
		);
	}
}

const HeaderEl = styled.header`
	position: absolute;
	left: 0px;
	right: 0px;
	top: 0px;
	height: 7rem;
	padding: 0 8rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: var(--primary-bg);
`;

const LeftNav = styled.nav`
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

const LogoWrapper = styled(Link)`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
`;

const RightNav = styled.nav`
	display: flex;
	align-items: center;
	gap: 2.4rem;

	svg {
		cursor: pointer;
	}
`;

export default Header;
