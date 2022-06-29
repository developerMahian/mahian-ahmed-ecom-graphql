import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import { Header } from "./components";
import { CartPage, Page404, ProductDetails, ProductListing } from "./pages";

import { getCategoriesList } from "./queries";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { allCategories: [] };
	}

	async componentDidMount() {
		const { categories } = await getCategoriesList();

		this.setState({ allCategories: categories?.map(({ name }) => name) });
	}

	render() {
		const categoryRoutes = this.state.allCategories?.map((category) => `/${category}`);

		return (
			<>
				<Header allCategories={this.state.allCategories} />

				<Main>
					<Switch>
						<Route exact path={["/", ...categoryRoutes]} component={ProductListing} />
						<Route exact path="/product-details/:name" component={ProductDetails} />
						<Route exact path="/cart" component={CartPage} />
						<Route path="*" component={Page404} />
					</Switch>
				</Main>
			</>
		);
	}
}

const Main = styled.main`
	margin: 8rem 0;
	padding: 1rem 10rem;

	@media screen and (max-width: 560px) {
		padding: 1rem 3rem;
	}
`;

export default App;
