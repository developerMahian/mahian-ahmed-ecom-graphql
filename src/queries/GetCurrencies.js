import { client, Query } from "@tilework/opus";

const getCurrencies = async () => {
	client.setEndpoint(process.env.REACT_APP_GRAPHQL_ENDPOINT);

	const queryCurrencies = new Query("currencies", true).addFieldList([
		"label",
		"symbol",
	]);

	return await client.post(queryCurrencies);
};

export default getCurrencies;
