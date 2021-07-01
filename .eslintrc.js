module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: ['plugin:vue/essential', 'airbnb-base', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 12,
		parser: 'babel-eslint',
		sourceType: 'module'
	},
	plugins: ['vue'],
	rules: {}
};
