import { combineReducers } from "redux";
import ModalReducer from "./reducer/ModalReducer";
import AddressReducer from "./reducer/AddressReducer";

// =====================================================
// [R] huiwon 2022-10-17 root redux
// =====================================================
const rootReducer = combineReducers({
    ModalReducer,
    AddressReducer
});

export default rootReducer;