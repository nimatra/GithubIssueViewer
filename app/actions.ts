/// <reference path="../typings/tsd.d.ts" />
export enum ACTION { Issues_ReceivedFromServer, AddIssue, ViewIssue }
import { GithubState } from './Store/GithubState';
import thunk from 'redux-thunk';

export interface IIssueAction {
  type: ACTION;
  issue?: string;
}

export interface IGetAllIssuesAction {
  type: ACTION;
  issues?: string[];
}

export function GetIssuesFromServer() {
  return dispatch => {
      dispatch(updateIssues(['']));
    //get images from server
  };
}

export function addIssue(issue: string): IIssueAction {
  return {
    issue: issue,
    type: ACTION.AddIssue,
  };
};

export function viewIssue(issue: string): IIssueAction {
  return {
    issue: issue,
    type: ACTION.ViewIssue,
  };
};

export function updateIssues(json: string[]): IGetAllIssuesAction {
  return {
    issues: json,
    type: ACTION.Issues_ReceivedFromServer,
  };
};