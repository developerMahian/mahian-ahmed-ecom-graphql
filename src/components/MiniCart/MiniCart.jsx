import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { clearCart } from "../../features/rootReducer";
import CartProductCard from "../CartProductCard/CartProductCard";

import { EmptyCart } from "../Shared/ProductAttrBtn.styles";
import {
	Container,
	CartItemSection,
	BottomBtnSection,
	TotalQty,
} from "./MiniCart.styles";

class MiniCart extends Component {
	render() {
		const { products, totalQuantity, totalPrice } = this.props.cart;

		return (
			<Container>
				<CartItemSection>
					<h3>
						<span>my bag,</span> {totalQuantity} items
					</h3>

					{products.length > 0 ? (
						<>
							{products?.map((product, index) => (
								<CartProductCard
									key={index}
									product={product}
									$miniCart={true}
								/>
							))}
						</>
					) : (
						<EmptyCart>
							No products added to the cart yet....
						</EmptyCart>
					)}
				</CartItemSection>

				{products.length > 0 && (
					<TotalQty>
						<div>Total</div>
						<div>
							{totalPrice.currency.symbol + totalPrice.amount}
						</div>
					</TotalQty>
				)}

				<BottomBtnSection>
					<Link to="/cart" onClick={this.props.closeMiniCart}>
						view bag
					</Link>
					<Link to="#" onClick={this.props.clearCart}>
						check out
					</Link>
				</BottomBtnSection>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	cart: state.cart,
});

export default connect(mapStateToProps, { clearCart })(MiniCart);
