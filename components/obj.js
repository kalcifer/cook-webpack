import React, {Component} from 'react';

class Obj extends Component {
    render() {
        return <div data-type='obj'>
            {this.props.description}
            {this.props.children}
        </div>;
    }
}

export default Obj;