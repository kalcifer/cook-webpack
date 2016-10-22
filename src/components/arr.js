/** @jsx element */
import {element} from 'deku';

let Arr = {
    render: ({props, state}) => {
        return <div data-type='arr'>
            {props.description}
            {props.children}
        </div>
    }
}

export default Arr