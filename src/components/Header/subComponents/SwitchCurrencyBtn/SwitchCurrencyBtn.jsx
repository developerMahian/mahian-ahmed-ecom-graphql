import { Component, createRef } from "react";
import { connect } from "react-redux";

import { getCurrencies } from "../../../../queries";
import { switchCurrency } from "../../../../features/rootReducer";

import { ReactComponent as ChevronDownIcon } from "../../../../assets/svg/currency-switch.svg";
import { Container, Dropdown, DropdownItem, IconWrapper } from "./SwitchCurrencyBtn.styles";

class SwitchCurrencyBtn extends Component {
	constructor(props) {
		super(props);
		this.dropdownRef = createRef();
		this.state = {
			currencyFromats: [],
			dropdownOpen: false,
		};
	}

	async componentDidMount() {
		const { currencies } = await getCurrencies();
		this.setState({ currencyFromats: currencies });

		document.addEventListener("mousedown", this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener("mousedown", this.handleClickOutside);
	}

	handleClickOutside = (event) => {
		if (this.state.dropdownOpen && !this.dropdownRef.current.contains(event.target)) {
			this.setState({ dropdownOpen: false });
		}
	};

	render() {
		const { currencyFromats, dropdownOpen } = this.state;
		const { currencySymbol, switchCurrency } = this.props;

		return (
			<Container ref={this.dropdownRef}>
				<IconWrapper
					onClick={() =>
						this.setState((state) => ({
							dropdownOpen: !state.dropdownOpen,
						}))
					}
				>
					{currencySymbol}
					<ChevronDownIcon />
				</IconWrapper>

				{dropdownOpen && (
					<Dropdown>
						{currencyFromats?.map(({ symbol, label }, index) => (
							<DropdownItem
								key={index}
								onClick={() => {
									switchCurrency({ label, symbol });
									this.setState({ dropdownOpen: false });
								}}
							>
								{symbol} {label}
							</DropdownItem>
						))}
					</Dropdown>
				)}
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	currencyLabel: state.currency.label,
	currencySymbol: state.currency.symbol,
});

export default connect(mapStateToProps, { switchCurrency })(SwitchCurrencyBtn);
