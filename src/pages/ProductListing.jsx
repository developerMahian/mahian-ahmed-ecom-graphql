import { Component } from "react";
import styled from "styled-components";

import { ProductCard } from "../components";
import { getCategory } from "../queries";

class ProductListing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productList: [],
			categoryHeading: "",
		};
	}

	componentDidMount() {
		this.getCategory();
	}

	componentDidUpdate(prevProps) {
		if (prevProps?.location.pathname !== this.props?.location.pathname) {
			this.getCategory();
		}
	}

	getCategory = async () => {
		const { pathname } = this.props.location;
		const categoryTitle = pathname === "/" ? "all" : pathname.slice(1);

		const {
			category: { products },
		} = await getCategory(categoryTitle);

		this.setState({
			productList: products,
			categoryHeading: categoryTitle,
		});
	};

	render() {
		const { productList, categoryHeading } = this.state;

		return (
			<>
				<Heading>{categoryHeading}</Heading>

				<CardContainer>
					{productList?.map((product, index) => (
						<ProductCard key={index} {...product} />
					))}
				</CardContainer>
			</>
		);
	}
}

const Heading = styled.h1`
	font-size: 4.2rem;
	font-weight: 400;
	height: 6.8rem;
	margin-top: 7rem;
	margin-bottom: 10rem;
	text-transform: uppercase;
`;

const CardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	justify-items: center;
	gap: 1.4rem;

	@media screen and (max-width: 960px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	@media screen and (max-width: 560px) {
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}
`;

export default ProductListing;
