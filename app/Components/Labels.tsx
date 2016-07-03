/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import { connect } from 'react-redux';
import { GetIssuesFromServer } from '../actions';
import {GithubState} from '../Store/GithubState';
import {Label} from '../Store/Label';
import {SocialNotifications} from 'material-ui/lib/svg-icons/social/notifications';
import {Card, CardActions, CardText, CardTitle, CardMedia} from 'material-ui';
import {RaisedButton, IconButton, AppBar} from 'material-ui';
import {Badge} from 'material-ui';



interface ILabelsProps {
    dispatch?: (func: any) => void;
    allLabels?: Label[];
}

const contentStyle = {
    margin: '10px',
    display: 'flex',
};

export class Labels extends React.Component<ILabelsProps, {}> {

    public shouldComponentUpdate(nextProps: ILabelsProps, nextState: any) {
        const {dispatch, allLabels} = nextProps;
        return this.props.allLabels !== nextProps.allLabels;
    }

    public render(): React.ReactElement<{}> {
        let { dispatch, allLabels }: ILabelsProps = this.props;
        let labels = [];

        for (let i = 0; i < allLabels.length; i++) {
            labels.push(<RaisedButton label={allLabels[i].name}
                backgroundColor={'#' + allLabels[i].color.toString()}
                onMouseDown={() => window.location.href = allLabels[i].url}/>);
        }
        return (
            <div style={contentStyle}>
                {labels}
            </div >
        );
    }
}
