import { Component } from "react";
import { connect } from "react-redux";
import { round } from "lodash";

import { clearCart } from "../../features/rootReducer";

import { CartProductCard } from "../../components";

import { Heading, OrderInfo, OrderSection } from "./CartPage.styles";
import {
	CtaBtn,
	EmptyCart,
} from "../../components/Shared/ProductAttrBtn.styles";

class CartPage extends Component {
	render() {
		const { products, totalQuantity, totalPrice } = this.props.cart;

		return (
			<>
				<Heading>Cart</Heading>

				{products.length > 0 ? (
					<>
						{products?.map((product, index) => (
							<CartProductCard
								key={index}
								product={product}
								$cartPage={true}
							/>
						))}

						<OrderSection>
							<OrderInfo>
								<div className="label">
									<div>tax 21%:</div>
									<div>quantity:</div>
									<div>total:</div>
								</div>
								<div className="value">
									<div>
										{totalPrice.currency.symbol +
											round(totalPrice.amount * 0.21, 2)}
									</div>
									<div>{totalQuantity}</div>
									<div>
										{totalPrice.currency.symbol +
											totalPrice.amount}
									</div>
								</div>
							</OrderInfo>
							<CtaBtn
								type="button"
								$inStock={true}
								$isCartBtn={true}
								onClick={() => {
									alert(
										"Reached the end of the cycle. Clearing the Cart. Start over..."
									);
									this.props.clearCart();
								}}
							>
								order
							</CtaBtn>
						</OrderSection>
					</>
				) : (
					<EmptyCart>No products added to the cart yet....</EmptyCart>
				)}
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	cart: state.cart,
});

export default connect(mapStateToProps, { clearCart })(CartPage);
