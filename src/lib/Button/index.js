import React, {Component} from 'react';
import './index.scss';

export class Button extends Component {

    render() {
        return (
            <button>
                {this.props.children}
            </button>
        );
    }

}