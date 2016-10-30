import React, {Component} from 'react';
import {connect} from 'react-redux';
import makeUI from '../utils';

export class RenderSchema extends Component{
    render() {
        function handleClick(property) {
            dispatch({
                type: 'CHOOSE_PROP',
                property
            })
        }
        return <div>
            <h1>Cook your own webpack</h1>
            <div class='container'>
                <div class='left'>
                    <ul>
                    {['entry', 'externals', 'context', 'dependencies', 'devtool', 'name'].map((property, id) => 
                        <li key={id}>{property}</li>
                    )}
                    </ul>
                </div>
                <div class='right'>
                    <div class='next-node'>
                        <div>{'entry'.toUpperCase()}</div>
                        <div >{makeUI('entry').elementUI}</div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default connect()(RenderSchema);