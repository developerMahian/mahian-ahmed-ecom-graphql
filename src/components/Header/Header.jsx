import { Component } from "react";
import { NavLink } from "react-router-dom";

import { Container, LeftNav, LogoWrapper, RightNav } from "./Header.styles";

import CartBtn from "./subComponents/CartBtn/CartBtn";
import SwitchCurrencyBtn from "./subComponents/SwitchCurrencyBtn/SwitchCurrencyBtn";

import { ReactComponent as HeaderLogo } from "../../assets/svg/a-logo.svg";

export class Header extends Component {
	render() {
		const { allCategories } = this.props;

		return (
			<Container>
				<LeftNav>
					{allCategories?.map((name) => (
						<NavLink key={name} exact to={name === "all" ? "/" : `/${name}`}>
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
			</Container>
		);
	}
}

export default Header;
