import * as actionTypes from "./actionTypes";
import { updateObject } from "../../utils/utils";

const initialState = {
  vendors: null,
  loading: false,
  error: false,
};

const fetchVendorsStart = (state) => {
  return updateObject(state, {
    loading: true,
    error: false,
  });
};

const fetchVendorsSuccess = (state, action) => {
  return updateObject(state, {
    vendors: action.vendors,
    loading: false,
    error: false,
  });
};

const fetchVendorsFail = (state) => {
  return updateObject(state, {
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_VENDORS_START:
      return fetchVendorsStart(state, action);
    case actionTypes.FETCH_VENDORS_SUCCESS:
      return fetchVendorsSuccess(state, action);
    case actionTypes.FETCH_VENDORS_FAIL:
      return fetchVendorsFail(state, action);
    default:
      return state;
  }
};

export default reducer;
