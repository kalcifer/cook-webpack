import React, {Component} from 'react';
import TextBox from './textBox';

class AnyProp extends Component {
    render(){
        console.log('here i am');
        return <div data-type='anyProp'>
            <div>
                <TextBox label='label'/>
                {this.props.child}
            </div>
            <div>
                + Add more props
            </div>
        </div>;
    }
}

export default AnyProp;