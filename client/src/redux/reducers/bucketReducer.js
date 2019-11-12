import { GET_ITEM, ADD_ITEM, DELETE_ITEM } from "./../../actions/types";
import uuid from "uuid";
const initialState = {
  busket: [
    {
      id: uuid(),
      name: "thunderbbolt"
    },
    {
      id: uuid(),
      name: "iMac"
    },
    {
      id: uuid(),
      name: "Monitor"
    },
    {
      id: uuid(),
      name: "airPods"
    }
  ]
};

const busketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEM:
      return {
        ...state
      };
    default:
      return state;
  }
};
export default busketReducer;
