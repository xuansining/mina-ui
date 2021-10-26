//解决TS不认识.vue
declare module '*.vue' {
    import { ComponentOptions } from "vue";
    const componentOptions: ComponentOptions
    export default componentOptions
}