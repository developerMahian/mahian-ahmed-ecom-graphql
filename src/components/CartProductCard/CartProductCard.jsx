import { Component } from "react";
import { connect } from "react-redux";

import { addProduct, removeProduct } from "../../features/rootReducer";

import ImageSlider from "../ImageSlider/ImageSlider";

import {
	Container,
	LeftCol,
	RightCol,
	Heading,
	SubHeading,
	Price,
	SelectionHeading,
	QuantityBar,
} from "./CartProductCard.styles";
import {
	HiddenRadio,
	InputGroup,
	SelectionLabel,
	SelectionRow,
} from "../Shared/ProductAttrBtn.styles";

import { ReactComponent as PlusIcon } from "../../assets/svg/plus.svg";
import { ReactComponent as MinusIcon } from "../../assets/svg/minus.svg";

class CartProductCard extends Component {
	render() {
		const {
			brand,
			name,
			attributes,
			gallery,
			priceObj,
			quantity,
			selectedAttributesCart,
		} = this.props.product;

		const highlightedAttr = [];
		let chosenFeature = [];

		if (selectedAttributesCart) {
			chosenFeature = Object.keys(selectedAttributesCart);

			chosenFeature.forEach((key) => {
				highlightedAttr.push(key + selectedAttributesCart[key].id);
			});
		}

		const checkSelected = (id) => highlightedAttr.some((key) => key === id);

		return (
			<Container $miniCart={this.props.$miniCart}>
				<LeftCol>
					<Heading>{brand}</Heading>
					<SubHeading>{name}</SubHeading>
					<Price>{priceObj.currency.symbol + priceObj.amount}</Price>

					{attributes?.map(({ id: attrId, name, items }) =>
						chosenFeature?.map(
							(chosenAttrId) =>
								chosenAttrId === attrId && (
									<div key={attrId}>
										<SelectionHeading>
											{name}:
										</SelectionHeading>
										<SelectionRow
											$isColorBox={attrId === "Color"}
											$miniCart={this.props.$miniCart}
											$cartPage={this.props.$cartPage}
										>
											{items?.map((item) => {
												const {
													id,
													displayValue,
													value,
												} = item;

												return (
													<InputGroup
														key={id}
														$isColorBox={
															attrId === "Color"
														}
													>
														<HiddenRadio
															type="radio"
															id={attrId + id}
															checked={checkSelected(
																attrId + id
															)}
															onChange={(e) =>
																e.preventDefault()
															}
														/>
														<SelectionLabel
															htmlFor={
																attrId + id
															}
															title={displayValue}
															$isColorBox={
																attrId ===
																"Color"
															}
															$colorHex={
																attrId ===
																	"Color" &&
																value
															}
														>
															{attrId !==
																"Color" &&
																value}
														</SelectionLabel>
													</InputGroup>
												);
											})}
										</SelectionRow>
									</div>
								)
						)
					)}
				</LeftCol>

				<RightCol>
					<QuantityBar>
						<button
							type="button"
							onClick={() => {
								this.props.addProduct({
									...this.props.product,
								});
							}}
						>
							<PlusIcon />
						</button>

						<div className="quantity">{quantity}</div>

						<button
							type="button"
							onClick={() => {
								this.props.removeProduct({
									...this.props.product,
								});
							}}
						>
							<MinusIcon />
						</button>
					</QuantityBar>

					{this.props.$miniCart || gallery.length === 1 ? (
						<img src={gallery[0]} alt={`${name} preview image`} />
					) : (
						<ImageSlider gallery={gallery} productName={name} />
					)}
				</RightCol>
			</Container>
		);
	}
}

export default connect(null, { addProduct, removeProduct })(CartProductCard);
