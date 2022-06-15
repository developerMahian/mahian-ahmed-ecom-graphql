import { Component, createRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import parse from "html-react-parser";

import getProduct from "../../queries/GetProduct";
import { addProduct } from "../../features/cart/cartSlice";

import {
	Container,
	CtaBtn,
	Desc,
	Heading,
	HiddenRadio,
	ImageCol,
	InputGroup,
	PrizeRow,
	SelectionLabel,
	SelectionRow,
	SubHeading,
	TextCol,
	ThumbnailGroup,
} from "./ProductDetails.styles";

class ProductDetails extends Component {
	constructor(props) {
		super(props);
		this.previewImgRef = createRef();
		this.state = {
			product: {},
			selectedAttributes: [
				{
					attributeType: "Size",
				},
				{
					attributeType: "Capacity",
				},
				{
					attributeType: "Color",
				},
				{
					attributeType: "With USB 3 ports",
				},
				{
					attributeType: "Touch ID in keyboard",
				},
			],
		};
	}

	async componentDidMount() {
		const productName = this.props?.match.params.name;

		const { product: queryProduct } = await getProduct(productName);

		this.setState({ product: queryProduct });
	}

	render() {
		const { name, description, brand, gallery, attributes, prices } =
			this.state.product;

		const productPrice = prices?.filter(
			({ currency: { label } }) => label === this.props.currency
		)[0];

		// default empty values for destructuring optionally without errors...
		const { amount, currency: { symbol } = {} } = productPrice || {};

		const attributeHandler = (attrId, item) => {
			const newAttrs = this.state.selectedAttributes?.map((attr) => {
				return attr.attributeType === attrId
					? { ...attr, ...item }
					: attr;
			});

			this.setState({
				selectedAttributes: newAttrs,
			});
		};

		return (
			<Container>
				<ImageCol>
					<ThumbnailGroup>
						{gallery?.length > 1 &&
							gallery?.map((imgUrl) => (
								<img
									key={imgUrl}
									src={imgUrl}
									alt={`${name} product preview image`}
									width={80}
									onClick={() =>
										(this.previewImgRef.current.src =
											imgUrl)
									}
								/>
							))}
					</ThumbnailGroup>

					<img
						ref={this.previewImgRef}
						src={gallery?.[0]}
						alt={`${name} product preview image`}
						width={610}
						height={510}
					/>
				</ImageCol>

				<TextCol>
					<Heading>
						<h1 className="brand">{brand}</h1>
						<h1 className="title">{name}</h1>
					</Heading>

					{attributes?.map(({ id: attrId, name, items }) => (
						<div key={attrId}>
							<SubHeading>{name}:</SubHeading>
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
												onChange={() =>
													attributeHandler(
														attrId,
														item
													)
												}
											/>
											<SelectionLabel
												htmlFor={attrId + id}
												title={displayValue}
												$isSizeBox={attrId === "Size"}
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

					<PrizeRow>
						<SubHeading>prize:</SubHeading>
						<p className="prize">{symbol + amount || ""}</p>
					</PrizeRow>

					<CtaBtn
						onClick={() => {
							this.props.addProduct({
								...this.state.product,
								attributesForCart:
									this.state.selectedAttributes,
								amount,
							});
						}}
					>
						add to cart
					</CtaBtn>

					<Desc>
						{parse(description || "", {
							replace: ({ name }) =>
								name && name === "h1" && <></>,
						})}
					</Desc>
				</TextCol>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	currency: state.currency.label,
	cart: state.cart,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ addProduct }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
