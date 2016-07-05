import {
  GET_ISSUES,
  GET_COMMENTS,
  GOTO_PAGE,
  VIEW_ISSUE,
} from '../constants';
import {Issue} from './Entities/Issue';
import {User} from './Entities/User';
import {Label} from './Entities/Label';
import {Milestone} from './Entities/Milestone';
import {PullRequest} from './Entities/PullRequest';
import { Comment } from './Entities/Comment';

import { Reducer, combineReducers } from 'redux';

export const INITIAL_STATE = {
  activeIssue: <Issue>{},
  allIssues: [] as Issue[],
  pageNumber: 1,
  comments: [] as Comment[]
};

export interface IIssueAction {
  type: any;
  activeIssue?: Issue;
}

export interface IGetAllIssuesAction {
  type: any;
  allIssues?: Issue[];
}

export interface IGetCommentsAction {
  type: any;
  comments?: Comment[];
}

export interface IChangePageAction {
  type: any;
  pageNumber?: number;
}

/**
 * 
 * Applies the downloaded array of issues to the store
 * @param {Issue[]} [state=INITIAL_STATE.allIssues]
 * @param {IGetAllIssuesAction} action
 * @returns {Issue[]}
 */
function githubIssuesReducer(state: Issue[] = INITIAL_STATE.allIssues, action: IGetAllIssuesAction): Issue[] {
  switch (action.type) {
    case GET_ISSUES:
      return Object.assign(
        <Issue[]>[],
        state,
        action.allIssues
      );
    default:
      return state;
  }
}

/**
 * 
 * Applies the downloaded comments array to the store
 * @param {Comment[]} [state=INITIAL_STATE.comments]
 * @param {IGetCommentsAction} action
 * @returns {Comment[]}
 */
function commentsReducer(state: Comment[] = INITIAL_STATE.comments, action: IGetCommentsAction): Comment[] {
  switch (action.type) {
    case GET_COMMENTS:
      return Object.assign(
        <Comment[]>[],
        state,
        action.comments
      );
    default:
      return state;
  }
}

/**
 * 
 * Sets active issue on the store
 * @param {Issue} [state=INITIAL_STATE.activeIssue]
 * @param {IIssueAction} action
 * @returns {Issue}
 */
function viewIssueReducer(state: Issue = INITIAL_STATE.activeIssue, action: IIssueAction): Issue {
  switch (action.type) {
    case VIEW_ISSUE:
      return Object.assign(
        <Issue>{},
        action.activeIssue
      );
    default:
      return state;
  }
}

/**
 * 
 * updates the page number on the store
 * @param {number} [state=INITIAL_STATE.pageNumber]
 * @param {IChangePageAction} action
 * @returns {number}
 */
function goToPageNumber(state: number = INITIAL_STATE.pageNumber, action: IChangePageAction): number {
  switch (action.type) {
    case GOTO_PAGE:
      return action.pageNumber;
    default:
      return state;
  }
}

export const githubReducer: Reducer<any> = combineReducers({
  activeIssue: viewIssueReducer,
  allIssues: githubIssuesReducer,
  pageNumber: goToPageNumber,
  comments: commentsReducer,
});

export default githubReducer;
