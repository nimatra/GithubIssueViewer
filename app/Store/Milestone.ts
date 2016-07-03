import {User} from './User';

export class Milestone {
    public url: string;
    public html_url: string;
    public labels_url: string;
    public id: string;
    public number: number;
    public state: string;
    public title: string;
    public description: string;
    public creator: User;
    public open_issues: number;
    public closed_issues: number;
    public created_at: string;
    public updated_at: string;
    public closed_at: string;
    public due_on: string;
}

