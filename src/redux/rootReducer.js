import { combineReducers } from "redux";
import loginModalReducer from "./reducer/loginModalReducer";

// =====================================================
// [R] huiwon 2022-10-17 root redux
// =====================================================
const rootReducer = combineReducers({
    loginModalReducer
});

export default rootReducer;