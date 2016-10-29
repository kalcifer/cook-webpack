export default function rootReducer(state = {
    currentProp: 'entry',
    propDetails:{}
}, action){
    if(action.type === 'ELEMENT_CREATED'){
        console.log(action.id);
    } else if(action.type === 'ELEMENT_REMOVED'){
        console.log(action.id);
    } else if(action.type === 'CHOOSE_PROP'){
        return {...state, currentProp:action.property}
    }
    return state;
}