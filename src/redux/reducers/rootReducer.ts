import { combineReducers } from '@reduxjs/toolkit';
import { HomeReducer } from './home.reducer';
import { loadingReducer } from './loading.reducer';
import { loadMoreReducer } from './loadMore.reducer';
import { loadNoConnection } from './noInternet.reducer';

const rootReducers = combineReducers({
  no_connection: loadNoConnection,
  loadMore: loadMoreReducer,
  loading: loadingReducer,
  home: HomeReducer,
});

export type ReducerProps = ReturnType<typeof rootReducers>;

export default rootReducers;
