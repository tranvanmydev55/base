<template>
<div class="wrapper">
    <app-navbar></app-navbar>
    <app-aside></app-aside>
    <div class="content-wrapper">
        <app-breadcrumd></app-breadcrumd>
        <section class="content">
            <div class="container-fluid">
                <router-view></router-view>
            </div>
        </section>
    </div>
    <app-footer></app-footer>
    <div class="control-sidebar-bg"></div>
</div>
</template>

<script>
import AppNavbar from '@/components/Navbar';
import AppAside from '@/components/Aside';
import AppBreadcrumd from '@/components/Breadcrumb';
import AppFooter from '@/components/Footer';
import { mapState } from 'vuex';

export default {
    name: 'Home',
    components: {
        AppNavbar,
        AppAside,
        AppBreadcrumd,
        AppFooter,
    },
    computed: {
        ...mapState({
            user: state => state.storeAuth.user,
        })
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
