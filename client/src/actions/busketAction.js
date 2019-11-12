import { GET_ITEM, ADD_ITEM, DELETE_ITEM } from "../actions/types";

const fetchItems = () => {
  return {
    type: GET_ITEM
  };
};

export default fetchItems;
