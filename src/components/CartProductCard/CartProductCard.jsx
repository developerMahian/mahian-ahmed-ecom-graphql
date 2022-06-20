import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addProduct, removeProduct } from "../../features/cart/cartSlice";

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

		console.log(this.props.product);

		const highlightedAttr = attributes?.filter(
			(attr) => attr.id === selectedAttributesCart
		);

		return (
			<Container>
				<LeftCol>
					<Heading>{brand}</Heading>
					<SubHeading>{name}</SubHeading>
					<Price>{priceObj.currency.symbol + priceObj.amount}</Price>

					{attributes?.map(({ id: attrId, name, items }) => (
						<div key={attrId}>
							<SelectionHeading>{name}:</SelectionHeading>
							<SelectionRow $isColorBox={attrId === "Color"}>
								{items?.map((item) => {
									const { id, displayValue, value } = item;

									return (
										<InputGroup
											key={id}
											$isColorBox={attrId === "Color"}
										>
											<HiddenRadio
												type="radio"
												name={attrId}
												id={attrId + id}
												onChange={(e) =>
													e.preventDefault()
												}
											/>
											<SelectionLabel
												htmlFor={attrId + id}
												title={displayValue}
												$isColorBox={attrId === "Color"}
												$colorHex={
													attrId === "Color" && value
												}
											>
												{attrId !== "Color" && value}
											</SelectionLabel>
										</InputGroup>
									);
								})}
							</SelectionRow>
						</div>
					))}
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

					<img
						src={gallery[0]}
						alt={`${name} preview image`}
						width={200}
					/>
				</RightCol>
			</Container>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ addProduct, removeProduct }, dispatch);
};

export default connect(null, mapDispatchToProps)(CartProductCard);
