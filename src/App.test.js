import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

import Dropdown from './components/Dropdown/Dropdown.component'
import Field from './components/Field/Field.component'
import store from './store/Store'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Dropdown is exist', () => {
    renderer.create(<Dropdown/>);
});




