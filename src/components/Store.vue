<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col bg-dark text-white">
                <a class="navbar-brand">SPORTS STORE</a>
                <cart-summary />
            </div>
        </div>
        <div class="row">
            <div class="col-3 bg-info p-2">
                <CategoryControls />
                <button class="btn btn-block btn-warning mt-5"
                    @click="setShowSearch(true)">
                    Search
                </button>
            </div>
            <div class="col-9 p-2">
                <search />
                <product-list />
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ProductList from "./ProductList";
import CategoryControls from "./CategoryControls";
import CartSummary from "./CartSummary";
import Search from "./Search";

export default {
    name: "Store",
    components: { ProductList, CategoryControls, CartSummary, Search },
    methods: {
        ...mapMutations(["setShowSearch"])
    }
}
</script>

<style scoped>

</style>