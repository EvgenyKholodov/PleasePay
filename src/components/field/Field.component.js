import React, {Component} from 'react';
import Select from 'react-select';
import './field.css'


export class Field extends Component {
    render() {
        const { type, name, value, onChange, options  } = this.props;
        const currentValue = value.value ? value : '';

        return (
            <div className="field">
                <p>{ type }</p>
                <Select
                    name={ name }
                    value={ currentValue }
                    onChange={ onChange }
                    options={ options }
                />
            </div>

        )
    }
}
