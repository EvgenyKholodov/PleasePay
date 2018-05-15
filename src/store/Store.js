import { observable,  } from 'mobx'

export const store = window.store = observable({
    countries : [],
    currencies : [],
    currentCountry: null,
    currentCurrency: null
});








