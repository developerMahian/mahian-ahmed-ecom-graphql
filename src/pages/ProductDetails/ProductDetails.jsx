import { Component, createRef } from "react";
import { connect } from "react-redux";
import parse from "html-react-parser";

import getProduct from "../../queries/GetProduct";
import { addProduct } from "../../features/cart/cartSlice";

import {
	Container,
	Desc,
	Heading,
	ImageCol,
	PreviewImgWrapper,
	PrizeRow,
	SubHeading,
	TextCol,
	ThumbnailGroup,
} from "./ProductDetails.styles";
import {
	HiddenRadio,
	InputGroup,
	SelectionLabel,
	SelectionRow,
	CtaBtn,
} from "../../components/Shared/ProductAttrBtn.styles";
import { isEmpty } from "lodash";

class ProductDetails extends Component {
	constructor(props) {
		super(props);
		this.previewImgRef = createRef();
		this.state = {
			product: {},
			selectedAttributes: {},
		};
	}

	async componentDidMount() {
		const productName = this.props?.match.params.name;

		const { product: queryProduct } = await getProduct(productName);

		this.setState({ product: queryProduct });
	}

	checkEmptyObject = (obj) => {
		return Object.keys(obj).length === 0 && obj.constructor === Object;
	};

	attributeHandler = (attrId, item) => {
		this.setState({
			selectedAttributes: {
				...this.state.selectedAttributes,
				[attrId]: {
					...item,
				},
			},
		});
	};

	sortVariantIdProps = () => {
		let variantID = this.state.product.id;

		const objKeys = Object.keys(this.state.selectedAttributes);
		const sortingArr = this.state.product.attributes?.map((arr) => arr.id);

		const sortedObjKeys = objKeys.sort(
			(a, b) => sortingArr.indexOf(a) - sortingArr.indexOf(b)
		);

		sortedObjKeys.forEach(
			(key) =>
				(variantID += `-(${key.toLowerCase()} - ${this.state.selectedAttributes[
					key
				].id.toLowerCase()})`)
		);

		return variantID;
	};

	addToCartHandler = (priceObj) => {
		const variantID = this.sortVariantIdProps();

		const { inStock, attributes } = this.state.product;

		if (!inStock) {
			alert("Sorry, this product is out of stock right now...");
		} else if (
			attributes.length > 0 &&
			this.checkEmptyObject(this.state.selectedAttributes)
		) {
			alert(
				"Before adding product to the Cart you must select attributes"
			);
		} else {
			this.props.addProduct({
				...this.state.product,
				selectedAttributesCart: this.state.selectedAttributes,
				variantID: !isEmpty(attributes) ? variantID : null,
				priceObj,
			});
		}
	};

	render() {
		const {
			selectedAttributes,
			product: {
				id,
				brand,
				name,
				description,
				gallery,
				attributes,
				prices,
				inStock,
			},
		} = this.state;

		const productPrice = prices?.filter(
			({ currency: { label } }) => label === this.props.currency
		)[0];

		// default empty values for destructuring optionally without errors...
		const { amount: calculatedPrice, currency: { symbol } = {} } =
			productPrice || {};

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

					<PreviewImgWrapper>
						<img
							ref={this.previewImgRef}
							src={gallery?.[0]}
							alt={`${name} product preview image`}
						/>
					</PreviewImgWrapper>
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
													this.attributeHandler(
														attrId,
														item
													)
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

					<PrizeRow>
						<SubHeading>prize:</SubHeading>
						<p className="prize">
							{symbol + calculatedPrice || ""}
						</p>
					</PrizeRow>

					<CtaBtn
						type="button"
						$inStock={inStock}
						onClick={() => this.addToCartHandler(productPrice)}
					>
						add to cart
					</CtaBtn>

					<Desc className="custom-scrollbar">
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

export default connect(mapStateToProps, { addProduct })(ProductDetails);
