import * as assert from 'assert';
import fireAction from '../../test-utils/fire-action';
import {githubReducer, INITIAL_STATE} from '../reducers/github';
import mockIssueList from './entities/mockIssueList';

import {
  GET_ISSUES,
  GET_COMMENTS,
  GOTO_PAGE,
  VIEW_ISSUE,
} from '../../src/constants/index';

import { Map } from 'immutable';

let state = INITIAL_STATE;

describe('Session Reducer', () => {
  describe('inital state', () => {
    it('should be a Map', () => {
      assert.strictEqual(Map.isMap(state), true);
    });
  });

  describe('on GET_ISSUES', () => {
    it('should save the issues', () => {
      state = fireAction(
        githubReducer,
        state,
        GET_ISSUES,
        mockIssueList);

      assert(!state.allIssues.length);
    });
  });

  describe('on GOTO_PAGE', () => {
    it('should change page number', () => {
      state = fireAction(
        githubReducer,
        state,
        GOTO_PAGE,
        2);

      assert(state.pageNumber != 2);
    });
  });

  describe('on VIEW_ISSUE', () => {
    it('should set the active issue', () => {
      state = fireAction(
        githubReducer,
        state,
        VIEW_ISSUE,
        mockIssueList[0]);

      assert(state.activeIssue != mockIssueList[0]);
    });
  });
});
