// intital user
export const initialState = {
  isOpen: false,
};

// setting up user layer
export const actionTypes = {
    SET_OPEN : "SET_OPEN",
};

const reducer = (state, action) => {

  switch (action.type) {
    case actionTypes.SET_OPEN:
      return {
        ...state, 
        isOpen: action.isOpen,
      };
    
    default:
      return state;
  }
};

export default reducer;
