import { client, Query } from "@tilework/opus";

const checkForInStock = async (name) => {
	client.setEndpoint(process.env.REACT_APP_GRAPHQL_ENDPOINT);

	const queryIfInStock = new Query("product", true).addArgument("id", "String!", name).addField("inStock");

	return await client.post(queryIfInStock);
};

export default checkForInStock;
