import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from '@redux-saga/core';
import logger from 'redux-logger';
import rootReducer from '../reducers';
import rootSaga from '../sagas';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer, 
    applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch