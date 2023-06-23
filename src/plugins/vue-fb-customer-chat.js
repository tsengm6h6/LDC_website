import VueFbCustomerChat from 'vue-fb-customer-chat'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VueFbCustomerChat', VueFbCustomerChat)
})
