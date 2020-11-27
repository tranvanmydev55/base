<template>
<header class="cs-header navbar navbar-expand-lg navbar-light navbar-floating navbar-sticky" data-scroll-header>
    <div class="container px-0 px-xl-3">
        <button class="navbar-toggler ml-n2 mr-2" type="button" data-toggle="offcanvas" data-offcanvas-id="primaryMenu">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand order-lg-1 mx-auto ml-lg-0 pr-lg-2 mr-lg-4" href="/">
            <img class="d-none d-lg-block" width="153" src="img/logo/logo-dark.png" alt="Around" />
            <img class="d-lg-none" width="58" src="img/logo/logo-icon.png" alt="Around" />
        </a>
        <div class="d-flex align-items-center order-lg-3 ml-lg-auto">
            </div>
        <div class="cs-offcanvas-collapse order-lg-2" id="primaryMenu">
            <div class="cs-offcanvas-cap navbar-box-shadow">
                <h5 class="mt-1 mb-0">Menu</h5>
                <button class="close lead" type="button" data-toggle="offcanvas" data-offcanvas-id="primaryMenu"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="cs-offcanvas-body">
                <!-- Menu-->
                <ul class="navbar-nav">
                    <li class="nav-item dropdown dropdown-mega"><a class="nav-link dropdown-toggle" href="portfolio-single-carousel.html#" data-toggle="dropdown">Demos</a>
                        <div class="dropdown-menu"><a class="dropdown-column dropdown-column-img bg-secondary" href="https://demo.createx.studio/around/index.html" style="background-image: url(img/demo/menu-banner.jpg);"></a>
                            <div class="dropdown-column"><a class="dropdown-item" href="https://demo.createx.studio/around/index.html">Web Template Presentation</a><a class="dropdown-item" href="https://demo.createx.studio/around/demo-business-consulting.html">Business Consulting</a>
                                <a class="dropdown-item" href="https://demo.createx.studio/around/demo-shop-homepage.html">Shop Homepage
                                </a><a class="dropdown-item" href="https://demo.createx.studio/around/demo-booking-directory.html">Booking / Directory</a><a class="dropdown-item" href="https://demo.createx.studio/around/demo-creative-agency.html">Creative
                                    Agency</a><a class="dropdown-item" href="https://demo.createx.studio/around/demo-web-studio.html">Web Studio</a><a class="dropdown-item" href="https://demo.createx.studio/around/demo-product-software.html">Product
                                    Landing - Software</a></div>
                            <div class="dropdown-column"><a class="dropdown-item" href="https://demo.createx.studio/around/demo-product-gadget.html">Product Landing - Gadget</a><a class="dropdown-item" href="https://demo.createx.studio/around/demo-mobile-app.html">Mobile App
                                    Showcase</a><a class="dropdown-item" href="https://demo.createx.studio/around/demo-coworking-space.html">Coworking Space</a><a class="dropdown-item" href="https://demo.createx.studio/around/demo-event-landing.html">Event
                                    Landing</a><a class="dropdown-item" href="https://demo.createx.studio/around/demo-marketing-seo.html">Digital Marketing &amp; SEO</a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="portfolio-single-carousel.html#" data-toggle="dropdown">Docs / UI Kit</a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="https://demo.createx.studio/around/docs/dev-setup.html">
                                    <div class="d-flex align-items-center">
                                        <div class="font-size-xl text-muted"><i class="fe-file-text"></i></div>
                                        <div class="pl-3"><span class="d-block text-heading">Documentation</span><small class="d-block text-muted">Kick-start customization</small></div>
                                    </div>
                                </a>
                            </li>
                            <li class="dropdown-divider"></li>
                            <li>
                                <a class="dropdown-item" href="https://demo.createx.studio/around/components/typography.html">
                                    <div class="d-flex align-items-center">
                                        <div class="font-size-xl text-muted"><i class="fe-layers"></i></div>
                                        <div class="pl-3"><span class="d-block text-heading">UI Kit<span class="badge badge-danger ml-2">50+</span></span><small class="d-block text-muted">Flexible components</small></div>
                                    </div>
                                </a>
                            </li>
                            <li class="dropdown-divider"></li>
                            <li>
                                <a class="dropdown-item" href="https://demo.createx.studio/around/docs/changelog.html">
                                    <div class="d-flex align-items-center">
                                        <div class="font-size-xl text-muted"><i class="fe-edit"></i></div>
                                        <div class="pl-3"><span class="d-block text-heading">Changelog<span class="badge badge-success ml-2">v1.1.1</span></span><small class="d-block text-muted">Regular updates</small></div>
                                    </div>
                                </a>
                            </li>
                            <li class="dropdown-divider"></li>
                            <li>
                                <a class="dropdown-item" href="mailto:support">
                                    <div class="d-flex align-items-center">
                                        <div class="font-size-xl text-muted"><i class="fe-life-buoy"></i></div>
                                        <div class="pl-3"><span class="d-block text-heading">Support</span><small class="d-block text-muted">support@createx.studio</small></div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</header>
</template>

<script>
export default {
    name: 'Header1',
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
