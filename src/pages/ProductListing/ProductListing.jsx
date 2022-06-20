import { Component } from "react";

import { ProductCard } from "../../components";
import { CardContainer, Heading } from "./ProductListing.styles";

import { getCategory } from "../../queries";

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
						<ProductCard key={index} product={product} />
					))}
				</CardContainer>
			</>
		);
	}
}

export default ProductListing;
