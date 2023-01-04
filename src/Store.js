import { createStore } from "redux";
import rootReducer from "./Components/Reducers";

const store = createStore(rootReducer);

export default store;
