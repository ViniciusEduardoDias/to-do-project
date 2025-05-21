export const addItem = (text) => {
  return {
    type: "ADD_ITEM",
    payload: {
      id: Date.now(),
      text,
      checked: false,
    },
  };
};

export const deleteItem = (id) => {
  return {
    type: "DELETE_ITEM",
    payload: id,
  };
};

export const changeDone = (id) => {
  return {
    type: "CHANGE_DONE",
    payload: id,
  };
};
