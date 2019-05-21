import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import bookReducer from '../reducers/bookReducer'

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  bookReducer,
 
});
const store = createStore(reducer);

export default store;
