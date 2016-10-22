/** @jsx element */
import {element} from 'deku';

let Obj = {
    render: ({props, state}) => {
        return <div data-type='obj'>
            {props.description}
            {props.children}
        </div>
    }
}

export default Obj