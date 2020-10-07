import {createStore} from 'redux';

//action generators - function that return action objects
const incrementCount = ({incrementBy = 1} = {}) =>({
        type: 'INCREMENT',
        incrementBy
});
const decrementCount = ({decrementBy = 1} = {}) =>({
        type: 'DECREMENT',
        decrementBy

});
const resetCount = () =>({
    type: 'RESET',
    count: 0
});
const setCount = ({count}) =>({
        type: 'SET',
        count
});

//reducers
// Pure Functions
// 1. output is determined by inputs
// 2. never change state or action


const countReducer = (state = { count: 0 }, action) => {
    switch (action.type){
        case 'INCREMENT' : 
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT' : 
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count : action.count
            };
        case 'RESET' : 
            return {
                count: 0 
            };     
        default:
            return state;
    }
  
};

// reducer
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});
//unsubscribe();  - stop checking if the store changed


//Actions - an object that gets sent to the store 


//increment, decrement, reset 
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
store.dispatch(incrementCount({
    incrementBy: 5 
}));


store.dispatch(decrementCount());



store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(resetCount());

store.dispatch(setCount({count: 101}));