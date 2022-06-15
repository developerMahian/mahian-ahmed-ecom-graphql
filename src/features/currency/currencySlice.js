import { createSlice } from "@reduxjs/toolkit";

export const currencySlice = createSlice({
	name: "currency",
	initialState: { label: "USD", symbol: "$" },
	reducers: {
		switchCurrency: (state, { payload }) => {
			state.label = payload.label;
			state.symbol = payload.symbol;
		},
	},
});

export const { switchCurrency } = currencySlice.actions;

export default currencySlice.reducer;
