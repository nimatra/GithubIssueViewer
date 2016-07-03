/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import { connect } from 'react-redux';
import { GetIssuesFromServer } from '../actions';
import {GithubState} from '../Store/GithubState';
import {Issue} from '../Store/Issue';
import {Labels} from './Labels';

import {ActionDescription} from 'material-ui/lib/svg-icons';
import {Card, CardActions, CardText, CardTitle, CardMedia} from 'material-ui';
import {RaisedButton, IconButton, AppBar} from 'material-ui';
import {Colors} from 'material-ui/lib/styles';
import {ListItem, Divider} from 'material-ui';
import {Avatar, IconMenu, MenuItem} from 'material-ui';


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
        tooltip='Details'
        tooltipPosition='top-right'
        >
        <ActionDescription color={Colors.grey400} />
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
        const {dispatch, issue} = nextProps;
        return this.props.issue !== nextProps.issue;
    }

    public render(): React.ReactElement<{}> {
        var { dispatch, issue }: IIssuesListItemProps = this.props;

        return (
            <div>
                <ListItem
                    leftAvatar={<Avatar src={issue.user.avatar_url} />}
                    primaryText={issue.title}
                    rightIconButton={rightIconMenu}
                    secondaryText={
                        <p>
                            <span style={{ color: Colors.darkBlack }}>{issue.body.substr(0, 140)}</span>
                        </p>
                    }
                    secondaryTextLines={5}
                    />
                    <Labels allLabels={issue.labels}/>
            </div>
        );
    }
}
