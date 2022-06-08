import { Component } from "react";

import { ReactComponent as CartIcon } from "../../../assets/svg/Empty-Cart.svg";

export class CartBtn extends Component {
	render() {
		return (
			<div>
				<CartIcon />
			</div>
		);
	}
}

export default CartBtn;
