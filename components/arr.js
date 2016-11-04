import React, {Component} from 'react';
import {interpretUI} from '../utils';

class Arr extends Component{
    render(){
        let items = this.props.items;
        if(items['$ref'] === '#/definitions/externals') {
            return <div>TODO - This is recursive </div>;
        }
        return <div data-type='arr'>
        {items && items.type === 'string' ? <input type='text' /> : interpretUI(items, this.props.id)}
        <div>+ Add more</div>
    </div>;
    }
}

export default Arr;
