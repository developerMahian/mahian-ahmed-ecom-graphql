import { Component } from "react";

import { Container, SliderPagination } from "./ImageSlider.styles";

import { ReactComponent as ArrowIcon } from "../../assets/svg/image-slider-arrow.svg";

class ImageSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slideCount: 0,
		};
	}

	render() {
		return (
			<Container>
				{this.props.gallery?.length > 1 &&
					this.props.gallery?.map(
						(imgUrl, index) =>
							index === this.state.slideCount && (
								<img key={imgUrl} src={imgUrl} alt={`${this.props.productName} product preview image`} width={80} />
							)
					)}

				<SliderPagination>
					<ArrowIcon
						onClick={() => {
							if (this.state.slideCount > 0) {
								this.setState(({ slideCount }) => ({
									slideCount: slideCount - 1,
								}));
							}
						}}
					/>
					<ArrowIcon
						onClick={() => {
							if (this.state.slideCount < this.props.gallery.length - 1) {
								this.setState(({ slideCount }) => ({
									slideCount: slideCount + 1,
								}));
							}
						}}
					/>
				</SliderPagination>
			</Container>
		);
	}
}

export default ImageSlider;
