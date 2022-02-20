export enum ActionT {
  ADD_ISSUE = "ADD_ISSUE",
  DETAIL_DATA = "DETAIL_DATA",
  FETCH_DATA = "FETCH_DATA",
  TODO_ADD = "TODO_ADD",
}
export type StateType = {
  list: string[] | null;
  detail: string[] | null;
};
export type actionType = {
  type:
    | ActionT.ADD_ISSUE
    | ActionT.DETAIL_DATA
    | ActionT.FETCH_DATA
    | ActionT.TODO_ADD;
  payload?: any;
};

export type itemListType = {
  id: number;
  default_branch: string;
  name: string;
  description: string;
  department: string;
};
export type inputUser = {
  name: string;
};
export type BoardType = {
  className: string;
  id?: string;

  children?: JSX.Element[] | JSX.Element;
};
export type CardType = {
  id: any;
  className: string;
  draggable: any;
  children: React.ReactNode;
};

export type TaskType = {
  updatecomponent: any;
  id?: string;
  show: boolean;
  close: () => void;
};
