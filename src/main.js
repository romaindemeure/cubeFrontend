import { createApp } from 'vue'
import * as VueRouter from 'vue-router'

import App from './App.vue'

import HomePages from '@/views/home.vue'
import VinPages from '@/views/vin.vue'
import WhiskyPages from '@/views/whisky.vue'
import RhumPages from '@/views/rhumm.vue'
import ChampagnePages from '@/views/champagne.vue'
import ComponentstestPages from '@/views/componentstest.vue'
import BlogPages from '@/views/blog.vue'
import ConnexionPages from '@/views/connexion.vue'

import HomeVinPages from '@/components/homecomponents/dishesmenu/vin.vue'
import HomeWhiskyPages from '@/components/homecomponents/dishesmenu/whisky.vue'
import HomeRhumPages from '@/components/homecomponents/dishesmenu/rhumm.vue'
import HomeChampagnePages from '@/components/homecomponents/dishesmenu/champagne.vue'



const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePages,
            children: [
                {
                    path: '',
                    component: HomeVinPages,
                },
                {
                    path: 'homewkisky',
                    component: HomeWhiskyPages,
                },
                {
                    path: 'homerhum',
                    component: HomeRhumPages,
                },
                {
                    path: 'homechampagne',
                    component: HomeChampagnePages,
                },
            ]
        },
        {
            path: '/vin',
            name: 'Vin',
            component: VinPages,
        },
        {
            path: '/whisky',
            name: 'Whisky',
            component: WhiskyPages,
        },
        {
            path: '/rhum',
            name: 'Rhum',
            component: RhumPages,
        },
        {
            path: '/champagne',
            name: 'Champagne',
            component: ChampagnePages,
        },
        {
            path: '/componentstest',
            name: 'Componentstest',
            component: ComponentstestPages,
        },
        {
            path: '/connexion',
            name: 'Connexion',
            component: ConnexionPages,
        },
        {
            path: '/blog',
            name: 'Blog',
            component: BlogPages,
        }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')