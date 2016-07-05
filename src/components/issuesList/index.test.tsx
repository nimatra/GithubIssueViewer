import { assert } from 'chai';
import { shallow, render } from 'enzyme';
import * as sinon from 'sinon';
import mockIssueList from '../../reducers/entities/mockIssueList';

import * as React from 'react';
import {IssuesList} from './index';
import {IssuesListItem} from '../IssuesListItem/index';


describe('Container Component', () => {

  it('should create an IssuesList', () => {
    const container = shallow( <IssuesList allIssues={[]}>Hello World</IssuesList> );

    assert.isOk(container.length, 'container not created');
    assert.strictEqual(container.text(), 'Hello World', 
       'Child contents not found');
  });

  it('should create an IssuesList with an IssuesListItem inside it',
    () => {
    const container = shallow( <IssuesList allIssues={mockIssueList} /> );

    assert.isTrue(container.contains(<IssuesListItem/>));
  });
});
