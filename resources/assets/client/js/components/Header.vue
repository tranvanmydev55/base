<template>
<header class="cs-header navbar navbar-expand-lg navbar-dark navbar-floating navbar-sticky">
    <div class="container px-0 px-xl-3">
        <button class="navbar-toggler ml-n2 mr-2" type="button" data-toggle="offcanvas" data-offcanvas-id="primaryMenu">
            <span class="navbar-toggler-icon"></span></button>
        <a class="navbar-brand order-lg-1 mx-auto ml-lg-0 pr-lg-2 mr-lg-4" href="index.html">
            <img class="navbar-floating-logo d-none d-lg-block" width="153" src="img/logo/logo-white.png" alt="Around" />
            <img class="navbar-stuck-logo" width="153" src="img/logo/logo-white.png" alt="Around" />
            <img class="d-lg-none" width="58" src="img/logo/logo-white.png" alt="Around" /></a>
        <div class="d-flex align-items-center order-lg-3 ml-lg-auto">

        </div>
        <div class="cs-offcanvas-collapse order-lg-2" id="primaryMenu">
            <div class="cs-offcanvas-cap navbar-box-shadow">
                <h5 class="mt-1 mb-0">Menu</h5>
                <button class="close lead" type="button" data-toggle="offcanvas" data-offcanvas-id="primaryMenu">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="cs-offcanvas-body">
                <!-- Menu-->
                <ul class="navbar-nav">
                    <li class="nav-item dropdown ">
                        <a class="nav-link" href="blog-grid-rs.html">Blog</a>
                    </li>
                    <li class="nav-item dropdown ">
                        <a class="nav-link" href="about.html">About</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="index.html#" data-toggle="dropdown">Contact</a>
                        <ul class="dropdown-menu">

                            <li>
                                <a class="dropdown-item" href="contacts-v1.html">Contacts-v1</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="contacts-v2.html">Contacts-v2</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="contacts-v3.html">Contacts-v3</a>
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
    name: 'Header',
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
