// This is called React Context API

// setup data layer
// tracking user data and basket history
import React, { createContext, useContext, useReducer } from 'react';

// This is the data layer
export const StateContext = createContext();

// build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// This is how we use in inside of a components
export const useStateValue = () => useContext(StateContext);

// This is always fixed