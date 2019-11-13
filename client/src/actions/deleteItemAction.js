import { DELETE_ITEM } from "./types";

const deleteBusketAction = id => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};

export default deleteBusketAction;
