const ProductSchema = [
	"id",
	"name",
	"inStock",
	"gallery",
	"description",
	"category",
	"attributes {id, name, items {value, id}}",
	"prices {amount, currency {label, symbol}}",
	"brand",
];

export default ProductSchema;
