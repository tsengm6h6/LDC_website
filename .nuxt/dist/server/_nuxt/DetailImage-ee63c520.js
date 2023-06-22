import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { u as useAssets } from "./useAssets-cbb0f0b1.js";
import "./logo-gray-1174143e.js";
import "./subtract-front-2-018c2ccb.js";
import "pathe/utils";
const _sfc_main = {
  __name: "DetailImage",
  __ssrInlineRender: true,
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full w-full flex-auto overflow-hidden rounded-tl-60" }, _attrs))}><img${ssrRenderAttr("src", unref(useAssets)(__props.src))}${ssrRenderAttr("alt", __props.alt)} class="h-full w-full object-cover object-center"></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/DetailImage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=DetailImage-ee63c520.js.map
