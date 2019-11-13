import React, { Component } from "react";
import { ADD_ITEM } from "./types";

const addToBusket = item => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};
export default addToBusket;
