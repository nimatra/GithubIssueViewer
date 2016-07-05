/// <reference path="../../../typings/index.d.ts" />

import * as React from 'react';
import { viewIssue } from '../../actions/github';
import {Issue} from '../../reducers/entities/Issue';
import {Labels} from '../labels';
import {IssuesListItem} from '../IssuesListItem';

import {colors} from 'material-ui/styles';
import {Card, CardActions, CardText, CardTitle, CardMedia} from 'material-ui';
import {RaisedButton, IconButton, AppBar} from 'material-ui';
import {List, ListItem, Divider} from 'material-ui';


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

/**
 * 
 * Renders a list of issues
 * @export
 * @class IssuesList
 * @extends {React.Component<IIssuesListProps, {}>}
 */
export class IssuesList extends React.Component<IIssuesListProps, {}> {

    public shouldComponentUpdate(nextProps: IIssuesListProps, nextState: any) {
        const {allIssues} = nextProps;
        return this.props.allIssues !== nextProps.allIssues;
    }

    public render(): React.ReactElement<{}> {
        let { allIssues, dispatch }: IIssuesListProps = this.props;
        let issues = [];
        if (allIssues != null) {
            allIssues.forEach(element => {
                issues.push(<IssuesListItem issue={element} dispatch={dispatch}/>)
                issues.push(<Divider inset={true} />);
            });
        }
        return (
            <div style={contentStyle}>
                <List>
                    {issues}
                </List>
                {this.props.children}
            </div >
        );
    }
}
