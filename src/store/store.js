import Vuex from "vuex";
import Vue from "vue";
import product from "./moduls/product";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    modules: {
        product
    }
})