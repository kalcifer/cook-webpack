/** @jsx element */
import {element} from 'deku';
import schema from '../../schema/webpackSchema.json'
import AnyOf from '../components/anyOf';
import AnyProp from '../components/anyProp';
import Obj from '../components/obj';
import AllOf from '../components/allOf';
import Arr from '../components/arr';

let definitions = schema.definitions;
const makeUI = function(part = 'entry'){
    var prop = schema.properties[part];
    var elementUI = interpretUI(prop, {});
    return {prop, elementUI};
}

export const interpretUI = function(prop, elementUI) {
    let actualProp = prop;
    if(prop['$ref']){
        let ref = prop['$ref'];
        actualProp = resolveRef(ref);
    }
    if(actualProp['anyOf']){
        var children = [];
        actualProp['anyOf'].map((eachOfAny) => {
            children.push(interpretUI(eachOfAny));
        })
        return <AnyOf children={children} description={actualProp['description']}/>;
    } else if(actualProp['type']){
        const type = actualProp['type'];
        if(type === 'object'){
            console.log(actualProp)
            let children = [];
            if(actualProp['properties']){

            }
            if(actualProp['additionalProperties']){
                var child = interpretUI(actualProp['additionalProperties']);
                children.push(<AnyProp child={child}/>)
            }
            return <Obj children={children} description={actualProp['description']}/>;
        } else if(type === 'string'){
            return <input type='text' placeholder={actualProp.description}/>
        } else if(type === 'array') {
            return <Arr {...actualProp}/>
        } 
    } else if(actualProp['instanceof']){
        const instanceOf = actualProp['instanceof'];
        if(instanceOf === 'Function') {
            return "Function"
        } else if(instanceOf === 'RegExp'){
            return 'RegExp';
        }
    } else if(actualProp['allOf']){
        var children = [];
        actualProp['allOf'].map((eachOfAny) => {
            children.push(interpretUI(eachOfAny));
        })
        return <AllOf children={children}/>; 
    } else if(actualProp['enum']){
        return 'Enum'
    }
    return elementUI;
}
const getDef = (ref) => {
    return ref.split('/')[2];
}

export const resolveRef = (ref = '') => {
    return definitions[getDef(ref)];
}

export default makeUI;