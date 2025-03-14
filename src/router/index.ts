//import StoryV from '@storylines/components/story/story.vue';
import { createRouter, createWebHashHistory, type RouteLocationNormalized } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('@storylines/components/story/story.vue')
    },
    {
        path: '/:uid',
        component: () => import('@storylines/components/story/story.vue')
    },
    {
        path: '/:lang/:uid',
        component: () => import('@storylines/components/story/story.vue')
    }
];

const router = createRouter({
    routes: routes,
    // mode: 'history', // TODO: uncomment to change to history mode for nicer URLs (eliminating middle hash) see #100
    history: createWebHashHistory(),
    scrollBehavior: function (to: RouteLocationNormalized) {
        if (to.hash) {
            return {
                el: decodeURIComponent(to.hash),
                behavior: 'smooth',
                top:
                    (document.getElementById('h-navbar')?.clientHeight || 0) +
                    (document.getElementById('story-header')?.clientHeight || 0)
            };
        }
    }
});

export default router;
