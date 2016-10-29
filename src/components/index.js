/** @jsx element */
import {element} from 'deku';
import makeUI from '../utils';
import {store} from '../';

let RenderSchema = {
    render: ({props, dispatch, context}) => {
        function handleClick(property) {
            dispatch({
                type: 'CHOOSE_PROP',
                property
            })
        }
        return <div>
            <h1>Cook your own webpack</h1>
            <div class='container'>
                <div class='left'>
                    <ul>
                    {['entry', 'externals', 'context', 'dependencies', 'devtool', 'name'].map(property => 
                        <li onClick={handleClick.bind(this, property)} class={context.currentProp === property? 'selectedProp': ''}>{property}</li>
                    )}
                    </ul>
                </div>
                <div class='right'>
                    <div class='next-node'>
                        <div>{context.currentProp.toUpperCase()}</div>
                        <div >{makeUI(context.currentProp).elementUI}</div>
                    </div>
                </div>
            </div>
        </div>
    },
    afterRender: () =>{
        store.subscribe(render)
    }
}

export default RenderSchema