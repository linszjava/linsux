// 导入组件
const Layout = () => import('@/layout/index.vue')
const sysRole = () => import('@/views/system/sysRole.vue')
const sysUser = () => import('@/views/system/sysUser.vue')
const sysMenu = () => import('@/views/system/sysMenu.vue')

// 导出改组件

export default ([
    {
        path: '/system',
        component: Layout,
        name: 'system',
        // redirect: '/system/sysRole',
        meta: {
            title: '系统管理',
            icon: 'Location',
        },
        children: [
            {
                path: '/sysRole',
                component: sysRole,
                name: 'sysRole',
                meta: {
                    title: '角色管理',
                },
                hidden: false,
            },
            {
                path: '/sysUser',
                component: sysUser,
                name: 'sysUser',
                meta: {
                    title: '用户管理',
                },
                hidden: false,
            },
            {
                path: '/menu',
                component: sysMenu,
                name: 'sysMenu',
                meta: {
                    title: '菜单管理',
                },
                hidden: false,
            },
        ],
    }
])