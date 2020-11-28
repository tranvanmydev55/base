<template>
<section class="bg-secondary" id="demos">
    <div class="container pt-5 pb-4 py-md-6 py-lg-7">
        <div class="text-center mb-5 pt-3 pt-lg-4">
            <h2 class="h1 mb-4">
                Homepage
                <span class="bg-faded-primary rounded text-primary px-3 py-2">Blog</span>
            </h2>
            <p class="text-muted">
                Choose from pre-built layouts of our unique homepage demos
            </p>
        </div>
        <div class="row">
            <div v-for="(i, index) in 6" :key="index" class="col-lg-4 col-sm-6 mb-grid-gutter pb-3">
                <router-link class="d-block nav-heading text-center" :to="{ name: 'Project' , params: { slug: 'report-member'}}">
                    <div class="card card-hover border-0 box-shadow-lg mb-4">
                        <img class="card-img" src="img/demo/presentation/demos/booking.jpg" alt="Booking / Directory" />
                    </div>
                    <h3 class="h5 nav-heading-title mb-0">Booking / Directory</h3>
                    <span class="font-size-sm font-weight-normal text-muted">Listings, Flights, Destinations</span>
                </router-link>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'Demo',
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
