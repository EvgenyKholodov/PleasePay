import React, { Component } from 'react';
import logo from './logo.svg';
import { Field } from './components/field/field.component';
import { observer } from 'mobx-react'
// import store from 'store/Store'
import './App.css';

@observer
export default class App extends Component {
    constructor() {
        super();

        this.state = {
            countries: [],
            currencies: []
        }

    }

    componentWillMount() {
        fetch('https://api.pleasepay.co.uk/countries')
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                // store.countries = myJson.items;
                return this.setState({
                    countries: myJson.items
                })
            })
            .catch((e) => {
                console.log('error', e);
            });
        fetch('https://api.pleasepay.co.uk/currencies')
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                return this.setState({
                    currencies: myJson.items
                })
            })
            .catch((e) => {
                console.log('error', e);
            });
    }

    handleChangeCountries = (selectedOption) => {
        const newCurrancy = { value: selectedOption.preferredCurrency, label: selectedOption.preferredCurrency }
        this.setState({
            currentCountry: selectedOption,
            currentCurrency: newCurrancy

        });

        localStorage.setItem('currentCountry', selectedOption.value);
        localStorage.setItem('currentCurrency', selectedOption.preferredCurrency);
    }

    handleChangeCurrency = (selectedOption) => {
        // const newCountry =
        this.setState({ currentCurrency: selectedOption });
        localStorage.setItem('currentCurrency', selectedOption.value);
    }

    render() {
        const countries = this.state.countries.map((item) => {
            const value = item.translations.en;
            const label = item.translations.en;
            const preferredCurrency = item.preferredCurrency.name;
            return { value, label, preferredCurrency }
        });
        const Currencies = this.state.currencies.map((item) => {
            const value = item.translations.en;
            const label = item.translations.en;
            return { value, label }
        });
        const currentCountry = this.state.currentCountry || {
            value: localStorage.currentCountry,
            label: localStorage.currentCountry
        };
        const currentCurrency = this.state.currentCurrency || {
            value: localStorage.currentCurrency,
            label: localStorage.currentCurrency
        };

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to PleasePay</h1>
                </header>
                <section>
                    <Field
                        type='County'
                        name="form-field-name"
                        value={currentCountry}
                        onChange={this.handleChangeCountries}
                        options={countries}
                    />

                    <Field
                        type='Currency'
                        name="form-field-name"
                        value={currentCurrency}
                        onChange={this.handleChangeCurrency}
                        options={Currencies}
                    />
                </section>
            </div>
        );
    }
}


