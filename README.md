# vue-store-app

# 1、state 状态管理
state 是定义状态的数据

## 1、mutations
mutations 里面是定义提供修改state的函数
> 不建议使用$store.state 去直接修改状态，这样会导致vueDevtool 监听不到

## 2、getters
getters 里面定义提供获取state状态的函数


## 3、actions
actions 是提供触发mutations里面方法的函数，为了可以异步处理。


> mapState, mapActions, mapMutarions, mapGetters 都是为了方便操作state状态提供的发散函数，可以方便的去使用 函数和状态
> 使其不用去this.$store的去调用了 