import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 10rem;
	margin-top: 5rem;

	@media only screen and (max-width: 950px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const ImageCol = styled.div`
	display: flex;
	gap: 3.65rem;
`;

export const ThumbnailGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	flex: 0.2;
	max-height: 56rem;
	min-width: 8rem;
	overflow-y: auto;

	img {
		cursor: pointer;
		transition: box-shadow 0.25s ease-in-out;

		&:hover {
			box-shadow: 0 0 1rem 2px rgba(0, 0, 0, 0.2);
		}
	}
`;

export const PreviewImgWrapper = styled.div`
	max-width: 60.1rem;
	overflow: hidden;

	img {
		width: 100%;
	}

	@media only screen and (max-width: 950px) {
		flex: 1;
	}
`;

export const TextCol = styled.div``;

export const Heading = styled.div`
	font-size: 3rem;
	margin-bottom: 4.3rem;

	.brand {
		font-weight: 600;
		margin-bottom: 1.6rem;
		line-height: 2.7rem;
	}

	.title {
		line-height: 3.5rem;
	}
`;

export const SubHeading = styled.div`
	font-family: "Roboto Condensed";
	font-weight: 700;
	font-size: 1.8rem;
	text-transform: uppercase;
	line-height: 1.8rem;
	margin-bottom: 1rem;
`;

export const PrizeRow = styled.div`
	margin-top: 3.6rem;
	margin-bottom: 2rem;

	.prize {
		font-weight: 700;
		font-size: 2.4rem;
		padding: 0.8rem 0;
		line-height: 1.8rem;
	}
`;

export const Desc = styled.div`
	font-family: "Roboto", sans-serif;
	line-height: 2.6rem;
	max-width: 29.2rem;
	max-height: 25rem;
	overflow-y: auto;
	/* box-shadow: inset 0 -2rem 2rem -2rem rgba(0, 0, 0, 0.2); */
`;
