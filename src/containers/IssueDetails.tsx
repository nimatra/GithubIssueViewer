/// <reference path="../../typings/index.d.ts" />

import * as React from 'react';
import { GetCommentsFromServer } from '../actions/github';
import {Issue} from '../reducers/entities/Issue';
import { Comment } from '../reducers/entities/Comment';
import {Labels} from '../components/labels';
import {IssueComment} from '../components/issueComment';

import {ActionDescription} from 'material-ui/svg-icons';
import {Card, CardActions, CardText, CardTitle, CardHeader} from 'material-ui';
import {colors} from 'material-ui/styles';
import {ListItem, Divider} from 'material-ui';
import {Avatar, IconMenu, MenuItem, List} from 'material-ui';

const { browserHistory } = require('react-router');
const connect = require('react-redux').connect;

interface IIssueDetailsProps {
    dispatch?: (func: any) => void;
    issue?: Issue;
    comments?: Comment[];
}

const contentStyle = {
    margin: '20px'
};

/**
 * 
 * Reads currnt state from the store and pass it into IssueDetails as props
 * @param {any} state
 * @returns
 */
function mapStateToProps(state) {
    return {
        issue: state.github.activeIssue,
        comments: state.github.comments,
    };
}

/**
 * 
 * IssueDetails components renders detailed view of an issue and its comments
 * @export
 * @class IssueDetails
 * @extends {React.Component<IIssueDetailsProps, {}>}
 */
@connect(mapStateToProps)
export default class IssueDetails extends React.Component<IIssueDetailsProps, {}> {

    public shouldComponentUpdate(nextProps: IIssueDetailsProps, nextState: any) {
        const {issue} = nextProps;
        return this.props.issue !== nextProps.issue;
    }

    public render(): React.ReactElement<{}> {
        let { issue, comments, dispatch }: IIssueDetailsProps = this.props;
        if (issue === undefined || issue == null || issue.user === undefined) {
            browserHistory.push('/app');
            return null;
        }
        let commentList = [];
        if (comments != null && comments[0] != undefined) {
            comments.forEach(element => {
                commentList.push(<IssueComment comment={element} dispatch={dispatch}/>)
                commentList.push(<Divider inset={true} />);
            });
        }else{
            if(issue.comments > 0){
                dispatch(GetCommentsFromServer(issue.comments_url));
            }
        }
        // onExpandChange={() => window.location.href = issue.user.html_url}
        return (
            <div style={contentStyle}>
                <Card>
                    <CardHeader
                        title={'@' + issue.user.login}
                        avatar={issue.user.avatar_url}
                        />
                    <CardTitle title={issue.title} subtitle={issue.state} />
                    <CardText>
                        {issue.body}
                    </CardText>
                </Card>
                <Labels allLabels={issue.labels}/>
                <List>
                    {commentList}
                </List>
            </div>
        );
    }
}
