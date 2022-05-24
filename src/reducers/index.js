import increaseDecrease from "./increaseDecrease";
import {combineReducers} from 'redux';

// const rootReducer = combineReducers({
//    incrementDecremnet:increaseDecrease,
// })
// synchronous Function 
// we should not mutate the original state
const  rootReducer = (state ={counter:0},action) => {
  if(action.type === 'INCREMENT'){
   return {counter:state.counter + 1};
  }
  if(action.type === 'DECREMENT'){
   return {counter:state.counter - 1};
  }
  if(action.type === 'ADD'){
   return {counter:state.counter + action.payload};
  }
}

export default rootReducer;