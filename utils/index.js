import React from 'react';
import genUniqueId from './uniqueId';
import schema from '../schema/webpackSchema';
import AnyOf from '../components/anyOf';
import AnyProp from '../components/anyProp';
import Obj from '../components/obj';
import AllOf from '../components/allOf';
import Arr from '../components/arr';

let definitions = schema.definitions;
const makeUI = function(part = 'entry'){
    var prop = schema.properties[part];
    var elementUI = interpretUI(prop, 0);
    return {prop, elementUI};
};

export const interpretUI = function(prop, parentId) {
    let id = genUniqueId();
    let actualProp = prop;
    if(prop['$ref']){
        let ref = prop['$ref'];
        actualProp = resolveRef(ref);
    }
    if(actualProp['anyOf']){
        var children = [];
        actualProp['anyOf'].map((eachOfAny) => {
            children.push(interpretUI(eachOfAny, id));
        });
        return <AnyOf children={children} description={actualProp['description']} id={id} parentId={parentId}/>;
    } else if(actualProp['type']){
        const type = actualProp['type'];
        if(type === 'object'){
            let children = [];
            if(actualProp['properties']){
                // write something
            }
            if(actualProp['additionalProperties']){
                var child = interpretUI(actualProp['additionalProperties'], id);
                children.push(<AnyProp child={child} id={id} parentId={parentId}/>);
            }
            return <Obj children={children} description={actualProp['description']} id={id} parentId={parentId}/>;
        } else if(type === 'string'){
            return <input type='text' placeholder={actualProp.description} id={id} parentId={parentId}/>;
        } else if(type === 'array') {
            return <Arr {...actualProp} id={id} parentId={parentId}/>;
        } 
    } else if(actualProp['instanceof']){
        const instanceOf = actualProp['instanceof'];
        if(instanceOf === 'Function') {
            return 'Function';
        } else if(instanceOf === 'RegExp'){
            return 'RegExp';
        }
    } else if(actualProp['allOf']){
        children = [];
        actualProp['allOf'].map((eachOfAny) => {
            children.push(interpretUI(eachOfAny, id));
        });
        return <AllOf children={children} id={id} parentId={parentId}/>;
    } else if(actualProp['enum']){
        return 'Enum';
    }
    return 'Other';
};
const getDef = (ref) => {
    return ref.split('/')[2];
};

export const resolveRef = (ref = '') => {
    return definitions[getDef(ref)];
};

export default makeUI;