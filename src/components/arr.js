/** @jsx element */
import {element} from 'deku';
import {interpretUI} from '../utils'

let Arr = {
    render: ({props, state}) => {
        let items = props.items;
        if(items['$ref'] === '#/definitions/externals') {
            return <div>TODO - This is recursive </div>
        }
        return <div data-type='arr'>
            {items && items.type === 'string' ? <input type='text' /> : interpretUI(items)}
            <div>+ Add more</div>
        </div>
    }
}

export default Arr