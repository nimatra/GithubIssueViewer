/// <reference path='../typings/tsd.d.ts' />

import { Reducer, combineReducers } from 'redux';
import { GithubState } from './Store/GithubState';
import {Issue} from './Store/Issue';
import {User} from './Store/User';
import {Label} from './Store/Label';
import {Milestone} from './Store/Milestone';
import {PullRequest} from './Store/PullRequest';
import { IGetAllIssuesAction, IIssueAction, ACTION } from './actions';

export const initialState: GithubState = {
  allIssues: [
    {
      id: 1,
      url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
      repository_url: 'https://api.github.com/repos/octocat/Hello-World',
      labels_url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}',
      comments_url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347/comments',
      events_url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347/events',
      html_url: 'https://github.com/octocat/Hello-World/issues/1347',
      number: 1347,
      state: 'open',
      title: 'Found a bug',
      body: "I'm having a problem with this.",
      user: {
        login: 'octocat',
        id: 1,
        avatar_url: 'https://avatars1.githubusercontent.com/u/1885507?v=3&s=40',
        gravatar_id: '',
        url: 'https://api.github.com/users/octocat',
        html_url: 'https://github.com/octocat',
        followers_url: 'https://api.github.com/users/octocat/followers',
        following_url: 'https://api.github.com/users/octocat/following{/other_user}',
        gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
        organizations_url: 'https://api.github.com/users/octocat/orgs',
        repos_url: 'https://api.github.com/users/octocat/repos',
        events_url: 'https://api.github.com/users/octocat/events{/privacy}',
        received_events_url: 'https://api.github.com/users/octocat/received_events',
        type: 'User',
        site_admin: false
      } as User,
      labels: [
        {
          url: 'https://api.github.com/repos/octocat/Hello-World/labels/bug',
          name: 'bug',
          color: 'f29513',
        }
      ] as Label[],
      assignee: {
        login: 'octocat',
        id: 1,
        avatar_url: 'https://avatars1.githubusercontent.com/u/1885507?v=3&s=40',
        gravatar_id: '',
        url: 'https://api.github.com/users/octocat',
        html_url: 'https://github.com/octocat',
        followers_url: 'https://api.github.com/users/octocat/followers',
        following_url: 'https://api.github.com/users/octocat/following{/other_user}',
        gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
        organizations_url: 'https://api.github.com/users/octocat/orgs',
        repos_url: 'https://api.github.com/users/octocat/repos',
        events_url: 'https://api.github.com/users/octocat/events{/privacy}',
        received_events_url: 'https://api.github.com/users/octocat/received_events',
        type: 'User',
        site_admin: false
      } as User,
      milestone: {
        url: 'https://api.github.com/repos/octocat/Hello-World/milestones/1',
        html_url: 'https://github.com/octocat/Hello-World/milestones/v1.0',
        labels_url: 'https://api.github.com/repos/octocat/Hello-World/milestones/1/labels',
        id: 1002604,
        number: 1,
        state: 'open',
        title: 'v1.0',
        description: 'Tracking milestone for version 1.0',
        creator: {
          login: 'octocat',
          id: 1,
          avatar_url: 'https://avatars1.githubusercontent.com/u/1885507?v=3&s=40',
          gravatar_id: '',
          url: 'https://api.github.com/users/octocat',
          html_url: 'https://github.com/octocat',
          followers_url: 'https://api.github.com/users/octocat/followers',
          following_url: 'https://api.github.com/users/octocat/following{/other_user}',
          gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
          organizations_url: 'https://api.github.com/users/octocat/orgs',
          repos_url: 'https://api.github.com/users/octocat/repos',
          events_url: 'https://api.github.com/users/octocat/events{/privacy}',
          received_events_url: 'https://api.github.com/users/octocat/received_events',
          type: 'User',
          site_admin: false
        } as User,
        open_issues: 4,
        closed_issues: 8,
        created_at: '2011-04-10T20:09:31Z',
        updated_at: '2014-03-03T18:58:10Z',
        closed_at: '2013-02-12T13:22:01Z',
        due_on: '2012-10-09T23:39:01Z',
      } as Milestone,
      locked: false,
      comments: 0,
      pull_request: {
        url: 'https://api.github.com/repos/octocat/Hello-World/pulls/1347',
        html_url: 'https://github.com/octocat/Hello-World/pull/1347',
        diff_url: 'https://github.com/octocat/Hello-World/pull/1347.diff',
        patch_url: 'https://github.com/octocat/Hello-World/pull/1347.patch',
      } as PullRequest,
      closed_at: null,
      created_at: '2011-04-22T13:33:48Z',
      updated_at: '2011-04-22T13:33:48Z',
    }
  ] as Issue[]
};

function githubIssuesReducer(state: Issue[] = initialState.allIssues, action: IGetAllIssuesAction): Issue[] {
  switch (action.type) {
    case ACTION.Issues_ReceivedFromServer:
      return Object.assign(
        <Issue[]>[],
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
