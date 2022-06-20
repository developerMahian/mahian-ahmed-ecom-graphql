import { Component } from "react";

import { Container, BottomBtnSection } from "./MiniCart.styles";

class MiniCart extends Component {
	render() {
		return (
			<Container>
				<></>
				
				<BottomBtnSection>
					<button type="button">view bag</button>
					<button type="button">check out</button>
				</BottomBtnSection>
			</Container>
		);
	}
}

export default MiniCart;
