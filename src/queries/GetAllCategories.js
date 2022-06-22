import { client, Field, Query } from "@tilework/opus";
import ProductSchema from "./ProductSchema";

const getAllCategories = async () => {
	client.setEndpoint(process.env.REACT_APP_GRAPHQL_ENDPOINT);

	const queryAllCategories = new Query("categories", true).addField("name").addField(new Field("products", true).addFieldList(ProductSchema));

	return await client.post(queryAllCategories);
};

export default getAllCategories;
