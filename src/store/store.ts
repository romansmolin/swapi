import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './slices/searchSlice'


export const makeStore = () => {
  return configureStore({
    reducer: {
      search: searchSlice
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']