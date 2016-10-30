import React from 'react';
import renderer from 'react-test-renderer';

import Arr from '../../components/arr';

test('Shows array type field', ()=>{
    let items = {'$ref':'#/definitions/externals'};
    const component = renderer.create(<Arr items={items} id={1} parentId={0}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})
