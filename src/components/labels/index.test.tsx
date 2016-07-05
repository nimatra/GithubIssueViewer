import { assert } from 'chai';
import { shallow, render } from 'enzyme';
import * as sinon from 'sinon';
import mockIssueList from '../../reducers/entities/mockIssueList';
import {RaisedButton} from 'material-ui';

import * as React from 'react';
import {Labels} from './index';


describe('Container Component', () => {

  it('should create an Labels', () => {
    const container = shallow( <Labels>Hello World</Labels> );

    assert.isOk(container.length, 'Labels not created');
    assert.strictEqual(container.text(), 'Hello World', 
       'Child contents not found');
  });

  it('should create an Labels with a RaisedButton inside it',
    () => {
    const container = shallow( <Labels allLabels={mockIssueList[0].labels} /> );

    assert.isTrue(container.contains(<RaisedButton/>));
  });
});
