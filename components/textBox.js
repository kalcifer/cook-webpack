import React, {Component} from 'react';

class TextBox extends Component{
    render() {
        return <input type='text' label={this.props.label} placeholder='Any label'/>;
    }
}

export default TextBox;