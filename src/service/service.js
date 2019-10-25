const Koa = require('koa');
const Router = require('koa-router')
const app = new Koa();
const router = new Router();
const cors = require('koa2-cors');
app.use(cors({
  origin: function (ctx) {
    if (ctx.url === '/test') {
      return "*"; // 允许来自所有域名请求
    }
    return 'http://localhost:8080';
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

router.get('/', async (ctx, next) => {
  ctx.body = 'home'
})
router.get('/hot', async (ctx, next) => {
  ctx.body = [{
      id: 1,
      title: 'hot1'
    },
    {
      id: 2,
      title: 'hot1'
    },
    {
      id: 3,
      title: 'hot1'
    }
  ]
})
router.get('/js', async (ctx, next) => {
  ctx.body = [{
      id: 1,
      title: 'js1'
    },
    {
      id: 2,
      title: 'js1'
    },
    {
      id: 3,
      title: 'js1'
    }
  ]
})
router.post('/getNowRead', async (ctx, next) => {
  console.log(ctx.query)
  ctx.body = "> 先简单说一说，我们前端路由的实现主要是为了SPA应用的框架，框架开发都是单页应用，单页应用的特点就是跳转页面的时候的不刷新浏览器，那想要实现跳转页面不刷新浏览器的方式有两种：一种是通过hash的方式、另一种就是通过H5的history的api实现\n\n**我们将挂载完vue-router的Vue实例打印出来看看都增加了什么东西**\n![](https://user-gold-cdn.xitu.io/2019/5/4/16a834d5b0a364c5?w=1414&h=690&f=png&s=155223)\n![](https://user-gold-cdn.xitu.io/2019/5/4/16a834dee19c150f?w=1488&h=828&f=png&s=248930)\n## 路由实现的核心原理\n- hash的实现原理\n```html\n<a href=\"#/home\">首页</a>\n<a href=\"#/about\">关于</a>\n<div id=\"html\"></div>\n\n<script>\n    window.addEventListener('load',()=>{\n        html.innerHTML = location.hash.slice(1);\n    });\n    window.addEventListener('hashchange',()=>{\n        html.innerHTML = location.hash.slice(1)\n    })\n</script>\n```\n- history api的实现原理\n```html\n<a onclick=\"go(/home)\">首页</a>\n<a onclick=\"go(/about)\">关于</a>\n<div id=\"html\"></div>\n\n<script >\n    function go(pathname) {\n        history.pushState({},null,pathname)\n        html.innerHTML = pathname;\n    }\n    window.addEventListener('popstate',()=>{\n        go(location.pathname);\n    })\n</script>\n\n```\n## 源码实现\n```js\nclass HistoryRoute{\n    constructor(){\n        this.current = null;\n    }\n}\nclass  vueRouter {\n  constructor(options){\n      this.mode = options.mode || \"hash\";\n      this.routes = options.routes || [];\n      // 传递的路由表是数组 需要装换成{'/home':Home,'/about',About}格式\n      this.routesMap = this.createMap(this.routers);\n      // 路由中需要存放当前的路径  需要状态\n      this.history = new HistoryRoute;\n      this.init();//开始初始化操作\n  }\n  init(){\n      if(this.mode == 'hash'){\n          // 先判断用户打开时有没有hash，没有就跳转到#/\n          location.hash?'':location.hash = '/';\n          window.addEventListener('load',()=>{\n              this.history.current = location.hash.slice(1);\n          });\n          window.addEventListener('hashchange',()=>{\n              this.history.current = location.hash.slice(1);\n          })\n      }else {\n          location.pathname?'':location.pathname = '/';\n          window.addEventListener('load',()=>{\n              this.history.current = location.pathname;\n          });\n          window.addEventListener('popstate',()=>{\n              this.history.current = location.pathname;\n          })\n          \n      }\n  }\n  createMap(routes){\n      return routes.reduce((memo,current)=>{\n          memo[current.path] = current.component\n          return momo\n      },{})\n  }\n}\n//使用vue.use就会调用install方法\nvueRouter.install = function(Vue,opts) {\n    //每个组件都有 this.$router / this.$route 所以要mixin一下\n    Vue.mixin({\n        beforeCreate(){ //混合方法\n            if(this.$options && this.$options.router){//定位跟组件\n                this._root = this;//把当前实例挂载在_root上\n                this._router = this.$options.router // 把router实例挂载在_router上\n                //history中的current变化也会触发\n                Vue.util.defineReactive(this,'xxx',this._router.history);\n            }else {\n                // vue组件的渲染顺序  父 -> 子 -> 孙子\n                this._root =  this.$parent._root;//获取唯一的路由实例\n            }\n            Object.defineProperties(this,'$router',{//Router的实例\n                get(){\n                    return this._root._router;\n                }\n            });\n            Object.defineProperties(this,'$route',{\n                get(){\n                    return {\n                        //当前路由所在的状态\n                        current:this._root._router.history.current\n                    }\n                }\n            })\n        }\n    });\n    // 全局注册 router的两个组件\n    Vue.component('router-link',{\n        props:{\n            to:String,\n            tag:String\n        },\n        methods:{\n            handleClick(){跳转方法\n                \n            }\n        },\n        render(h){\n            let mode = this._self._root._router.mode;\n            let tag = this.tag;\n            return <tag on-click={this.handleClick} href={mode === 'hash'?`${this.to}`:this.to}>{this.$slots.default}</tag>\n        }\n    })\n    Vue.component('router-view',{//根据当前的状态 current 对应相应的路由\n        render(h){\n            //将current变成动态的 current变化应该会影响视图刷新\n            //vue实现双向绑定 重写Object.defineProperty\n            let current = this._self._root._router.history.current;\n            let routeMap = this._self._root._router.routesMap\n            return h(routeMap[current])\n        }\n    })\n}\nexport  default VueRouter;\n\n\n```\n\n"
})
app.use(router.routes())
app.use(router.allowedMethods())
let port = 3000
app.listen(port, 'localhost', () => {
  console.log(`server start ${'localhost:'+3000}`)
});