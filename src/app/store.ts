import { type Action, configureStore, type ThunkAction} from "@reduxjs/toolkit";
import productSlice from "../features/product/productSlice";
import authSlice from "../features/auth/authSlice";



// * в store хранятся данные из всего react приложения
// они изменяются с помощью функции reducer, в которую передается action

export const store = configureStore({
  reducer: {
    // подключаем функции reducer для обработки данных из файлов slice
    products: productSlice.reducer,
    user: authSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;