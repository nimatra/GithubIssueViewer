import {User} from './User';
import {Label} from './Label';
import {Milestone} from './Milestone';
import {PullRequest} from './PullRequest';

export class Issue {
    public id: number;
    public url: string;
    public repository_url: string;
    public labels_url: string;
    public comments_url: string;
    public events_url: string;
    public html_url: string;
    public number: number;
    public state: string;
    public title: string;
    public body: string;
    public user: User;
    public labels: Label[];
    public assignee: User;
    public milestone: Milestone;
    public locked: boolean;
    public comments: number;
    public pull_request: PullRequest;
    public closed_at: string;
    public created_at: string;
    public updated_at: string;
}
