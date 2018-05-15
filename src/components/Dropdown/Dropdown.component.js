import React, { Component } from 'react';
import './Dropdown.css'
import { Field } from './../Field/Field.component';
import { observer } from 'mobx-react'
import  { store }   from './../../store/Store'
import {serializeStore,deserializeStore } from './../../models/Models'
@observer
export default class Dropdown extends Component {

    componentWillMount() {
        fetch('https://api.pleasepay.co.uk/countries')
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                store.countries = myJson.items;
            })
            .catch((e) => {
                console.log('error', e);
            });

        fetch('https://api.pleasepay.co.uk/currencies')
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                store.currencies = myJson.items;

            })
            .catch((e) => {
                console.log('error', e);
            });

        const data = deserializeStore(localStorage.storeModel);

        store.currentCurrency = data.currentCurrency;
        store.currentCountry = data.currentCountry;
    }

    handleChangeCountries = (selectedOption) => {
        const newCurrancy = { value: selectedOption.preferredCurrency, label: selectedOption.preferredCurrency }
        store.currentCountry = selectedOption;
        store.currentCurrency = newCurrancy;
        localStorage.setItem('storeModel',serializeStore(store));

    };

    handleChangeCurrency = (selectedOption) => {
        store.currentCurrency = selectedOption;
        localStorage.setItem('storeModel',serializeStore(store));;
    };



    render() {
        const countries = store.countries.map((item) => {
            const value = item.translations.en;
            const label = item.translations.en;
            const preferredCurrency = item.preferredCurrency.name;
            return { value, label, preferredCurrency }
        });
        const Currencies = store.currencies.map((item) => {
            const value = item.translations.en;
            const label = item.translations.en;
            return { value, label }
        });
        const currentCountry = store.currentCountry;
        const currentCurrency = store.currentCurrency;
        return (
            <div className="dropdown">
                    <Field
                        type='County'
                        name="form-field-name"
                        value={currentCountry}
                        onChange={this.handleChangeCountries}
                        options={countries}
                        placeHolder="qweqweqwe"
                    />
                    <Field
                        type='Currency'
                        name="form-field-name"
                        value={ currentCurrency }
                        onChange={this.handleChangeCurrency}
                        options={Currencies}
                    />
            </div>
        );
    }
}


