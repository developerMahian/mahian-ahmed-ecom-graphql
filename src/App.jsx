import { Component } from "react";
import styled from "styled-components";

import Header from "./components/Header/Header";

// import { getAllCategories } from "./queries";

class App extends Component {
	async componentDidMount() {
		// const result = await getAllCategories();
		// console.log(result);
	}

	render() {
		return (
			<>
				<Header />

				<Main>
					<h1>Hello</h1>
				</Main>
			</>
		);
	}
}

const Main = styled.main`
	margin-top: 8rem;
	padding: 1rem 8rem;
`;

export default App;
