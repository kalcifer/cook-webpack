import React from 'react';
import renderer from 'react-test-renderer';

import Obj from '../../components/obj';

test('Should be object component', () => {
    const children = 'Strings';
    const component = renderer.create(<Obj description="This is test component" children={children}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})