import { observable } from 'modx'

class Store {
    @observable countries = [];
    @observable currencies = [];
}
const store = window.store = new Store;

export default store;

autorun(() => {

    console.log(store.countries)
})
