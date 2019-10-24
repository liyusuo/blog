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
                component:()=> import('../views/home/list/list.vue'),
            },
            {
                path:'/read/js',
                component:()=> import('../views/home/list/list.vue'),
            },
        ]
    },

]