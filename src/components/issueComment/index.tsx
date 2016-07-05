/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';
import { Comment } from '../../reducers/entities/Comment';
import {ListItem, Divider} from 'material-ui';
import {Avatar, IconMenu, MenuItem} from 'material-ui';
import {colors} from 'material-ui/styles';

interface ICommentProps extends React.Props<{}> {
    dispatch?: (func: any) => void;
    comment: Comment;
};
const cardStyle = {
    'marginTop': '10px',
    'marginBottom': '10px',
};
const deleteStyle = {
    'margin': '0',
    'padding': '0',
    'width': '50px'
};

export class IssueComment extends React.Component<ICommentProps, {}> {
    public render(): React.ReactElement<{}> {
        const {dispatch, comment} = this.props;
        return <div>
                <ListItem
                    leftAvatar={<Avatar src={comment.user.avatar_url} />}
                    primaryText={'@' + comment.user.login}
                    secondaryText={
                        <p>
                            <span style={{ color: colors.darkBlack }}>{comment.body}</span>
                        </p>
                    }
                    secondaryTextLines={10}
                    />
        </div>;
    }
};