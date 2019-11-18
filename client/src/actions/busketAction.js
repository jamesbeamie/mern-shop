import axios from "axios";
import { GET_ITEM, BUSKET_LOADING } from "../actions/types";

export const fetchItems = () => dispatch => {
  dispatch(toglleBusketFetching());
  axios.get("/api/items").then(res =>
    dispatch({
      type: GET_ITEM,
      payload: res.data
    })
  );
};

export const toglleBusketFetching = () => {
  return {
    type: BUSKET_LOADING
  };
};
