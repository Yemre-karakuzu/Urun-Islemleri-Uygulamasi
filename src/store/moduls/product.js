import Vue from "vue";
const state = {
    products: []
}
const getters = {
    getProducts(state) {
        return state.products;
    },
    // getProduct(state) {

    // }
}
const mutations = {
    updateProductList(state, product) {
        state.products.push(product);
    }
}
const actions = {
    // initApp({ commit }) {
    //     //vue resource islemleri
    // },
    //{ commit },
    saveProduct(payload) {
        //vue resource islemleri
        Vue.http.post("https://urun-islemleri-egitim-default-rtdb.firebaseio.com/products.json", payload)
            .then(response => {
                console.log(response);
            })

    },
    // sellProduct({ commit }, payload) {
    //     //vue resource islemleri
    // }
}

export default {
    state,
    getters,
    mutations,
    actions,

}