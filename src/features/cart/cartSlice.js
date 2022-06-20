import { createSlice } from "@reduxjs/toolkit";
import { isEqual, round } from "lodash";

const initialState = {
	products: [],
	totalQuantity: 0,
	// log: 0,
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

			let newVariant = false;

			if (existingProductIdIndex === -1) {
				state.products.push({ ...payload, quantity: 1 });
			} else {
				// if (existingVariantIndex >= 0) {
				// 	newVariant = !isEqual(
				// 		state.products[existingVariantIndex]
				// 			.selectedAttributesCart,
				// 		payload.selectedAttributesCart
				// 	);

				// 	if (newVariant) {
				// 		state.products.push({
				// 			...payload,
				// 			quantity: 1,
				// 		});
				// 	}
				// } else {
				if (existingVariantIndex >= 0) {
					state.products[existingVariantIndex].quantity += 1;
				} else {
					state.products[existingProductIdIndex].quantity += 1;
				}
				// }
			}

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
