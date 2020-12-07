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
            <router-view></router-view>
        </main>
        <footer-2></footer-2>
    </div>
</template>

<script>
import Header1 from '&/components/Header1';
import Footer2 from '&/components/Footer';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import {
    mapState
} from 'vuex';

export default {
    name: 'Subpage',
    components: {
        Header1,
        Footer2,
        Loading
    },

    mounted() {
        let recaptchaScript = document.createElement('script');
        recaptchaScript.setAttribute('src', 'vendor/tiny-slider/dist/min/tiny-slider.js');
        document.head.appendChild(recaptchaScript);
        let themeScript = document.createElement('script');
        themeScript.setAttribute('src', 'js/theme-slide.min.js');
        document.head.appendChild(themeScript);
    },

    computed: {
        ...mapState({
            mainLoading: state => state.storeLoading.mainLoading
        }),
    },

    data() {
        return {
            isLoading: false,
            fullPage: true
        }
    },

    /**
     * Created with component
     */
    created() {
        this.isLoading = true;
        setTimeout(() => {
            this.isLoading = false
        }, 2000)
    }
};
</script>
