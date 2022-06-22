import { createSlice } from "@reduxjs/toolkit";
import { isEmpty, round } from "lodash";

const initialState = {
	currency: { label: "USD", symbol: "$" },
	cart: {
		products: [],
		totalQuantity: 0,
		totalPrice: {
			currency: {},
			amount: 0,
		},
	},
};

const convertPriceCurrency = (currency, cart, insideAddProduct) => {
	let currencyPrices = [];

	cart.products?.forEach(({ prices, quantity, priceObj }) => {
		const correctPrice = prices?.filter(
			({ currency: { label } }) => label === currency.label
		)[0];

		currencyPrices.push({ ...correctPrice, quantity });

		if (insideAddProduct) {
			priceObj = correctPrice;
		} else {
			priceObj.amount = correctPrice.amount;
			priceObj.currency = correctPrice.currency;
		}
	});

	cart.totalPrice.currency = currency;
	cart.totalPrice.amount = currencyPrices.reduce(
		(prev, curr) => round(prev + curr.amount * curr.quantity, 2),
		0
	);
};

const rootSlice = createSlice({
	name: "rootReducer",
	initialState,
	reducers: {
		switchCurrency: ({ currency, cart }, { payload }) => {
			currency.label = payload.label;
			currency.symbol = payload.symbol;

			convertPriceCurrency(currency, cart);
		},
		addProduct: (state, { payload }) => {
			const { currency, cart } = state;

			const existingProductIdIndex = cart.products.findIndex(
				(product) => product.id === payload.id
			);

			const existingVariantIndex = cart.products.findIndex((product) => {
				return (
					payload.variantID && product.variantID === payload.variantID
				);
			});

			if (existingProductIdIndex === -1) {
				cart.products.push({ ...payload, quantity: 1 });
			} else {
				if (isEmpty(payload.attributes)) {
					cart.products[existingProductIdIndex].quantity += 1;
				} else if (existingVariantIndex === -1) {
					cart.products.push({
						...payload,
						quantity: 1,
					});
				} else {
					cart.products[existingVariantIndex].quantity += 1;
				}
			}

			convertPriceCurrency(currency, cart, true);

			cart.totalQuantity += 1;
		},
		removeProduct: ({ cart }, { payload }) => {
			const existingProductIdIndex = cart.products.findIndex(
				(product) => product.id === payload.id
			);

			const existingVariantIndex = cart.products.findIndex((product) => {
				return (
					payload.variantID && product.variantID === payload.variantID
				);
			});

			if (existingVariantIndex >= 0) {
				if (payload.quantity === 1) {
					cart.products.splice(existingVariantIndex, 1);
				} else {
					cart.products[existingVariantIndex].quantity -= 1;
				}
			} else {
				if (payload.quantity === 1) {
					cart.products.splice(existingProductIdIndex, 1);
				} else {
					cart.products[existingProductIdIndex].quantity -= 1;
				}
			}

			cart.totalQuantity -= 1;
			cart.totalPrice.amount = round(
				cart.totalPrice.amount - payload.priceObj.amount,
				2
			);
		},
		clearCart: (state) => {
			state.cart = initialState.cart;
		},
	},
});

export const { addProduct, removeProduct, clearCart, switchCurrency } =
	rootSlice.actions;

export default rootSlice.reducer;
