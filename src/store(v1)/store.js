import { createStore } from "redux";

const store = createStore(counterReducer);

store.dispatch({ type: "counter/incremented" });
store.dispatch({ type: "counter/incremented" });
store.dispatch({ type: "counter/decremented" });

export default store;
