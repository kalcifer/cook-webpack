/** @jsx element */
import {element} from 'deku';

let TextBox = {
    render: ({props, state}) => {
        return <input type='text' label={props.label} placeholder='Any label'/>
    }
}

export default TextBox