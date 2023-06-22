import { _ as __nuxt_component_0 } from "./BreadcrumbNav-09e4353c.js";
import _sfc_main$1 from "./ContentDoc-0fd1b2df.js";
import { withAsyncContext, mergeProps, useSSRContext } from "vue";
import "hookable";
import { u as useRoute, g as useSeoMeta } from "../server.mjs";
import { u as useAsyncData, q as queryContent } from "./query-d22ece3f.js";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "./nuxt-link-6bdec6f5.js";
import "ufo";
import "./Icon-f8e9aef6.js";
import "./config-d8d8a503.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "defu";
import "./navigation-d7436e97.js";
import "ohash";
import "./utils-f8f3cd09.js";
import "./ssr-b54361f8.js";
import "./preview-b7a8fe22.js";
import "cookie-es";
import "./ContentRenderer-371ad78d.js";
import "./ContentRendererMarkdown-b18db033.js";
import "scule";
import "property-information";
import "./ContentQuery-98324861.js";
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g;
    let __temp, __restore;
    const { path } = useRoute();
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `content-${path}`,
      () => queryContent().where({ _path: path }).only(["title", "description", "img"]).findOne()
    )), __temp = await __temp, __restore(), __temp);
    useSeoMeta({
      title: ((_a = page.value) == null ? void 0 : _a.title) || "",
      ogTitle: ((_b = page.value) == null ? void 0 : _b.title) || "",
      description: ((_c = page.value) == null ? void 0 : _c.description) || ((_d = page.value) == null ? void 0 : _d.title),
      ogDescription: ((_e = page.value) == null ? void 0 : _e.description) || ((_f = page.value) == null ? void 0 : _f.title),
      ogImage: `_nuxt/assets/image/${(_g = page.value) == null ? void 0 : _g.img}` || "_nuxt/assets/image/about-1.jpg"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BreadcrumbNav = __nuxt_component_0;
      const _component_ContentDoc = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-8 md:px-6 md:py-12" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BreadcrumbNav, null, null, _parent));
      _push(ssrRenderComponent(_component_ContentDoc, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/diving/scubadiving/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-837c9bd2.js.map
