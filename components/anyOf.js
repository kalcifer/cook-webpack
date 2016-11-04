import React, {Component} from 'react';

class AnyOf extends Component {
    render(){
        return <div data-type='anyOf'>
            {this.props.children.map((child, index) => {
                return <div className='anyOf'>
                    {child}
                    {-1 < index  && index < (this.props.children.length - 1) ? <div> Or </div>: null}
                </div>;
            })}
        </div>;
    }
}

export default AnyOf;