import { Component, createRef } from "react";
import { connect } from "react-redux";

import MiniCart from "../../../MiniCart/MiniCart";

import { CartOverlay, Container, Qty } from "./CartBtn.styles";
import { ReactComponent as CartIcon } from "../../../../assets/svg/Empty-Cart.svg";

class CartBtn extends Component {
	constructor(props) {
		super(props);
		this.dropdownRef = createRef();
		this.state = {
			isCartOpen: false,
		};
	}

	componentDidMount() {
		document.addEventListener("mousedown", this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener("mousedown", this.handleClickOutside);
	}

	handleClickOutside = (event) => {
		if (this.state.isCartOpen && !this.dropdownRef.current.contains(event.target)) {
			this.setState({ isCartOpen: false });
		}
	};

	render() {
		return (
			<>
				<Container ref={this.dropdownRef}>
					<div
						onClick={() =>
							this.setState((state) => ({
								isCartOpen: !state.isCartOpen,
							}))
						}
					>
						<CartIcon />
						<Qty>{this.props.totalQty}</Qty>
					</div>

					{this.state.isCartOpen && <MiniCart closeMiniCart={() => this.setState({ isCartOpen: false })} />}
				</Container>

				{this.state.isCartOpen && <CartOverlay />}
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	totalQty: state.cart.totalQuantity,
});

export default connect(mapStateToProps)(CartBtn);
