import React, {Component} from 'react';
import {connect} from 'react-redux';
import makeUI from '../utils';

export class RenderSchema extends Component{
    constructor() {
        super();
        this.state = {
            selectedProp: 'entry'
        }
    }
    handleClick(prop){
        this.setState({
            selectedProp: prop
        })
    }
    render() {
        return <div>
            <h1>Cook your own webpack</h1>
            <div class='container'>
                <div class='left'>
                    <ul>
                    {['entry', 'externals', 'context', 'dependencies', 'devtool', 'name'].map((property, id) => 
                        <li key={id} onClick={this.handleClick.bind(this, property)}>{property}</li>
                    )}
                    </ul>
                </div>
                <div class='right'>
                    <div class='next-node'>
                        <div>{this.state.selectedProp.toUpperCase()}</div>
                        <div >{makeUI(this.state.selectedProp).elementUI}</div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default connect()(RenderSchema);