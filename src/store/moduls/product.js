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

    saveProduct({ commit, dispatch }, product) {
        //vue resource islemleri
        Vue.http.post("https://urun-islemleri-egitim-default-rtdb.firebaseio.com/products.json", product)
            .then(response => {
                product.key = response.body.name;
                commit("updateProductList", product)
                let tradeResult = {
                    purchase: product.price,
                    sale: 0,
                    count: product.count,
                }
                dispatch("setTradeResult", tradeResult)
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