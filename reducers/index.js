export default function (state = {
    currentProp: 'entry',
    propDetails:{}
}, action){
    if(action.type === 'ELEMENT_CREATED'){
        /* eslint-disable no-console */
        console.log(action.id);
    } else if(action.type === 'ELEMENT_REMOVED'){
        console.log(action.id);
    } else if(action.type === 'CHOOSE_PROP'){
        return {...state, currentProp:action.property};
    }
    return state;
}