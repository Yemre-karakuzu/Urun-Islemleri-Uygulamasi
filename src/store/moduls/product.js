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
    // saveProduct({ commit }, payload) {
    //     //vue resource islemleri
    // },
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