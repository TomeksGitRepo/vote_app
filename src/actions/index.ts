import { downloadAllTask } from "../mockup/apiCall";

export enum ActionType {
  VotesDownload = "ACTION_DOWNLOAD_VOTES",
}

export const downloadAllVotes = () => {
  return async (dispatch: any, ) => {
    const response = await downloadAllTask();

    dispatch({
      type: ActionType.VotesDownload,
      payload: response.data,
    });
  };
};
