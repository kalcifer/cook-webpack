/** @jsx element */
import {createApp, element} from 'deku';
import {createStore} from 'redux';
import rootReducer from './reducers';
import App from './components';

let store = createStore(rootReducer);
let render = createApp(document.getElementById('root'), store.dispatch);

render(<App></App>, store.getState());

export {store}