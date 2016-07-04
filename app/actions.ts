/// <reference path="../typings/tsd.d.ts" />
export enum ACTION { GetIssues, GetComments, ViewIssue, IssuesReceivedFromServer }
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

export function GetIssuesFromServer(page: number = 0) {
  return dispatch => {
    fetch(
      "http://localhost:3000/api/getIssues?" +
            "page=" + page
    )
      .then(response => response.json())
      .then(json => dispatch(updateIssues(json)));
  };
}

export function GetCommentsFromServer(issueId: number, page: number = 0) {
  return dispatch => {
    fetch(
      "http://localhost:3000/api/getComments/" +
            issueId +
            "/comments" + 
            "?page=" + page
    )
      .then(response => response.json())
      .then(json => dispatch(updateIssues(json)));
  };
}

export function viewIssue(issue: Issue): IIssueAction {
  return {
    issue: issue,
    type: ACTION.ViewIssue,
  };
};

export function updateIssues(json: Issue[]): IGetAllIssuesAction {
  return {
    issues: json,
    type: ACTION.IssuesReceivedFromServer,
  };
};