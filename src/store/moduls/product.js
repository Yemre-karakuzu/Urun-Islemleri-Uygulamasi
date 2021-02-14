import Vue from "vue";
import { router } from "../../router"
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
    initApp({ commit }) {
        Vue.http.get("https://urun-islemleri-egitim-default-rtdb.firebaseio.com/products.json")
            .then(response => {
                let data = response.body;
                for (let key in data) {
                    data[key].key = key
                    commit("updateProductList", data[key])
                }
            })
    },

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
                router.replace("/")
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