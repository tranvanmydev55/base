<template>
<footer class="cs-footer bg-dark pt-5 pt-md-6 pt-lg-7">
    <div class="container pt-3 pt-md-0">

        <hr class="hr-light my-5 pb-md-4" />
        <div class="row justify-content-center">
            <div class="col-lg-6 col-md-7 pb-md-4 text-center">
                <h4 class="text-light mb-grid-gutter">Subscribe to Newsletter</h4>
                <form class="cs-subscribe-form validate" action="https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;amp;id=29ca296126" method="post" name="mc-embedded-subscribe-form" target="_blank" novalidate>
                    <div class="input-group input-group-overlay flex-nowrap">
                        <div class="input-group-prepend-overlay">
                            <span class="input-group-text text-muted"><i class="fe-mail"></i></span>
                        </div>
                        <input class="form-control prepended-form-control" type="email" name="EMAIL" placeholder="Your email" />
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="submit" name="subscribe">
                                Subscribe*
                            </button>
                        </div>
                    </div>
                    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div style="position: absolute; left: -5000px" aria-hidden="true">
                        <input class="cs-subscribe-form-antispam" type="text" name="b_c7103e2c981361a6639545bd5_29ca296126" tabindex="-1" />
                    </div>
                    <small class="form-text text-light opacity-50 pt-2">*Subscribe to our newsletter to receive early discount
                        offers
                        and new templates info.</small>
                    <div class="cs-subscribe-status"></div>
                </form>
            </div>
        </div>
        <hr class="hr-light mt-5 pb-4" />
        <p class="font-size-sm text-center mb-4 py-3">
            <span class="text-light opacity-50 mr-1">© All rights reserved. Made by</span><a class="nav-link-style nav-link-light" href="https://createx.studio/" target="_blank" rel="noopener">Createx
                Studio</a>
        </p>
    </div>
</footer>
</template>

<script>
export default {
    name: 'Footer',
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
