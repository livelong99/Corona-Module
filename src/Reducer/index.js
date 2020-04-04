import {combineReducers} from 'redux';
import India from './India';
import indiaTotal from './IndiaTotal';
import World from './World';
import worldTotal from './worldTotal';
import History from './History';
 
const allReducers = combineReducers({
    india: India,
    indiaTotal: indiaTotal,
    world:World,
    worldTotal: worldTotal,
    history: History
});
export default allReducers;