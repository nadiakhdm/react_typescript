import axios, { HeadersDefaults } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ActionT, actionType } from "../../Type/type.types";
import { Dispatch } from "redux";
import { stateType } from "../store";
import { CommonHeaderProperties } from "../../Type/interface";
export const useTodo = () => {
  const todos = useSelector((state: stateType) => state.TodoList);
  const dispatch = useDispatch();
  return {
    todos,
    dispatch,
    AddTodo,
    FetchData,
    AddIssue,
    DetailData,
  };
};
export const initAxios = () => () => {
  axios.defaults.baseURL = "https://gitlab.com/api/v4/";
  axios.defaults.headers = {
    Content_Type: "application/x-www-form-urlencoded",
    PRIVATE_TOKEN: "glpat-nUHDhKCWdUXRL4BJp4hC",
  } as CommonHeaderProperties;
};

const token = "glpat-nUHDhKCWdUXRL4BJp4hC";

export const FetchData = () => async (dispatch: Dispatch<actionType>) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const result = await axios.get("https://gitlab.com/api/v4/projects", config);

  dispatch({
    type: ActionT.FETCH_DATA,
    payload: { list: result.data },
  });
};

export const DetailData = () => async (dispatch: Dispatch<actionType>) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const result = await axios.get(
    `https://gitlab.com/api/v4/projects/33454979/issues`,
    config
  );

  console.log("result", result.data);
  dispatch({
    type: ActionT.DETAIL_DATA,
    payload: result.data,
  });
};

export const AddIssue =
  (payload: { taske: string }) => (dispatch: Dispatch<actionType>) => {
    console.log("AddIssue", payload);

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post(
        `https://gitlab.com/api/v4/projects/33454979/issues`,
        {
          title: payload.taske,
        },
        config
      )
      .then((res) => {
        console.log("res", res.data);
      });
    dispatch({
      type: ActionT.ADD_ISSUE,
      payload: payload,
    });
  };

export const AddTodo =
  (payload: { name: string; id: number }) =>
  (dispatch: Dispatch<actionType>) => {
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post(
        "https://gitlab.com/api/v4/projects",
        {
          name: payload.name,
          id: payload.id,
        },
        config
      )
      .then((res) => {
        // console.log("res", res);
      });
    dispatch({
      type: ActionT.TODO_ADD,
      payload: payload,
    });
  };
