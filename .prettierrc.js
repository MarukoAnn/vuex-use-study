module.exports = {
	// 使用tab缩进，默认false
	useTabs: true,
	// tab缩进大小,默认为 2
	tabWidth: 4,
	// 换行长度，默认80
	printWidth: 100,
	// 字符串使用单引号
	singleQuote: true,
	trailingComma: 'none',
	endOfLine: 'auto', // "endOfLine": "auto", 是 Delete `␍`eslint(prettier/prettier) 错误的解决方案
	// 对象中打印空格 默认true
	bracketSpacing: true,
	// 每行末尾自动添加分号
	semi: true,
	// 设置为true时,将多行JSX元素的 放在最后一行的末尾，而不是单独放在下一行
	jsxBracketSameLine: true,
	// 箭头函数参数括号 默认avoid 可选 avoid| always
	// avoid 能省略括号的时候就省略 例如x => x
	// always 总是有括号
	arrowParens: 'avoid'
};
