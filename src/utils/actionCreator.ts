const actionCreator = (type: string, ...argNames: any) => {
  return (...values: any) => {
    if (argNames.length === values.length) {
      let action: any = { type };
      if (argNames.length && values.length) {
        argNames.forEach((arg: any, index: number) => {
          action[argNames[index]] = values[index];
        });
      }
      return action;
    }
  };
};

export default actionCreator;
