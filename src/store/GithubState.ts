/// <reference path="../../typings/tsd.d.ts" />
import {Issue} from './Issue';

export class GithubState {
    public activeIssue: Issue;
    public allIssues: Issue[];
}
