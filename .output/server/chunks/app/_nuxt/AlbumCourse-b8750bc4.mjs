import { _ as __nuxt_component_2 } from './HoverImage-46d4c1b3.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {
  __name: "AlbumCourse",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoverImage = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-6 h-[61vh] overflow-y-auto pr-2 pt-2" }, _attrs))} data-v-43f6fba3><div class="grid grid-cols-6 gap-2 md:gap-3" data-v-43f6fba3><!--[-->`);
      ssrRenderList(__props.data, (course, i) => {
        _push(`<div class="col-span-full h-[240px] min-w-[240px] overflow-hidden rounded-xl sm:col-span-3 lg:col-span-2" data-v-43f6fba3>`);
        _push(ssrRenderComponent(_component_HoverImage, mergeProps(course, { "hover-background-style": "bg-secondary" }), null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AlbumCourse.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-43f6fba3"]]);

export { __nuxt_component_4 as _ };
//# sourceMappingURL=AlbumCourse-b8750bc4.mjs.map
