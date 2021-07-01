<template>
	<div class="home">
		<div style="display: flex">
			name:
			<h1>{{ name }}</h1>
			年龄：
			<h1>{{ age }}</h1>
			<h2>{{ getNameInfo }}</h2>
			<h2>{{ fullInfo }}</h2>
		</div>
		<button @click="add">点击</button>
	</div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState, mapMutations, mapGetters } from 'vuex';

export default {
	name: 'Home',
	created() {
		// this.$store.state.name = '123';
		// this.$store.commit('edit', { age: 15, sex: '男' });
		// 另一种提交方式
		/* 	this.$store.commit({
			type: 'edit',
			payload: {
				age: 15,
				sex: '男'
			}
		}); */
		// this.$set(this.$store.state, 'age', 15);
	},
	computed: {
		...mapState(['name', 'age']),
		...mapGetters(['nameInfo', 'fullInfo', 'getNameInfo'])
	},

	methods: {
		...mapActions(['aEdit', 'Edit']),
		...mapMutations(['edit']),
		add() {
			this.aEdit({ name: '儿子测试' });
			this.edit({ name: '李四' });
			console.log(this.$store.getters.getNameInfo);
			/* this.$delete(this.$store.state, 'name');
			console.log(this.$store.state.name); */
			/* 	console.log(this.$store.getters.fullInfo);
			console.log(this.$store.getters.getNameInfo);
			this.$store.dispatch('aEdit', { name: '儿子测试' });
			this.$store.dispatch('aEdit', { name: '李四' });
			console.log(this.$store.getters.getNameInfo); */
		}
	}
};
</script>
