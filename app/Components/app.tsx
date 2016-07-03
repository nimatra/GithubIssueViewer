/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import { connect } from 'react-redux';
import { GetIssuesFromServer } from '../actions';
import {GithubState} from '../Store/GithubState';
import {ActionGrade} from 'material-ui/lib/svg-icons';
import {Card, CardActions, CardText, CardTitle, CardMedia, RaisedButton, IconButton, Styles, AppBar} from 'material-ui';

interface IAppProps {
  dispatch?: (func: any) => void;
  allIssues?: string[];
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

function select(state: GithubState): IAppProps {
  return {
    allIssues: state.allIssues,
  };
}

@connect(select)
export class App extends React.Component<IAppProps, {}> {
  private smDisplayName: string;
  public componentDidMount() {
    const {dispatch, allIssues} = this.props;
    if (allIssues == null || allIssues[0] === undefined) {
      dispatch(GetIssuesFromServer());
    }
  }

  public shouldComponentUpdate(nextProps: IAppProps, nextState: any) {
    const {dispatch, allIssues} = nextProps;
    return true;
  }

  public render(): React.ReactElement<{}> {
    var { dispatch, allIssues }: any = this.props;

    return (
      <div style={contentStyle}>
      <AppBar title='One wise An said'
              iconElementRight={
                <IconButton onClick={() => window.location.href = 'https://github.com/nimatra/areyouantoday'}>
                <img src='/public/github.png' />
                </IconButton>}
                           />
        <Card style={cardStyle}>
          <CardTitle></CardTitle>
          <CardMedia overlay={<CardTitle title='' subtitle='' />}>
            <img src={allIssues[0]} />
          </CardMedia>
          <CardActions>
              <IconButton tooltip='' touch={true} tooltipPosition='top-right'>
                <ActionGrade />
              </IconButton>
          </CardActions>
        </Card>
      </div >
    );
  }
}