/** @jsx element */
import {element} from 'deku';
import makeUI from '../utils';

let RenderSchema = {
    render: ({props, state}) => {
        return <div>
            <h1>Show schema here</h1>
            {['entry', 'externals', 'context', 'dependencies', 'devtool', 'name']
                .map((property) => (<div class='next-node'>
                    <div>{property.toUpperCase()}</div>
                    <div >{makeUI(property).elementUI}</div>
                </div>))}
        </div>
    }
}

export default RenderSchema