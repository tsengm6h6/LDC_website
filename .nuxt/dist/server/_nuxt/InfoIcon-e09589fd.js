import __nuxt_component_1 from "./Icon-f8e9aef6.js";
import { computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
/* empty css                     */import "devalue";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "destr";
import "defu";
import "./config-d8d8a503.js";
import "klona";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  __name: "InfoIcon",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: "primary"
    },
    color: {
      type: String,
      required: false,
      default: "text-main-bg-white"
    }
  },
  setup(__props) {
    const props = __props;
    const iconStyle = computed(() => {
      switch (props.type) {
        case "primary":
          return "bg-[#34b1b1] text-white";
        case "normal":
          return "bg-[#D9D9D9] text-[#3F3E3E]";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-span-4 justify-self-start md:col-span-2" }, _attrs))}><div class="flex items-center justify-center"><div class="${ssrRenderClass(`flex h-[48px] w-[48px] min-w-[48px] items-center justify-center rounded-full ${unref(iconStyle)}`)}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: props.icon,
        size: "24",
        color: __props.color
      }, null, _parent));
      _push(`</div><div class="ml-4"><h5 class="text-base font-medium">${ssrInterpolate(props.title)}</h5><p class="text-base">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</p></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/InfoIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=InfoIcon-e09589fd.js.map
