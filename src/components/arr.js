/** @jsx element */
import {element} from 'deku';
import {interpretUI} from '../utils'

function render ({props, state}) {
        let items = props.items;
        if(items['$ref'] === '#/definitions/externals') {
            return <div>TODO - This is recursive </div>
        }
        return <div data-type='arr'>
            {items && items.type === 'string' ? <input type='text' /> : interpretUI(items, props.id)}
            <div>+ Add more</div>
        </div>
    }


function onCreate ({ props, dispatch }) {
  dispatch({
    type: 'ELEMENT_CREATED',
    id: props.id
  })
}

function onRemove ({ props, dispatch }) {
  dispatch({
    type: 'ELEMENT_REMOVED',
    id: props.id
  })
}

export default {render, onCreate, onRemove}