/// <reference path="../typings/tsd.d.ts" />
export enum ACTION { Issues_ReceivedFromServer, AddIssue, ViewIssue }
import { GithubState } from './Store/GithubState';
import {Issue} from './Store/Issue';
import thunk from 'redux-thunk';

export interface IIssueAction {
  type: ACTION;
  issue?: Issue;
}

export interface IGetAllIssuesAction {
  type: ACTION;
  issues?: Issue[];
}

export function GetIssuesFromServer() {
  return dispatch => {
      dispatch(updateIssues([null]));
    //get images from server
  };
}

export function addIssue(issue: Issue): IIssueAction {
  return {
    issue: issue,
    type: ACTION.AddIssue,
  };
};

export function viewIssue(issue: Issue): IIssueAction {
  return {
    issue: issue,
    type: ACTION.ViewIssue,
  };
};

export function updateIssues(json: Issue[]): IGetAllIssuesAction {
  return {
    issues: json,
    type: ACTION.Issues_ReceivedFromServer,
  };
};