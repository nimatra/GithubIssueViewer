/// <reference path='../typings/tsd.d.ts' />

import { Reducer, combineReducers } from 'redux';
import { GithubState } from './Store/GithubState';
import { IGetAllIssuesAction, IIssueAction, ACTION } from './actions';

export const initialState: GithubState = {
  allIssues: <string[]>[],
};

function githubIssuesReducer(state: string[] = initialState.allIssues, action: IGetAllIssuesAction): string[] {
  switch (action.type) {
    case ACTION.Issues_ReceivedFromServer:
      return Object.assign(
        <string[]>[],
        state,
        action.issues
      );
    default:
      return state;
  }
}

export const githubReducer: Reducer = combineReducers({
  allIssues: githubIssuesReducer,
});
