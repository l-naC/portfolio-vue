import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import { createI18n } from 'vue-i18n'

function loadLocaleMessages () {
    const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const messages = {}
    locales.keys().forEach(key => {
      const matched = key.match(/([A-Za-z0-9-_]+)\./i)
      if (matched && matched.length > 1) {
        const locale = matched[1]
        messages[locale] = locales(key)
      }
    })
    return messages
}

const i18n = createI18n({
    locale: 'fr', // set locale
    fallbackLocale: 'fr', // set fallback locale
    messages: loadLocaleMessages()
})

const app = createApp(App);

app.use(i18n)

app.mount('#app')