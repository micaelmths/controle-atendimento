import Vue from 'vue'
import moment from 'moment'

// 25/09/2021
Vue.filter('dataPadrao', value => {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY')
  }
})
