import React, { useReducer } from "react";


const counterReducer = (state, action) => {
    switch (action.type) {
      case INCREMENT:
        return {count: state.count + 1};
      case DECREMENT:
        return {count: state.count - 1 };
      default:
        return state;
    }
  };

  const TestComponent = () => {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
     return (
        <h1>The count is {state.count}</h1>
        // <button onClick={() => dispatch({type: "increment"})}></button>
   
    );
     };
     