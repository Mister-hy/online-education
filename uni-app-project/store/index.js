//引用Vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import {
	getItem,
	setItem
} from '@/utils/storage.js'

const TOKEN_KEY = 'token';

//实例store对象
const store = new Vuex.Store({
	state: {
		token: getItem(TOKEN_KEY) || ''
	},
	mutations: {
		SET_TOKEN(state, token) {
			setItem(TOKEN_KEY, token)
		}
	},
	actions: {
		setToken({
			commit
		}, paylaod) {
			commit('SET_TOKEN', paylaod)
		}
	}
})

//导出store对象
export default store
