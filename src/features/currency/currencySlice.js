import { createSlice } from "@reduxjs/toolkit";

export const currencySlice = createSlice({
	name: "currency",
	initialState: { label: "USD", symbol: "$" },
	reducers: {
		switchCurrency: (state, action) => ({ ...action.payload }),
	},
});

export const { switchCurrency } = currencySlice.actions;

export default currencySlice.reducer;
