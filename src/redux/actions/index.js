import {
  GET_PERMITS_FAIL,
  GET_PERMITS_LOADING,
  GET_PERMIT_DETAIL_FAIL,
  GET_PERMIT_DETAIL_LOADING,
  GET_PERMIT_DETAIL_SUCCESS,
  GET_PERMITS_SUCCESS,
} from "../constants/index";

import axios from "axios";

export const get_Permits = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_PERMITS_LOADING,
    });

    const date = new Date().getFullYear();

    const config = {
      headers: {
        "X-App-Token": "gQ2CzmotcYClupxZUd5U9wUhP",
      },
    };
    const { data } = await axios.get(
      "https://data.cityofchicago.org/resource/ydr8-5enu.json?$limit=10&$where=issue_date between '2021-06-10T12:00:00' and '2021-12-10T14:00:00'",
      config
    );

    dispatch({
      type: GET_PERMITS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error, "ERROR");
    dispatch({
      type: GET_PERMITS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const get_Permit_Detail = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_PERMIT_DETAIL_LOADING,
    });

    const config = {
      headers: {
        "X-App-Token": "gQ2CzmotcYClupxZUd5U9wUhP",
      },
    };
    const { data } = await axios.get(
      ` https://data.cityofchicago.org/resource/ydr8-5enu.json?id=${id}`,
      config
    );

    dispatch({
      type: GET_PERMIT_DETAIL_SUCCESS,
      payload: data[0],
    });
  } catch (error) {
    console.log(error, "ERROR");
    dispatch({
      type: GET_PERMIT_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
