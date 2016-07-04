/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import { connect } from 'react-redux';
import { GetIssuesFromServer } from '../actions';
import {GithubState} from '../Store/GithubState';
import {Issue} from '../Store/Issue';
import {Labels} from './Labels';

import {ActionDescription} from 'material-ui/lib/svg-icons';
import {Card, CardActions, CardText, CardTitle, CardHeader} from 'material-ui';
import {RaisedButton, IconButton, AppBar} from 'material-ui';
import {Colors} from 'material-ui/lib/styles';
import {ListItem, Divider} from 'material-ui';
import {Avatar, IconMenu, MenuItem} from 'material-ui';
import { browserHistory } from 'react-router';


interface IIssueDetailsProps {
    dispatch?: (func: any) => void;
    issue?: Issue;
}

const contentStyle = {
    margin: '10px'
};


function select(state: GithubState): IIssueDetailsProps {
  return {
    issue: state.activeIssue,
  };
}

@connect(select)
export class IssueDetails extends React.Component<IIssueDetailsProps, {}> {

    public shouldComponentUpdate(nextProps: IIssueDetailsProps, nextState: any) {
        const {dispatch, issue} = nextProps;
        return this.props.issue !== nextProps.issue;
    }

    public render(): React.ReactElement<{}> {
        var { dispatch, issue }: IIssueDetailsProps = this.props;
        if(issue == undefined || issue == null || issue.user == undefined){
            browserHistory.push('/app');
            return null;
        }
        // onExpandChange={() => window.location.href = issue.user.html_url}
        return (
            <div>
                <Card>
                    <CardHeader
                        title={'@' + issue.user.login}
                        avatar={issue.user.avatar_url}
                        />
                    <CardTitle title={issue.title}  />
                    <CardText>
                        {issue.body}
                    </CardText>
                </Card>
                <Labels allLabels={issue.labels} dispatch={dispatch}/>
            </div>
        );
    }
}
