import { IBaseAction } from "redux/commonTypes";

export type LoadingFullScreenReduxType = {
  isLoading: boolean;
};

export interface ILoadingFullScreenAction extends IBaseAction {
  payload: LoadingFullScreenReduxType;
}
