
import { combineReducers } from 'redux';
import { userReducer } from '../reducers/useReducer';
import { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';
import { todoReducer } from './todoReducer';

 const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer
});

export const useTypedSelector:TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
