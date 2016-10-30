import React, {Component} from 'react'

class AllOf extends Component {
    render() {
        return <div data-type='allOf'>
            {this.props.children.map((child, index) => {
                return <div key={index}>
                    {child}
                    {-1 < index  && index < (this.props.children.length - 1) ? <div> And </div>: null}
                </div>
            })}
        </div>
    }
}

export default AllOf