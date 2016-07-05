import { assert } from 'chai';
import { shallow, render } from 'enzyme';
import * as sinon from 'sinon';
import mockCommentList from '../../reducers/entities/mockCommentList';
import {ListItem} from 'material-ui';

import * as React from 'react';
import {IssueComment} from './index';
import {Labels} from '../Labels/index';


describe('Container Component', () => {

  it('should create an IssuesListItem', () => {
    const container = shallow( <IssueComment>Hello World</IssueComment> );

    assert.isOk(container.length, 'IssueComment not created');
    assert.strictEqual(container.text(), 'Hello World', 
       'Child contents not found');
  });

  it('should create an IssueComment with a ListItem inside it',
    () => {
    const container = shallow( <IssueComment comment={mockCommentList[0]} /> );

    assert.isTrue(container.contains(<ListItem/>));
  });

  it('should create an IssuesComment with text body as the mocked input',
    () => {
    const container = shallow( <IssueComment comment={mockCommentList[0]} /> );

    assert.isTrue(container.text() === mockCommentList[0].body);
  });
});
