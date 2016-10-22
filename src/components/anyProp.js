/** @jsx element */
import {element} from 'deku';
import TextBox from './textBox';

let AnyProp = {
    render: ({props, state}) => {
        console.log('here i am')
        return <div data-type='anyProp'>
            <TextBox label='label'/>
            {props.child}
        </div>
    }
}

export default AnyProp