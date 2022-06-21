import { createSlice } from "@reduxjs/toolkit";
import { isEmpty, round } from "lodash";

const initialState = {
	products: [],
	totalQuantity: 0,
	totalPrice: {
		currency: {},
		amount: 0,
	},
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProduct: (state, { payload }) => {
			const existingProductIdIndex = state.products.findIndex(
				(product) => product.id === payload.id
			);

			const existingVariantIndex = state.products.findIndex((product) => {
				return (
					payload.variantID && product.variantID === payload.variantID
				);
			});

			if (existingProductIdIndex === -1) {
				state.products.push({ ...payload, quantity: 1 });
			} else {
				if (isEmpty(payload.attributes)) {
					state.products[existingProductIdIndex].quantity += 1;
				} else if (existingVariantIndex === -1) {
					state.products.push({
						...payload,
						quantity: 1,
					});
				} else {
					state.products[existingVariantIndex].quantity += 1;
				}
			}

			state.totalQuantity += 1;
			state.totalPrice.currency = payload.priceObj.currency;
			state.totalPrice.amount = round(
				state.totalPrice.amount + payload.priceObj.amount,
				2
			);
		},
		removeProduct: (state, { payload }) => {
			const existingProductIdIndex = state.products.findIndex(
				(product) => product.id === payload.id
			);

			const existingVariantIndex = state.products.findIndex((product) => {
				return (
					payload.variantID && product.variantID === payload.variantID
				);
			});

			if (existingVariantIndex >= 0) {
				if (payload.quantity === 1) {
					state.products.splice(existingVariantIndex, 1);
				} else {
					state.products[existingVariantIndex].quantity -= 1;
				}
			} else {
				if (payload.quantity === 1) {
					state.products.splice(existingProductIdIndex, 1);
				} else {
					state.products[existingProductIdIndex].quantity -= 1;
				}
			}

			state.totalQuantity -= 1;
			state.totalPrice.amount = round(
				state.totalPrice.amount - payload.priceObj.amount,
				2
			);
		},
		clearCart: () => initialState,
	},
});

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
