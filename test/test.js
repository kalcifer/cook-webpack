import assert from 'assert-element';
import mock from 'component-mock';
import element from 'virtual-element';

import App from '../src/components/index.js';

describe('TextArea', function() {
    let node = mock(App).render();
    it('should show textarea', () => {
        assert.isNode(node, 'div');
    })
});