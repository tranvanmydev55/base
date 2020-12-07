<template>
<div>
     <div class="vld-parent">
        <loading :active.sync="isLoading"
        :can-cancel="true"
        :loader="'dots'"
        :color="'#766df4'"
        :is-full-page="fullPage"></loading>
    </div>

    <main class="cs-page-wrapper">
        <header-1></header-1>
        <intro></intro>
        <demo></demo>
        <product></product>
        <inner></inner>
        <mobile></mobile>
        <feature></feature>
    </main>
    <footer-1></footer-1>
</div>
</template>

<script>
import Header1 from '&/components/Header';
import Intro from '&/components/Intro';
import Demo from '&/components/Demo';
import Product from '&/components/Product';
import Inner from '&/components/Inner';
import Mobile from '&/components/Mobile';
import Feature from '&/components/Feature';
import Footer1 from '&/components/Footer';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import {
    mapState
} from 'vuex';

export default {
    name: 'Landing',
    components: {
        Header1,
        Intro,
        Demo,
        Product,
        Inner,
        Mobile,
        Feature,
        Footer1,
        Loading
    },

    data() {
        return {
            isLoading: false,
            fullPage: true
        }
    },

    computed: {
        listRoute() {
            return this.$route.matched;
        },

        currenHome() {
            return this.$options.name;
        },

        ...mapState({
            mainLoading: state => state.storeLoading.mainLoading
        }),
    },

    /**
     * Created with component
     */
    created() {
        this.isLoading = true;
        setTimeout(() => {
            this.isLoading = false
        }, 2000)
    },

    methods: {

    }
};
</script>
