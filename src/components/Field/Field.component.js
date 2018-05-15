import React, {Component} from 'react';
import Select from 'react-select';
import './Field.css'


export class Field extends Component {
    render() {
        const { type = '', name = '', value = '', onChange = () => {}, options = []  } = this.props;

        return (
            <div className="field">
                <p>{ type }</p>
                <Select
                    name={ name }
                    value={ value }
                    onChange={ onChange }
                    options={ options }
                />
            </div>

        )
    }
}
