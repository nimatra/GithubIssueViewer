/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import { connect } from 'react-redux';
import { GetIssuesFromServer } from '../actions';
import {GithubState} from '../Store/GithubState';
import {Issue} from '../Store/Issue';
import {IssuesListItem} from './IssuesListItem';
import {ActionGrade} from 'material-ui/lib/svg-icons';
import {Card, CardActions, CardText, CardTitle, CardMedia} from 'material-ui';
import {RaisedButton, IconButton, Styles, AppBar} from 'material-ui';
import {List, ListItem, Divider, ListDivider} from 'material-ui';


interface IIssuesListProps {
    dispatch?: (func: any) => void;
    allIssues?: Issue[];
}

const contentStyle = {
    margin: '10px'
};
const cardStyle = {
    'marginTop': '10px',
    'marginBottom': '10px',
};
const deleteStyle = {
    'margin': '0',
    'padding': '0',
    'width': '50px',
};

export class IssuesList extends React.Component<IIssuesListProps, {}> {

    public shouldComponentUpdate(nextProps: IIssuesListProps, nextState: any) {
        const {dispatch, allIssues} = nextProps;
        return this.props.allIssues !== nextProps.allIssues;
    }

    public render(): React.ReactElement<{}> {
        var { dispatch, allIssues }: any = this.props;
        var issues = [];
        allIssues.forEach(element => {
            issues.push(<IssuesListItem issue={element}/>)
            issues.push(<ListDivider inset={true} />);
        });
        return (
            <div style={contentStyle}>
                <List subheader={'Today'}>
                    {issues}
                </List>
            </div >
        );
    }
}
