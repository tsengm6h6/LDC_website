import _sfc_main$1 from "./ContentSlot-45352735.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./utils-f8f3cd09.js";
import "ufo";
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
import "destr";
import "klona";
import "vue-fb-customer-chat";
import "defu";
import "./ssr-b54361f8.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ContentSlot = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_ContentSlot, {
    use: _ctx.$slots.info
  }, null, _parent));
  _push(ssrRenderComponent(_component_ContentSlot, {
    use: _ctx.$slots.tab
  }, null, _parent));
  _push(ssrRenderComponent(_component_ContentSlot, {
    use: _ctx.$slots.relative
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/DetailContainer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DetailContainer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  DetailContainer as default
};
//# sourceMappingURL=DetailContainer-15f24b2c.js.map
