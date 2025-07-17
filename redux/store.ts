import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./features/authSlice";
import partnerReducer from "./features/partnerSlice";
import blogReducer from "./features/blogSlice";
import testimonialReducer from "./features/testimonialSlice";
import productReducer from "./features/productSlice";
import cartReducer from "./features/cartSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  partners: partnerReducer,
  blogs: blogReducer,
  testimonials: testimonialReducer,
  products: productReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // Only persist auth reducer
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
        ],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
