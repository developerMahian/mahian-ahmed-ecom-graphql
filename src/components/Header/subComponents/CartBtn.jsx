import { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import MiniCart from "../../MiniCart/MiniCart";

import { ReactComponent as CartIcon } from "../../../assets/svg/Empty-Cart.svg";

class CartBtn extends Component {
	render() {
		return (
			<Container>
				<CartIcon />
				<Qty>{this.props.totalQty}</Qty>

				<MiniCart />
			</Container>
		);
	}
}

const Container = styled.div`
	position: relative;
`;

const Qty = styled.div`
	position: absolute;
	top: -10px;
	right: -12px;
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	text-align: center;
	font-family: "Roboto", sans-serif;
	font-size: 1.4rem;
	font-weight: 700;
	color: white;
	background-color: var(--primary-text-color);
`;

const mapStateToProps = (state) => ({
	totalQty: state.cart.totalQuantity,
});

export default connect(mapStateToProps)(CartBtn);
