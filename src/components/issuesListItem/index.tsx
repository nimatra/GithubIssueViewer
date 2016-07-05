/// <reference path="../../../typings/index.d.ts" />

import * as React from 'react';
import { viewIssue } from '../../actions/github';
import {Issue} from '../../reducers/entities/Issue';
import {Labels} from '../labels';

import {ActionDescription} from 'material-ui/svg-icons';
import {RaisedButton, IconButton, AppBar} from 'material-ui';
import {colors} from 'material-ui/styles';
import {ListItem, Divider} from 'material-ui';
import {Avatar, IconMenu, MenuItem} from 'material-ui';

const { browserHistory } = require('react-router');

interface IIssuesListItemProps {
    dispatch?: (func: any) => void;
    issue?: Issue;
}

const contentStyle = {
    margin: '10px'
};

const gavatarStyle = {
    width: '50px',
    height: '40px',
    'border-radius': '25px',
    '-webkit-border-radius': '25px',
    '-moz-border-radius': '25px',
}

const iconButtonElement = (
    <IconButton>
        <ActionDescription color={colors.grey400} />
    </IconButton>
);

/**
 * 
 * Renders an issue. 
 * Issue Number and Title
 * Labels, 
 * Reporters UserName and Gavatar, clicking on the Gavatar loads user's page
 * The first 140 character of the summary
 * @export
 * @class IssuesListItem
 * @extends {React.Component<IIssuesListItemProps, {}>}
 */
export class IssuesListItem extends React.Component<IIssuesListItemProps, {}> {

    public shouldComponentUpdate(nextProps: IIssuesListItemProps, nextState: any) {
        const {issue} = nextProps;
        return this.props.issue !== nextProps.issue;
    }

    public render(): React.ReactElement<{}> {
        let { issue, dispatch }: IIssuesListItemProps = this.props;

        //trim the string to the maximum length
        let trimmedString = issue.body.substr(0, 140);

        //re-trim if we are in the middle of a word
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
        if (issue.body.length > trimmedString.length) {
            trimmedString += '...';
        }

        return (
            <div onClick={() => this.goToDetails(this.props) }>
                <ListItem
                    leftAvatar={
                        <Avatar>
                            <img style={gavatarStyle}
                                src={issue.user.avatar_url}
                                onClick={() => window.location.href = issue.user.html_url} />
                        </Avatar>}
                    primaryText={<p><a href={issue.user.html_url}>@{issue.user.login}</a> -- {issue.id}</p>}
                    rightIconButton={iconButtonElement}
                    secondaryText={
                        <p>
                            <span style={{ color: colors.darkBlack }}>{issue.title}</span> --
                            {trimmedString}
                        </p>
                    }
                    secondaryTextLines={5}
                    />
                <Labels allLabels={issue.labels}/>
                {this.props.children}
            </div>
        );
    }
    private goToDetails(props: IIssuesListItemProps): void {
        props.dispatch(viewIssue(props.issue));
        browserHistory.push('/details');
    }
}
