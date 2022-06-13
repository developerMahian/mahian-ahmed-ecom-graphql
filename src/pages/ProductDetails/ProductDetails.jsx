import { Component } from "react";
import { connect } from "react-redux";
import parse from "html-react-parser";

import getProduct from "../../queries/GetProduct";

import {
	Container,
	CtaBtn,
	Desc,
	Heading,
	ImageCol,
	PrizeRow,
	SelectionBox,
	SelectionBoxRow,
	SubHeading,
	TextCol,
} from "./ProductDetails.styles";

class ProductDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			detailsState: {},
		};
	}

	async componentDidMount() {
		const productName = this.props?.match.params.name;

		const { product } = await getProduct(productName);

		this.setState({ detailsState: product });
	}

	render() {
		const { id, name, description, gallery, attributes, prices } =
			this.state.detailsState;

		const productPrice = prices?.filter(
			({ currency: { label } }) => label === this.props.currency
		)[0];

		// default empty values for destructuring optionally without errors...
		const { amount, currency: { symbol } = {} } = productPrice || {};

		return (
			<Container>
				<ImageCol>
					{gallery?.map(
						(imgUrl, index) =>
							index < 1 && <img key={index} src={imgUrl} alt="" />
					)}
				</ImageCol>

				<TextCol>
					<Heading>
						<h1>{name}</h1>
						{parse(description || "")}
					</Heading>

					{attributes?.map(({ id: attrId, name, items }) => (
						<div key={attrId}>
							<SubHeading>{name}:</SubHeading>
							{/* {console.log(this.state.detailsState)} */}
							<SelectionBoxRow>
								{items?.map(({ id, displayValue, value }) => (
									<SelectionBox
										key={id}
										// className="selected"
										$isSizeBox={attrId === "Size"}
										$isColorBox={attrId === "Color"}
										$colorHex={attrId === "Color" && value}
										title={displayValue}
									>
										{attrId !== "Color" && value}
									</SelectionBox>
								))}
							</SelectionBoxRow>
						</div>
					))}

					<PrizeRow>
						<SubHeading>prize:</SubHeading>
						<p className="prize">{symbol + amount || ""}</p>
					</PrizeRow>

					<CtaBtn>add to cart</CtaBtn>
					<Desc>{description}</Desc>
				</TextCol>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	currency: state.currency.label,
});

export default connect(mapStateToProps)(ProductDetails);
