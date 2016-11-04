import assertElem from 'assert-element';
import assert from 'assert';
import mock from 'component-mock';
import element from 'virtual-element';
import isNode from 'deku-component-is-node';
import makeUI from '../src/utils';
import schema from '../schema/webpackSchema.json';

import App from '../src/components/index.js';
import AnyOf from '../src/components/anyOf.js';
import AnyProp from '../src/components/anyProp.js';
import AllOf from '../src/components/allOf.js';
import Obj from '../src/components/obj.js';
import Arr from '../src/components/arr.js';

describe('TextArea', function() {
    let node = mock(App).render();
    it('should show textarea', () => {
        isNode(node, 'div');
    });
});

describe('makeUI for entry', function() {
    var {prop, elementUI} = makeUI('entry');
    var elementMock = mock(elementUI);    
    const children = elementUI.props.children;
    const firstChild = children[0];
    const secondChild = children[1];
    it('should be of type anyOf', () => {
        isNode(elementMock, AnyOf);
    });
    it('should have two children', () => {
        assert.equal(children.length, 2);
    });
    it('first child should be object of any param', () => {
        isNode(mock(firstChild), Obj);
    });
    it('firstChild`s obj`s property should be AnyOf', () => {
        isNode(mock(firstChild.props.children), AnyOf);
    });
    it('firstChild prop should be string input box', () => {
        isNode(mock(firstChild.props.children[0]), 'input');
    });
    it('secondChild should be of type AnyOf', () => {
        isNode(mock(secondChild), AnyOf);
    });
    it('secondChild`s firstchild should be string input box', () => {
        isNode(mock(secondChild.props.children[0], 'input'));
    });
    it('secondChild`s secondChild should be AllOf', () => {
        isNode(mock(secondChild.props.children[1], AllOf));
    });
    it('secondChild`s secondChild`s child should be Arr', () => {
        isNode(mock(secondChild.props.children[1].props.children, Arr));
    });

});

describe('Array tests', () => {
    it('should have data type array', () => {
        const elementMock = mock(Arr).render();
        assertElem.isNode(elementMock);
    });
});