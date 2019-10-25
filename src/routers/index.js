export default [
    {
        path:'/home',
    },
    {
        path:'/read',
        component:()=> import('../views/home'),
        children:[
            {
                path:'/read/hot',
                name:'hot',
                component:()=> import('../views/home/list/list.vue'),
                children:[
                    
                ]
            },
            {
                path:'/read/js',
                name:'js',
                component:()=> import('../views/home/list/list.vue'),
            },
            {
                'path':'/read/hot/:id',
                component:()=> import('../components/markDown/index'),
            },
            {
                'path':'/read/js/:id',
                component:()=> import('../components/markDown/index'),
            }
        ]
    },

]