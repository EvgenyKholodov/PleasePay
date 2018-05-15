import { observable } from 'mobx'

class AppStore {
    @observable countries = [];
    @observable currencies = [];
    @observable currentCountry ;
    @observable currentCurrency;
}

const store = window.store = new AppStore;

export default store;

