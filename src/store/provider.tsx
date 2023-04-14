'use client';

import { Provider } from 'react-redux';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import catsReducer from './features/cats/slice';

const store = configureStore({
  reducer: {
    cats: catsReducer
  }
})


export function Providers({ children }: any) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
