const myActonCreator = (componentData) => {
  return {
    type: "my-action",
    payload: componentData,
  };
};

export default myActonCreator;
