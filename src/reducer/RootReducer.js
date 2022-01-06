import handleMyCounter from "./CounterReducer";
import { combineReducers} from 'redux';

const RootReducer = combineReducers({
    handleMyCounter
})

export default RootReducer;