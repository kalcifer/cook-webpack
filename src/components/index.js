/** @jsx element */
import {element} from 'deku';
import makeUI from '../utils';

let RenderSchema = {
    render: ({props, state}) => {
        console.log(makeUI());
        return <div>
            <h1>Show schema here</h1>
        </div>
    },
    beforeRender: () => {
        console.log('Im before rendering');
    },
    afterRender: () =>{
        console.log('Im after rendering.');
    }
}

export default RenderSchema