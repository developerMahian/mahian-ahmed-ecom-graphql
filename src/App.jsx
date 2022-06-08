import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import { Header } from "./components";
import { CartPage, ProductDetails, ProductListing } from "./pages";

import { getAllCategories } from "./queries";

class App extends Component {
	// async componentDidMount() {
	// const result = await getAllCategories();
	// console.log(result);
	// }

	render() {
		return (
			<>
				<Header />

				<Main>
					<Switch>
						<Route
							exact
							path={["/", "/all", "/clothes", "/tech"]}
							component={ProductListing}
						/>
						<Route
							exact
							path="/product-details"
							component={ProductDetails}
						/>
						<Route exact path="/cart" component={CartPage} />
					</Switch>
				</Main>
			</>
		);
	}
}

const Main = styled.main`
	margin: 8rem 0;
	padding: 1rem 8rem;

	@media screen and (max-width: 560px) {
		padding: 1rem 3rem;
	}
`;

export default App;
