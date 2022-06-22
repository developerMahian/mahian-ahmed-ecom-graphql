import { client, Query } from "@tilework/opus";
import ProductSchema from "./ProductSchema";

const getProduct = async (product) => {
	client.setEndpoint(process.env.REACT_APP_GRAPHQL_ENDPOINT);

	const queryProduct = new Query("product", true).addArgument("id", "String!", product).addFieldList(ProductSchema);

	return await client.post(queryProduct);
};

export default getProduct;
