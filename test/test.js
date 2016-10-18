import assertElem from 'assert-element';
import assert from 'assert';
import mock from 'component-mock';
import element from 'virtual-element';
import makeUI from '../src/utils';
import schema from '../schema/webpackSchema.json';

import App from '../src/components/index.js';

describe('TextArea', function() {
    let node = mock(App).render();
    it('should show textarea', () => {
        assertElem.isNode(node, 'div');
    })
});

describe('makeUI for entry', function() {
    var {elementUI, prop} = makeUI();
    it('should pick up entry config', () => {
        assert.equal(prop.description, "The entry point(s) of the compilation.");
        assert.ok(elementUI);
    })
})

describe('anyOf, allOf etc', function() {
    var {prop, elementUI} = makeUI();
    it('should say two options available', () => {
        assert.equal(elementUI.options.length, 2)
    })
})