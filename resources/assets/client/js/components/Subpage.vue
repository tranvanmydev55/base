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
import Header1 from '&/components/Header1';
import Footer2 from '&/components/Footer';

export default {
    name: 'Subpage',
    components: {
        Header1,
        Footer2,
    },
    mounted() {
        let recaptchaScript = document.createElement('script');
        recaptchaScript.setAttribute('src', 'vendor/tiny-slider/dist/min/tiny-slider.js');
        document.head.appendChild(recaptchaScript);
        let themeScript = document.createElement('script');
        themeScript.setAttribute('src', 'js/theme-slide.min.js');
        document.head.appendChild(themeScript);
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
