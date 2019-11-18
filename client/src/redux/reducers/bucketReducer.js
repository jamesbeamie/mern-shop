import {
  GET_ITEM,
  ADD_ITEM,
  DELETE_ITEM,
  BUSKET_LOADING
} from "./../../actions/types";
import uuid from "uuid";
const initialState = {
  busket: [],
  loading: false
};

const busketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEM:
      return {
        ...state,
        busket: action.payload,
        loading: false
      };
    case DELETE_ITEM:
      return {
        ...state,
        busket: state.busket.filter(anItem => anItem.id !== action.payload)
      };
    case ADD_ITEM:
      return {
        ...state,
        busket: [action.payload, ...state.busket]
      };
    case BUSKET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
export default busketReducer;
