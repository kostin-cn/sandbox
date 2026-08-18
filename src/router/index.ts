import { createRouter, createWebHistory } from 'vue-router'
import { SUPPORT_LOCALES } from '@/service/i18n'
import i18n from "@/service/i18n";

import type {Locale} from "@/service/i18n";

import Index from '../views/Index.vue';
import Control from "../views/Control.vue";
import MobileApp from "../views/MobileApp.vue";
import Meeting from "../views/Meeting.vue";
import Tariffs from "../views/Tariffs.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";
import PublicOffer from "../views/PublicOffer.vue";
import Admin from '../views/Admin.vue';
import Go from '../views/Go.vue';
import How from '../views/How.vue';

import IndexV2 from '../views/v2/IndexV2.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: "active",
    scrollBehavior(to, from, savedPosition) {
        // Якщо є збережена позиція (наприклад, при навігації назад)
        if (savedPosition) {
            return savedPosition;
        }

        // Якщо є якір (hash), скролимо до нього
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            };
        }

        // Інакше — скролимо на початок сторінки
        return { top: 0 };
    },
    routes: [
        {
            path: "/:lang/control",
            name: "Control",
            component: Control
        },
        {
            path: "/:lang/mobile-app",
            name: "Mobile App",
            component: MobileApp
        },
        {
            path: "/:lang/meeting",
            name: "Meeting",
            component: Meeting
        },
        {
            path: "/:lang/tariffs",
            name: "Tariffs",
            component: Tariffs
        },
        {
            path: "/:lang/privacy-policy",
            name: "Privacy Policy",
            component: PrivacyPolicy
        },
        {
            path: "/:lang/public-offer",
            name: "Public Offer",
            component: PublicOffer
        },
        {
            path: "/:lang/admin",
            name: "Admin",
            component: Admin
        },
        {
            path: "/:lang/go",
            name: "Go",
            component: Go
        },
        {
            path: "/:lang/how",
            name: "How",
            component: How
        },
        {
            path: "/:lang",
            name: "Index",
            component: Index
        }
    ],
})

// Перевірка валідності мови
router.beforeEach((to, from, next) => {
    if (SUPPORT_LOCALES.includes(to.params.lang as Locale)) {
        i18n.global.locale.value = to.params.lang as Locale
        next()
    } else {
        i18n.global.locale.value = SUPPORT_LOCALES[0]
        next(`/${SUPPORT_LOCALES[0]}`)
    }
})

export default router
