import { ActionT, actionType, StateType } from "../../Type/type.types";

export const todoState: StateType = {
  list: null,
  detail: null,
};
export default (state = todoState, action: actionType) => {
  switch (action.type) {
    case ActionT.FETCH_DATA:
      return { ...state, list: action.payload.list };
    case ActionT.TODO_ADD:
      return { ...state, list: action.payload };
    case ActionT.DETAIL_DATA:
      return { ...state, detail: action.payload };
  }
  return state;
};
