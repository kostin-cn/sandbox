import 'vue';
import { RouteLocationNormalizedLoaded, Router } from 'vue-router';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties extends GlobalServiceProperties {
        $router: Router;
        $route: RouteLocationNormalizedLoaded;
        $sendMail: typeof import('@/service/global').sendMail;
    }
}
