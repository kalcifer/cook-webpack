import schema from '../../schema/webpackSchema.json'
let definitions = schema.definitions;
const makeUI = function(part = 'entry'){
    var prop = schema.properties[part];
    var elementUI = {};
    if(prop['$ref']){
        let ref = prop['$ref'];
        let actualProp = resolveRef(ref)
        elementUI = interpretUI(actualProp, elementUI);
        return {prop:actualProp, elementUI};
    }
    return {prop, elementUI};
}

const interpretUI = function(actualProp, elementUI) {
    if(actualProp['anyOf']){
        elementUI.options = actualProp['anyOf'];
    }
    return elementUI;
}
const getDef = (ref) => {
    return ref.split('/')[2];
}

const resolveRef = (ref) => {
    return definitions[getDef(ref)];
}

export default makeUI;