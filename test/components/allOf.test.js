import React from 'react';

import renderer from 'react-test-renderer';
import AllOf from '../../components/allOf.js';

test('AllOf component', () => {
    const children = ['String', 'Minimum2'];
    const component = renderer.create(<AllOf children={children}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot(); 
}) 