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
const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="Details"
        tooltipPosition="top-right"
        >
        <ActionDescription color={colors.grey400} />
    </IconButton>
);

const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Reply</MenuItem>
        <MenuItem>Forward</MenuItem>
        <MenuItem>Delete</MenuItem>
    </IconMenu>
);
export class IssuesListItem extends React.Component<IIssuesListItemProps, {}> {

    public shouldComponentUpdate(nextProps: IIssuesListItemProps, nextState: any) {
        const {issue} = nextProps;
        return this.props.issue !== nextProps.issue;
    }

    public render(): React.ReactElement<{}> {
        let { issue, dispatch }: IIssuesListItemProps = this.props;

        return (
            <div onClick={() => this.goToDetails(this.props)}>
                <ListItem
                    leftAvatar={<Avatar src={issue.user.avatar_url} />}
                    primaryText={'@' + issue.user.login}
                    rightIconButton={rightIconMenu}
                    secondaryText={
                        <p>
                            <span style={{ color: colors.darkBlack }}>{issue.title}</span> -- 
                            {issue.body.substr(0, 140)}
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
