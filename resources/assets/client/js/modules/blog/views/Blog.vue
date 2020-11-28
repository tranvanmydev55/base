<template>
<div>
    <div class="container py-4 mb-2 mb-sm-0 pb-sm-5">
        <div class="row justify-content-center">
            <div class="col-lg-9">
                <nav aria-label="breadcrumb">
                    <ol class="py-1 my-2 breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Blog</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">List no sidebar</li>
                    </ol>
                </nav>
                <h1 class="mb-5">Blog</h1>
                <!-- Post-->
                    <article v-for="(i, index) in 2" :key="index" class="card card-horizontal card-hover mb-grid-gutter"><a class="card-img-top" href="blog-single-ns.html" style="background-image: url(img/blog/01.jpg);"></a>
                        <div class="card-body"><a class="meta-link font-size-sm mb-2" href="#">Digital design</a>
                            <h2 class="h4 nav-heading mb-4">
                                <router-link :to="{ name: 'Detail Blog', params: { slug: 'designer-should-always-keep-their'}}">Designers should always keep their users in mind</router-link>
                            </h2>
                            <a class="media meta-link font-size-sm align-items-center pt-3" href="#">
                                <img class="rounded-circle" width="36" src="img/blog/avatar/01.jpg" alt="Emma Brown">
                                <div class="media-body pl-2 ml-1 mt-n1">by<span class="font-weight-semibold ml-1">Emma Brown</span></div>
                            </a>
                            <div class="mt-3 text-right text-nowrap"><a class="meta-link font-size-xs" href="#"><i class="fe-message-square mr-1"></i>&nbsp;6</a><span class="meta-divider"></span><a class="meta-link font-size-xs" href="#"><i class="fe-calendar mr-1 mt-n1"></i>&nbsp;Feb 19</a></div>
                        </div>
                    </article>
                    
                <!-- Pagination-->
                <div class="d-md-flex justify-content-between align-items-center pt-3 pb-2">
                    <div class="d-flex justify-content-center align-items-center mb-4">
                        <label class="pr-1 mr-2">Show</label>
                        <select class="form-control custom-select mr-2" style="width: 5rem;">
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="50">50</option>
                        </select>
                        <div class="font-size-sm text-nowrap pl-1 mb-1">posts per page</div>
                    </div>
                    <nav class="mb-4" aria-label="Page navigation">
                        <ul class="pagination justify-content-center">
                            <li class="page-item"><a class="page-link" href="#" aria-label="Previous"><i class="fe-chevron-left"></i></a></li>
                            <li class="page-item d-sm-none"><span class="page-link page-link-static">2 / 10</span></li>
                            <li class="page-item d-none d-sm-block"><a class="page-link" href="#">1</a></li>
                            <li class="page-item active d-none d-sm-block" aria-current="page"><span class="page-link">2<span class="sr-only">(current)</span></span></li>
                            <li class="page-item d-none d-sm-block"><a class="page-link" href="#">3</a></li>
                            <li class="page-item d-none d-sm-block"><a class="page-link" href="#">4</a></li>
                            <li class="page-item d-none d-sm-block">...</li>
                            <li class="page-item d-none d-sm-block"><a class="page-link" href="#">10</a></li>
                            <li class="page-item"><a class="page-link" href="#" aria-label="Next"><i class="fe-chevron-right"></i></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Contact',
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
