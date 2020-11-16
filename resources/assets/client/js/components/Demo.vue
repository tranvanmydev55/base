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
            <div class="col-lg-4 col-sm-6 mb-grid-gutter pb-3">
                <router-link class="d-block nav-heading text-center" :to="{ name: 'Project' , params: { slug: 'demo'}}">
                    <div class="card card-hover border-0 box-shadow-lg mb-4">
                        <img class="card-img" src="img/demo/presentation/demos/unnamed.jpg" alt="Business Consulting" />
                    </div>
                    <h3 class="h5 nav-heading-title mb-0">Business Consulting</h3>
                    <span class="font-size-sm font-weight-normal text-muted">Corpoarate, Business, Agency</span>
                </router-link>
            </div>
            <div class="col-lg-4 col-sm-6 mb-grid-gutter pb-3">
                <a class="d-block nav-heading text-center" href="detail-Product.html">
                    <div class="card card-hover border-0 box-shadow-lg mb-4">
                        <img class="card-img" src="img/demo/presentation/demos/unnamed.jpg" alt="Business Consulting" />
                    </div>
                    <h3 class="h5 nav-heading-title mb-0">Business Consulting</h3>
                    <span class="font-size-sm font-weight-normal text-muted">Corpoarate, Business, Agency</span>
                </a>
            </div>
            <div class="col-lg-4 col-sm-6 mb-grid-gutter pb-3">
                <a class="d-block nav-heading text-center" href="https://demo.createx.studio/around/demo-booking-directory.html">
                    <div class="card card-hover border-0 box-shadow-lg mb-4">
                        <img class="card-img" src="img/demo/presentation/demos/booking.jpg" alt="Booking / Directory" />
                    </div>
                    <h3 class="h5 nav-heading-title mb-0">Booking / Directory</h3>
                    <span class="font-size-sm font-weight-normal text-muted">Listings, Flights, Destinations</span>
                </a>
            </div>
            <div class="col-lg-4 col-sm-6 mb-grid-gutter pb-3">
                <a class="d-block nav-heading text-center" href="https://demo.createx.studio/around/demo-creative-agency.html">
                    <div class="card card-hover border-0 box-shadow-lg mb-4">
                        <img class="card-img" src="img/demo/presentation/demos/creative-agency.jpg" alt="Creative Agency" />
                    </div>
                    <h3 class="h5 nav-heading-title mb-0">Creative Agency</h3>
                    <span class="font-size-sm font-weight-normal text-muted">Creative Business, Portfolio, Agency</span>
                </a>
            </div>
            <div class="col-lg-4 col-sm-6 mb-grid-gutter pb-3">
                <a class="d-block nav-heading text-center" href="https://demo.createx.studio/around/demo-web-studio.html">
                    <div class="card card-hover border-0 box-shadow-lg mb-4">
                        <img class="card-img" src="img/demo/presentation/demos/web-studio.jpg" alt="Web Studio" />
                    </div>
                    <h3 class="h5 nav-heading-title mb-0">Web Studio</h3>
                    <span class="font-size-sm font-weight-normal text-muted">Web Design, Portfolio, Agency</span>
                </a>
            </div>
            <div class="col-lg-4 col-sm-6 mb-grid-gutter pb-3">
                <a class="d-block nav-heading text-center" href="https://demo.createx.studio/around/demo-product-software.html">
                    <div class="card card-hover border-0 box-shadow-lg mb-4">
                        <img class="card-img" src="img/demo/presentation/demos/software-landing.jpg" alt="Product Landing - Software" />
                    </div>
                    <h3 class="h5 nav-heading-title mb-0">
                        Product Landing - Software
                    </h3>
                    <span class="font-size-sm font-weight-normal text-muted">Software, Showcase, Landing Page</span>
                </a>
            </div>
            <div class="col-lg-4 col-sm-6 mb-grid-gutter pb-3">
                <a class="d-block nav-heading text-center" href="https://demo.createx.studio/around/demo-product-gadget.html">
                    <div class="card card-hover border-0 box-shadow-lg mb-4">
                        <img class="card-img" src="img/demo/presentation/demos/gadget-landing.jpg" alt="Product Landing - Gadget" />
                    </div>
                    <h3 class="h5 nav-heading-title mb-0">
                        Product Landing - Gadget
                    </h3>
                    <span class="font-size-sm font-weight-normal text-muted">Gadget, Showcase, Landing Page</span>
                </a>
            </div>
            <div class="col-lg-4 col-sm-6 mb-grid-gutter pb-3">
                <a class="d-block nav-heading text-center" href="https://demo.createx.studio/around/demo-mobile-app.html">
                    <div class="card card-hover border-0 box-shadow-lg mb-4">
                        <img class="card-img" src="img/demo/presentation/demos/mobile-app.jpg" alt="Mobile App Showcase" />
                    </div>
                    <h3 class="h5 nav-heading-title mb-0">Mobile App Showcase</h3>
                    <span class="font-size-sm font-weight-normal text-muted">Mobile App, Showcase, Landing</span>
                </a>
            </div>
            <div class="col-lg-4 col-sm-6 mb-grid-gutter pb-3">
                <a class="d-block nav-heading text-center" href="https://demo.createx.studio/around/demo-coworking-space.html">
                    <div class="card card-hover border-0 box-shadow-lg mb-4">
                        <img class="card-img" src="img/demo/presentation/demos/coworking.jpg" alt="Coworking Space" />
                    </div>
                    <h3 class="h5 nav-heading-title mb-0">Coworking Space</h3>
                    <span class="font-size-sm font-weight-normal text-muted">Coworking Space Landing Page</span>
                </a>
            </div>
            <div class="col-lg-4 col-sm-6 mb-grid-gutter pb-3">
                <a class="d-block nav-heading text-center" href="https://demo.createx.studio/around/demo-event-landing.html">
                    <div class="card card-hover border-0 box-shadow-lg mb-4">
                        <img class="card-img" src="img/demo/presentation/demos/event-landing.jpg" alt="Event Landing" />
                    </div>
                    <h3 class="h5 nav-heading-title mb-0">Event Landing</h3>
                    <span class="font-size-sm font-weight-normal text-muted">Landing Page, Event, Countdown, Tickets</span>
                </a>
            </div>
            <div class="col-lg-4 col-sm-6 mb-grid-gutter pb-3">
                <a class="d-block nav-heading text-center" href="index.html">
                    <div class="card card-hover border-0 box-shadow-lg mb-4">
                        <img class="card-img" src="img/demo/presentation/demos/template-presentation.jpg" alt="Web Template Presentation" />
                    </div>
                    <h3 class="h5 nav-heading-title mb-0">
                        Web Template Presentation
                    </h3>
                    <span class="font-size-sm font-weight-normal text-muted">Showcase your Web Template features
                        beautifully</span>
                </a>
            </div>
            <div class="col-lg-4 col-sm-6 mb-grid-gutter pb-3">
                <a class="d-block nav-heading text-center" href="https://demo.createx.studio/around/demo-marketing-seo.html">
                    <div class="card card-hover border-0 box-shadow-lg mb-4">
                        <img class="card-img" src="img/demo/presentation/demos/marketing-seo.jpg" alt="Digital Marketing &amp; SEO" />
                    </div>
                    <h3 class="h5 nav-heading-title mb-0">
                        Digital Marketing &amp; SEO
                    </h3>
                    <span class="font-size-sm font-weight-normal text-muted">Marketing services, Agency, Portfolio</span>
                </a>
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
