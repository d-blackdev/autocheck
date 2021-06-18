import {
  GET_PERMITS_FAIL,
  GET_PERMITS_LOADING,
  GET_PERMIT_DETAIL_FAIL,
  GET_PERMIT_DETAIL_LOADING,
  GET_PERMIT_DETAIL_SUCCESS,
  GET_PERMITS_SUCCESS,
} from "../constants/index";

export const getPermitsReducer = (
  state = { loading: false, error: "", data: [] },
  { type, payload }
) => {
  switch (type) {
    case GET_PERMITS_LOADING:
      return {
        loading: true,
        error: "",
        data: [],
      };
    case GET_PERMITS_SUCCESS:
      return {
        loading: false,
        error: "",
        data: payload,
      };
    case GET_PERMITS_FAIL:
      return {
        loading: false,
        error: payload,
        data: [],
      };

    default:
      return state
  }
};
export const getPermitDetailReducer = (
  state = { loading: false, error: "", data: {} },
  { type, payload }
) => {
  switch (type) {
    case GET_PERMIT_DETAIL_LOADING:
      return {
        loading: true,
        error: "",
        data: {},
      };
    case GET_PERMIT_DETAIL_SUCCESS:
      return {
        loading: false,
        error: "",
        data: payload,
      };
    case GET_PERMIT_DETAIL_FAIL:
      return {
        loading: false,
        error: payload,
        data: {},
      };

    default:
      return state;
  }
};
