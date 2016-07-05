import * as React from 'react';
const connect = require('react-redux').connect;
const Link = require('react-router').Link;

import {IssuesList} from '../components/IssuesList';
import {ContentAdd} from 'material-ui/svg-icons/content/add';
import {ContentRemove} from 'material-ui/svg-icons/content/remove';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {RaisedButton, FloatingActionButton, Avatar } from 'material-ui';
import {Issue} from '../reducers/Entities/Issue';
import {GetIssuesFromServer, viewIssue, updatePageNumber} from '../actions/github';

interface IAppProps extends React.Props<any> {
  dispatch?: (func: any) => void;
  allIssues?: Issue[];
  pageNumber?: number;
};

const contentStyle = {
  margin: '10px'
};
const pageStyle = {
  'margin-left': '100px',
  'margin-right': '40px',
  'vertical-align': 'middle',
};

const buttonStyle = {
  margin: '20px',
  height: '20px',
  width: '20px',
};

/**
 * 
 * Reads the state from the store and pass them in as props
 * @param {any} state
 * @returns
 */
function mapStateToProps(state) {
  return {
    allIssues: state.github.allIssues,
    pageNumber: state.github.pageNumber,
  };
};

/**
 * 
 * Creates a delegate for commonly used actions in this component
 * @param {any} dispatch
 * @returns
 */
function mapDispatchToProps(dispatch) {
  return {
    goToPage: (page: number) => { if (page > 0) { dispatch(GetIssuesFromServer(page)); dispatch(updatePageNumber(page)); } },
    viewIssue: (issue: Issue) => dispatch(viewIssue(issue)),
  };
};

/**
 * 
 * App renders the allIssues list from the store, if the list is empty 
 * it dispatches an action to get new issues from the server
 * @export
 * @class App
 * @extends {React.Component<IAppProps, void>}
 */
@connect(mapStateToProps)
export class App extends React.Component<IAppProps, void> {
  public componentDidMount() {
    let {allIssues, dispatch} = this.props;
    let {goToPage} = mapDispatchToProps(dispatch);

    if (allIssues === undefined || allIssues == null || allIssues[0] === undefined) {
      goToPage(1);
    }
  }

  render() {
    let { allIssues, pageNumber, dispatch } = this.props;
    let {goToPage} = mapDispatchToProps(dispatch);
    let page = '' + pageNumber;
    return (
      <div style={contentStyle}>
        <IssuesList allIssues={allIssues} dispatch={dispatch}/>
        <RaisedButton secondary={true} style={buttonStyle} label="-"
          onClick={() => goToPage(pageNumber - 1) }/>

        <Avatar style={pageStyle}>{page}</Avatar>
        <RaisedButton primary={true} style={buttonStyle}
          onClick={() => goToPage(pageNumber + 1) } label="+"/>
      </div>
    );
  };
};

