import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import currencyReducer from "../features/currency/currencySlice";
import cartReducer from "../features/cart/cartSlice";

const persistConfig = {
	key: "root",
	version: 1,
	storage,
};

const rootReducer = combineReducers({
	currency: currencyReducer,
	cart: cartReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
// 	reducer: persistedReducer,
// 	middleware: (getDefaultMiddleware) =>
// 		getDefaultMiddleware({
// 			serializableCheck: {
// 				ignoredActions: [
// 					FLUSH,
// 					REHYDRATE,
// 					PAUSE,
// 					PERSIST,
// 					PURGE,
// 					REGISTER,
// 				],
// 			},
// 		}),
// });

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
			// thunk: {
			// 	extraArgument: () => (dispatch, getState) => {
			// 		const stateTwo = getState();

			// 		dispatch({
			// 			type: "cart/addProduct",
			// 			stateTwo,
			// 		});
			// 	},
			// },
		}),
});

export let persistor = persistStore(store);
