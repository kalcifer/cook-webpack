/** @jsx element */
import {element} from 'deku';
import makeUI from '../utils';

let RenderSchema = {
    render: ({props, state}) => {
        return <div>
            <h1>Show schema here</h1>
            {makeUI().elementUI}
        </div>
    }
}

export default RenderSchema