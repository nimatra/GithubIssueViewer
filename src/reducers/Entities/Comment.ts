import {User} from './User';

export class Comment {
    public id: number;
    public url: string;
    public html_url: string;
    public body: string;
    public user: User;
    public updated_at: string;
}
