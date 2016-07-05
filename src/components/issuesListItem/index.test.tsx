import { assert } from 'chai';
import { shallow, render } from 'enzyme';
import * as sinon from 'sinon';
import mockIssueList from '../../reducers/entities/mockIssueList';
import {ListItem} from 'material-ui';

import * as React from 'react';
import {IssuesListItem} from './index';
import {Labels} from '../Labels/index';


describe('Container Component', () => {

  it('should create an IssuesListItem', () => {
    const container = shallow( <IssuesListItem>Hello World</IssuesListItem> );

    assert.isOk(container.length, 'IssuesListItem not created');
    assert.strictEqual(container.text(), 'Hello World', 
       'Child contents not found');
  });

  it('should create an IssuesListItem with a ListItem inside it',
    () => {
    const container = shallow( <IssuesListItem issue={mockIssueList[0]} /> );

    assert.isTrue(container.contains(<ListItem/>));
  });

  it('should create an IssuesListItem with Labels inside it',
    () => {
    const container = shallow( <IssuesListItem issue={mockIssueList[0]} /> );

    assert.isTrue(container.contains(<Labels/>));
  });
});
