import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { initStore } from '../store';
import reducer from '../reducers';
// import Link from 'next/link';
import App from '../components';

export default class Chef extends Component {
    static getInitialProps ({ req }) {
        const isServer = !!req;
        const store = initStore(reducer, null, isServer);
        return  { initialState: store.getState(), isServer };
    }

    constructor (props) {
        super(props);
        this.store = initStore(reducer, props.initialState, props.isServer);
    }

    render () {
        return (
      <Provider store={this.store}>
        <App />
      </Provider>
        );
    }
}