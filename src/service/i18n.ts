import { createI18n } from 'vue-i18n'

import en from '@/lang/en.json'
import ua from '@/lang/ua.json'
import de from '@/lang/de.json'
import pl from '@/lang/pl.json'
import fr from '@/lang/fr.json'
import it from '@/lang/it.json'
import bg from '@/lang/bg.json'
import ar from '@/lang/ar.json'

export const SUPPORT_LOCALES = ['en', 'ua', 'de', 'pl', 'fr', 'it', 'bg', 'ar'] as const
export type Locale = typeof SUPPORT_LOCALES[number]

const i18n = createI18n({
    legacy: false,
    locale: SUPPORT_LOCALES[0],
    fallbackLocale: SUPPORT_LOCALES[0],
    messages: { en, ua, de, pl, fr, it, bg, ar }
})

export default i18n