import { client, Query, Field } from "@tilework/opus";
import ProductSchema from "./ProductSchema";

const getCategory = async (category) => {
	client.setEndpoint(process.env.REACT_APP_GRAPHQL_ENDPOINT);

	const queryCategory = new Query("category", true)
		.addArgument("input", "CategoryInput", { title: category })
		.addField(new Field("products", true).addFieldList(ProductSchema));

	return await client.post(queryCategory);
};

export default getCategory;
