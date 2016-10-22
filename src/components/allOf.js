/** @jsx element */
import {element} from 'deku';

let AllOf = {
    render: ({props, state}) => {
        return <div data-type='allOf'>
            {props.children.map((child, index) => {
                return <div>
                    {child}
                    {-1 < index  && index < (props.children.length - 1) ? <div> And </div>: null}
                </div>
            })}
        </div>
    }
}

export default AllOf