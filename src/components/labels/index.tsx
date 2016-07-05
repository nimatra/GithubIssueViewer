/// <reference path="../../../typings/index.d.ts" />

import * as React from 'react';
import {Label} from '../../reducers/entities/Label';
import {RaisedButton, IconButton, AppBar} from 'material-ui';
import {colors} from 'material-ui/styles';

interface ILabelsProps {
    allLabels?: Label[];
}

const contentStyle = {
    margin: '10px',
    display: 'flex',
};

export class Labels extends React.Component<ILabelsProps, {}> {

    public shouldComponentUpdate(nextProps: ILabelsProps, nextState: any) {
        const {allLabels} = nextProps;
        return this.props.allLabels !== nextProps.allLabels;
    }

    public render(): React.ReactElement<{}> {
        let { allLabels }: ILabelsProps = this.props;
        let labels = [];

        for (let i = 0; i < allLabels.length; i++) {
            labels.push(<RaisedButton label={allLabels[i].name} labelColor={colors.white}
                backgroundColor={'#' + allLabels[i].color.toString()}
                onMouseDown={() => window.location.href = allLabels[i].url}/>);
        }
        return (
            <div style={contentStyle}>
                {labels}
                {this.props.children}
            </div >
        );
    }
}
