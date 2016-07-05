import {
  GET_ISSUES,
  GOTO_PAGE,
  VIEW_ISSUE,
  GET_COMMENTS,
} from '../constants';
import {Issue} from '../reducers/Entities/Issue';
import { IGetAllIssuesAction, IIssueAction, IChangePageAction } from '../reducers/github';

/**
 * 
 * Sends a request to the proxy server to get a different page of issues
 * @export
 * @param {number} [page=0]
 * @returns
 */
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

/**
 * 
 * Sends a request to the proxy server to fetch comments about an issue
 * @export
 * @param {string} url
 * @returns
 */
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

/**
 * 
 * calls reducer to sets active issue
 * @export
 * @param {Issue} issue
 * @returns
 */
export function viewIssue(issue: Issue) {
  return dispatch => {
    dispatch({ payload: issue, type: VIEW_ISSUE })
  };
};

/**
 * 
 * Callback from proxy server to deploy the new load of issues to the store
 * @export
 * @param {Issue[]} json
 * @returns
 */
export function updateIssues(json: Issue[]) {
  return dispatch => {
    dispatch({ payload: json, type: GET_ISSUES })
  };
};

/**
 * 
 * Callback from proxy server to deploy the new load of comments to the store
 * @export
 * @param {Comment[]} json
 * @returns
 */
export function updateComments(json: Comment[]) {
  return dispatch => {
    dispatch({ payload: json, type: GET_COMMENTS })
  };
};

/**
 * 
 * calls reducer to set the pageNumber
 * @export
 * @param {number} json
 * @returns
 */
export function updatePageNumber(json: number) {
  return dispatch => {
    dispatch({ payload: json, type: GOTO_PAGE })
  };
};
