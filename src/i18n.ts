import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import kh from "./locales/kh.json";


export default createI18n({
    locale: "kh",
    fallbackLocale: "en",
    legacy: false,
    messages: {
        en: en,
        kh: kh,
    },
});