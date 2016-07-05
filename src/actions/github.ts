import {
  GET_ISSUES,
  GOTO_PAGE,
  VIEW_ISSUE,
  GET_COMMENTS,
} from '../constants';
import {Issue} from '../reducers/Entities/Issue';
import { IGetAllIssuesAction, IIssueAction, IChangePageAction } from '../reducers/github';

export function GetIssuesFromServer(page: number = 0) {
  return dispatch => {
    fetch(
      'http://localhost:8080/api/getIssues?' +
      'page=' + page
    )
      .then(response => response.json())
      .then(json => dispatch(updateIssues(json)));
  };
}

export function GetCommentsFromServer(url: string) {
  return dispatch => {
    fetch(
      'http://localhost:8080/api/getComments/' +
      '?url=' + url
    )
      .then(response => response.json())
      .then(json => dispatch(updateComments(json)));
  };
}

export function viewIssue(issue: Issue) {
  return dispatch => {
    dispatch({ activeIssue: issue, type: VIEW_ISSUE })
  };
};

export function updateIssues(json: Issue[]) {
  return dispatch => {
    dispatch({ allIssues: json, type: GET_ISSUES })
  };
};

export function updateComments(json: Comment[]) {
  return dispatch => {
    dispatch({ comments: json, type: GET_COMMENTS })
  };
};

export function updatePageNumber(json: number) {
  return dispatch => {
    dispatch({ pageNumber: json, type: GOTO_PAGE })
  };
};
