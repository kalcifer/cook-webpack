/** @jsx element */
import assertElem from 'assert-element';
import assert from 'assert';
import mock from 'component-mock';
import element from 'virtual-element';
import isNode from 'deku-component-is-node'

import Arr from '../../src/components/arr';

describe('Array tests', () => {
    xit('should have data type array', () => {
        const elementMock = mock(<Arr/>);
        assertElem.isNode(elementMock)
    })
})
