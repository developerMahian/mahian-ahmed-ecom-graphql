import { Component } from "react";
import styled from "styled-components";

import { getCurrencies } from "../../../queries";

import { ReactComponent as CurrencySwitchIcon } from "../../../assets/svg/currency-switch.svg";

class SwitchCurrencyBtn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currencyFromats: [],
		};
	}

	async componentDidMount() {
		const { currencies } = await getCurrencies();
		this.setState({ currencyFromats: currencies });
	}

	render() {
		const { currencyFromats } = this.state;

		return (
			<Container>
				<CurrencySwitchIcon />

				<Dropdown>
					{currencyFromats?.map(({ symbol, label }, index) => (
						<DropdownItem key={index}>
							{symbol} {label}
						</DropdownItem>
					))}
				</Dropdown>
			</Container>
		);
	}
}

const Container = styled.div`
	position: relative;
`;

const Dropdown = styled.ul`
	position: absolute;
	top: 100%;
	left: -15%;
	min-width: 11rem;
	background-color: var(--primary-bg);
	box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.li`
	text-align: center;
	font-size: 1.8rem;
	font-weight: 500;
	padding: 1rem;
	cursor: pointer;

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

export default SwitchCurrencyBtn;
