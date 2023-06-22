import _sfc_main$1 from "./ContentSlot-9037e378.js";
import { ref, mergeProps, unref, useSSRContext } from "vue";
import "hookable";
import { u as useRoute, a as useRouter } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "./utils-f8f3cd09.js";
import "ufo";
import "./ssr-b54361f8.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "defu";
const _sfc_main = {
  __name: "DetailTab",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useRouter();
    const tab = ref("detail");
    const tabList = [
      { name: "行程細節", key: "detail" },
      { name: "費用包含", key: "include" },
      { name: "注意事項", key: "notice" },
      { name: "取消政策", key: "policy" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentSlot = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-12" }, _attrs))}><ul class="flex items-center justify-start border-b-2 border-solid border-b-main-bg-gray text-base md:text-lg"><!--[-->`);
      ssrRenderList(tabList, (t, i) => {
        _push(`<li class="${ssrRenderClass(`relative top-[0.125rem] cursor-pointer border-b-4 px-2 py-2 text-center transition-all duration-300 hover:text-[#8A6659] md:px-4 ${unref(tab) === t.key ? "border-b-highlight" : "border-b-transparent"}`)}">${ssrInterpolate(t.name)}</li>`);
      });
      _push(`<!--]--></ul><div class="py-12 md:px-4">`);
      if (unref(tab) === "detail") {
        _push(ssrRenderComponent(_component_ContentSlot, {
          use: _ctx.$slots.detail
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(tab) === "include") {
        _push(ssrRenderComponent(_component_ContentSlot, {
          use: _ctx.$slots.include
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(tab) === "notice") {
        _push(ssrRenderComponent(_component_ContentSlot, {
          use: _ctx.$slots.notice
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(tab) === "policy") {
        _push(ssrRenderComponent(_component_ContentSlot, {
          use: _ctx.$slots.policy
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/DetailTab.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=DetailTab-b1a36be6.js.map
