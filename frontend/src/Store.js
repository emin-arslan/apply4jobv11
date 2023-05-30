import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/reducers/RootReducer"
import createSagaMiddleware from "redux-saga";
//const store = createStore(rootReducer);
import rootSaga  from "./redux/saga/RootSaga"
const sagaMiddleWare = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleWare],
});

sagaMiddleWare.run(rootSaga);


export default store;
