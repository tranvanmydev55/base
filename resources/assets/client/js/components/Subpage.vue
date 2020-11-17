<template>
<div>
    <main class="cs-page-wrapper">
        <header-1></header-1>
        <router-view></router-view>
    </main>
    <footer-2></footer-2>
</div>
</template>

<script>
import Header1 from '&/components/Header';
import Footer2 from '&/components/Footer2';

export default {
    name: 'Subpage',
    components: {
        Header1,
        Footer2
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
