import Landing from '&/components/Landing.vue';
import Subpage from '&/components/Subpage.vue';

export default [{
    path: '/',
    component: Landing,
    children: [{
        path: '/',
        component: Landing,
        name: 'Landing',
        meta: { title: 'Landing' },
    }]
}, {
    path: '/subpage',
    name: 'Subpage',
    redirect: 'Subpage',
    component: {
        render(c) {
            return c('router-view');
        },
    },
    children: [{
        path: '',
        component: Subpage,
        meta: { title: 'Subpage' },
        children: [{
                path: '/project/:slug',
                name: 'Project',
                component: () =>
                    import ('&/modules/project/views/Detail.vue'),
            },
            {
                path: '/about',
                name: 'About',
                component: () =>
                    import ('&/modules/about/views/About.vue'),
            },
            {
                path: '/contact',
                name: 'Contact',
                component: () =>
                    import ('&/modules/contact/views/Contact.vue'),
            },
            {
                path: '/blog',
                name: 'Blog',
                component: () =>
                    import ('&/modules/blog/views/Blog.vue'),
            }, {
                path: '/blog/detail/:slug',
                name: 'Detail Blog',
                component: () =>
                    import ('&/modules/blog/views/Detail.vue'),
            },
        ],
    }]
}];