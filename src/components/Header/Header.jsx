import { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import { getCategoriesList } from "../../queries";
import { HeaderEl, LeftNav, LogoWrapper, RightNav } from "./Header.styles";

import CartBtn from "./subComponents/CartBtn/CartBtn";
import SwitchCurrencyBtn from "./subComponents/SwitchCurrencyBtn/SwitchCurrencyBtn";

import { ReactComponent as HeaderLogo } from "../../assets/svg/a-logo.svg";

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
						<NavLink
							key={name}
							exact
							to={name === "all" ? "/" : `/${name}`}
						>
							{name}
						</NavLink>
					))}
				</LeftNav>

				<LogoWrapper to="/">
					<HeaderLogo />
				</LogoWrapper>

				<RightNav>
					<SwitchCurrencyBtn />
					<CartBtn />
				</RightNav>
			</HeaderEl>
		);
	}
}

export default Header;
