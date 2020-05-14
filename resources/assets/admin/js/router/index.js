import Home from '@/components/Home.vue';
import Login from '@/components/authentication/views/Login.vue';

export default [{
    path: '/login',
    name: 'Login',
    component: Login
}, {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: 'dashboard',
    meta: { requiresAuth: true },
    children: [{
        path: 'dashboard',
        component: () =>
            import ('@/modules/dashboard/views/Dashboard.vue'),
        name: 'Dashboard',
        meta: { title: 'dashboard', requiresAuth: true },
    }, {
        path: 'users',
        component: () =>
            import ('@/modules/user/views/List.vue'),
        name: 'Users',
        meta: { title: 'dashboard', requiresAuth: true },
    }]
}];