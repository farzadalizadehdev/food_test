import * as actionTypes from "./actionTypes";
import axios from "axios";
import { api_url } from "../../api/api";

export const fetchVendorsStart = () => {
  return {
    type: actionTypes.FETCH_VENDORS_START,
  };
};

export const fetchVendorsSuccess = (vendors) => {
  return {
    type: actionTypes.FETCH_VENDORS_SUCCESS,
    vendors: vendors,
  };
};

export const fetchVendorsFail = () => {
  return {
    type: actionTypes.FETCH_VENDORS_FAIL,
  };
};
export const initFetchVendors = (params) => {
  
  return (dispatch) => {
    dispatch(fetchVendorsStart());
    axios({
      method: "GET",
      url: `${api_url}/vendors-list`,
      params: params,
    })
      .then((res) => {
        dispatch(fetchVendorsSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(fetchVendorsFail());
      });
  };
};

