import { createStore } from "redux";
import rootReducer from './rootReducer';


// =====================================================
// [R] huiwon 2022-10-17 redux store
// =====================================================
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store;