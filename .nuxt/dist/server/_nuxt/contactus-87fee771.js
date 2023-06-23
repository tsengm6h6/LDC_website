import { _ as __nuxt_component_5 } from "./IndexContact-b2ef7dbd.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { b as _imports_0, c as _imports_2 } from "./subtract-front-2-018c2ccb.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./Icon-f3127f2b.js";
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
import "klona";
import "vue-fb-customer-chat";
import "defu";
import "./config-d8d8a503.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_IndexContact = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative md:flex md:h-[100vh] md:items-center" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_IndexContact, null, null, _parent));
  _push(`<img${ssrRenderAttr("src", _imports_0)} alt="overlay" class="absolute right-0 top-[60px] -z-10 hidden opacity-80 md:inline-block"><img${ssrRenderAttr("src", _imports_2)} alt="overlay" class="absolute bottom-0 left-0 -z-10 hidden opacity-80 md:inline-block"></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contactus.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contactus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  contactus as default
};
//# sourceMappingURL=contactus-87fee771.js.map
