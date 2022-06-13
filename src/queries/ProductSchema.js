const ProductSchema = [
	"id",
	"name",
	"inStock",
	"gallery",
	"description",
	"category",
	"attributes {id, name, items {displayValue, value, id}}",
	"prices {amount, currency {label, symbol}}",
	"brand",
];

export default ProductSchema;
