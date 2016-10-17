import schema from '../../schema/webpackSchema.json'
let definitions = schema.definitions;
const makeUI = function(part = 'entry'){
    var prop = schema.properties[part];
    if(prop['$ref']){
        let ref = prop['$ref'];
        let actualProp = definitions[getDef(ref)];
        return actualProp
    }
    return prop;
}

const getDef = (ref) => {
    return ref.split('/')[2];
}

export default makeUI;