const Astore = {
	state: {
		aname: '我是儿子'
	},
	getters: {
		getNameInfo(state) {
			return `a 模块的名字是：${state.aname}`;
		}
	},
	mutations: {
		editName(state, payload) {
			// eslint-disable-next-line no-param-reassign
			state.aname = payload.name;
		}
	},
	actions: {
		aEdit(context, payload) {
			setTimeout(() => {
				context.commit('editName', payload);
			}, 2000);
		}
	}
};

export default Astore;
