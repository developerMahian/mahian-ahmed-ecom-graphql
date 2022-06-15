import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: "cart",
	initialState: {
		products: [],
		totalQuantity: 0,
		totalPrice: 0,
	},
	reducers: {
		addProduct: (state, { payload }) => {
			// console.log(action.payload);
			// const productPrice = action.payload.prices?.filter(
			//     ({ currency: { label } }) => label === this.props.currency
			// )[0];

			// default empty values for destructuring optionally without errors...
			// const { amount, currency: { symbol } = {} } = productPrice || {};

			// console.log(state.currency);

			const existingProductIndex = state.products.findIndex(
				(product) => product.id === payload.id
			);

			if (existingProductIndex === -1) {
				state.products.push({ ...payload, quantity: 1 });
			} else {
				state.products[existingProductIndex].quantity += 1;
			}

			state.totalQuantity += 1;
			state.totalPrice += payload.amount;
		},
	},
});

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
