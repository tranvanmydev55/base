<template>
<div>
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
        Footer1
    },
    computed: {
        listRoute() {
            return this.$route.matched;
        },

        currenHome() {
            return this.$options.name;
        },
    },

    /**
     * Created with component
     */
    created() {
        /**
         * Do something
         */
    }
};
</script>
