import { client, Query } from "@tilework/opus";

const getCategoriesList = async () => {
	client.setEndpoint(process.env.REACT_APP_GRAPHQL_ENDPOINT);

	const queryCategoriesList = new Query("categories").addField("name");

	return await client.post(queryCategoriesList);
};

export default getCategoriesList;
