/** @jsx element */
import {element} from 'deku';

let Arr = {
    render: ({props, state}) => {
        const items = props.items;
        return <div data-type='arr'>
            {items.type === 'string' ? <input type='text' /> : ""}
            <div>+ Add more</div>
        </div>
    }
}

export default Arr