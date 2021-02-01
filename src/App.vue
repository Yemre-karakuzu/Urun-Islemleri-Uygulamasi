<template>
  <div>
    <Header></Header>
    <!-- <ProductPurchase></ProductPurchase> -->
    <!-- <ProductSell></ProductSell> -->
    <ProductList></ProductList>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
//import ProductPurchase from "./components/products/ProductPurchase";
//import ProductSell from "./components/products/ProductSell";
import ProductList from "./components/products/ProductList";
export default {
  components: {
    Header,
    Footer,
    //ProductPurchase,
    //ProductSell,
    ProductList,
  },
};
</script>

<style>
</style>