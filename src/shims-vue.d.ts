// declare module "*.vue" {
//     import { defineComponent,FunctionalComponent } from "vue";
//     const component:ReturnType<typeof defineComponent> | FunctionalComponent
//     export default component
// }
declare module "*.vue" {
    import type { DefineComponent,FunctionalComponent } from "vue";
    const component: DefineComponent<{}, {}, any> | FunctionalComponent;
    export default component;
    // import Vue from "vue";
    // export default Vue;
  }
  