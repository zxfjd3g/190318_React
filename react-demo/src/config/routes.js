/* 
自定义项目中所有路由的配置
*/
import {lazy} from 'react'

// import ContextTest from '@/pages/01_context' // 静态引入
// import FragmentTest from '@/pages/02_fragment'
// import OptimizeTest from '@/pages/03_optimize'
// import RenderPropsTest from '@/pages/04_renderProps'
// import LazyloadTest from '@/pages/05_lazyload'
// import HooksTest from '@/pages/06_hooks'
// import HooksDemoTest from '@/pages/07_hooksDemo'

const ContextTest = lazy(() => import('@/pages/01_context'))
const FragmentTest = lazy(() => import('@/pages/02_fragment'))
const OptimizeTest = lazy(() => import('@/pages/03_optimize'))
const RenderPropsTest = lazy(() => import('@/pages/04_renderProps'))
const LazyloadTest = lazy(() => import('@/pages/05_lazyload'))
const HooksTest = lazy(() => import('@/pages/06_hooks'))
const HooksDemoTest = lazy(() => import('@/pages/07_hooksDemo'))

export default [
  {
    path: '/context', 
    component: ContextTest, 
    name: 'Context', 
  },
  {
    path: '/fragement',
    component: FragmentTest, 
    name: 'Fragment', 
  },
  {
    path: '/optimize',
    component: OptimizeTest, 
    name: '组件优化', 
  },
  {
    path: '/renderprops',
    component: RenderPropsTest, 
    name: 'props渲染', 
  },
  {
    path: '/lazyload',
    component: LazyloadTest, 
    name: '路由懒加载', 
  },
  {
    path: '/hooks',
    component: HooksTest, 
    name: 'Hooks', 
  },
  {
    path: '/hooksdemo',
    component: HooksDemoTest, 
    name: 'Hooks应用', 
  },
]
