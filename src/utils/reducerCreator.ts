const reducerCreator = (initialState: any, reducers: any) => {
  return (state = initialState, action: any) => {
    if (reducers.hasOwnProperty(action.type)) {
      return reducers[action.type](state, action);
    }
    return state;
  };
};

export default reducerCreator;
