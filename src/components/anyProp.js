/** @jsx element */
import {element} from 'deku';
import TextBox from './textBox';

let AnyProp = {
    render: ({props, state}) => {
        console.log('here i am')
        return <div data-type='anyProp'>
            <div>
                <TextBox label='label'/>
                {props.child}
            </div>
            <div>
                + Add more props
            </div>
        </div>
    }
}

export default AnyProp