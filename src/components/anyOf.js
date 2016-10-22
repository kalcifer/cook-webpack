/** @jsx element */
import {element} from 'deku';

let AnyOf = {
    render: ({props, state}) => {
        return <div data-type='anyOf'>
            {props.children.map((child, index) => {
                return <div class='anyOf'>
                    {child}
                    {-1 < index  && index < (props.children.length - 1) ? <div> Or </div>: null}
                </div>
            })}
        </div>
    }
}

export default AnyOf