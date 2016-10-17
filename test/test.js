import assertElem from 'assert-element';
import assert from 'assert';
import mock from 'component-mock';
import element from 'virtual-element';
import makeUI from '../src/utils';
import schema from '../schema/webpackSchema.json'

import App from '../src/components/index.js';

describe('TextArea', function() {
    let node = mock(App).render();
    it('should show textarea', () => {
        assertElem.isNode(node, 'div');
    })
});

describe('makeUI', function() {
    it('should pick up entry config', () => {
        var madeUi = makeUI();
        assert.equal(madeUi.description, "The entry point(s) of the compilation.")
    })
})