import axios from "axios";
import { ADD_ITEM } from "./types";

const addToBusket = item => dispatch => {
  axios.post("/api/items", item).then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  );
};
export default addToBusket;
