import { createSlice } from "@reduxjs/toolkit";
import { isEqual, round } from "lodash";

const initialState = {
	products: [],
	totalQuantity: 0,
	log: [],
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
					isEqual(
						product.selectedAttributesCart,
						payload.selectedAttributesCart
					) && product.id === payload.id
				);
			});

			let newVariant = [];

			if (existingProductIdIndex === -1) {
				state.products.push({ ...payload, quantity: 1 });
			} else {
				state.products
					.slice()
					.reverse()
					.forEach((product) => {
						if (
							product.id === payload.id &&
							!isEqual(
								product.selectedAttributesCart,
								payload.selectedAttributesCart
							)
						) {
							console.log(newVariant.length);
							newVariant.push(payload);
						}
					});

				// if (existingVariantIndex >= 0) {
				if (newVariant.length > 0) {
					state.products.push({
						...payload,
						quantity: 1,
					});
				} else if (existingVariantIndex === -1) {
					state.products[existingProductIdIndex].quantity += 1;
				} else {
					state.products[existingVariantIndex].quantity += 1;
				}
			}

			state.log = newVariant;
			state.totalQuantity += 1;
			state.totalPrice.currency = payload.priceObj.currency;
			state.totalPrice.amount = round(
				state.totalPrice.amount + payload.priceObj.amount,
				2
			);
		},
		removeProduct: (state, { payload }) => {
			const existingVariantIndex = state.products.findIndex((product) => {
				return (
					isEqual(
						product.selectedAttributesCart,
						payload.selectedAttributesCart
					) && product.id === payload.id
				);
			});

			if (existingVariantIndex >= 0) {
				if (payload.quantity === 1) {
					state.products.splice(existingVariantIndex, 1);
				} else {
					state.products[existingVariantIndex].quantity -= 1;
				}
			} else {
				// state.products[existingProductIdIndex].quantity -= 1;
			}

			state.totalQuantity -= 1;

			state.totalPrice.amount = round(
				state.totalPrice.amount - payload.priceObj.amount,
				2
			);
		},
		clearCart: (state) => initialState,
	},
});

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
