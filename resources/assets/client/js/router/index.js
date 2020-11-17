import App from '&/App.vue';
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
        }, ],
    }]
}];