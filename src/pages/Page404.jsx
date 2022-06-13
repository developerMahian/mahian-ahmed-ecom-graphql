import { Component } from "react";
import styled from "styled-components";

class Page404 extends Component {
	render() {
		return <Heading>The page you're looking for was not found</Heading>;
	}
}

const Heading = styled.h1`
	text-align: center;
	margin-top: 2rem;
`;

export default Page404;
