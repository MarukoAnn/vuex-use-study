import Vue from 'vue';
import Vuex from 'vuex';
import Astore from './a';
// 挂载Vuex
Vue.use(Vuex);

// 创建 Vuex 对象
const store = new Vuex.Store({
	state: {
		name: '张三',
		age: 18
	},
	// 用于修改state数据
	mutations: {
		// es6 语法，等同于 edit: function(){...}
		edit(state, payload) {
			// eslint-disable-next-line no-console
			console.log(payload);
			// eslint-disable-next-line no-param-reassign
			state.name = payload.name;
		}
	},
	// 用于组装数据
	getters: {
		nameInfo(state) {
			return `姓名${state.name}`;
		},
		fullInfo(state, getters) {
			return `${getters.nameInfo}, 年龄：${state.age}`;
		}
	},
	// 用于异步操作
	actions: {
		Edit(context, payload) {
			/* 	setTimeout(() => {
				context.commit('edit', payload);
			}, 2000); */
			return new Promise(resolve => {
				setTimeout(() => {
					context.commit('edit', payload);
					resolve();
				}, 2000);
			});
		}
	},
	modules: {
		Astore
	}
});

export default store;
