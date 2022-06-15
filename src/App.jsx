import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import { Header } from "./components";
import { CartPage, Page404, ProductDetails, ProductListing } from "./pages";

class App extends Component {
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
							path="/product-details/:name"
							component={ProductDetails}
						/>
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
