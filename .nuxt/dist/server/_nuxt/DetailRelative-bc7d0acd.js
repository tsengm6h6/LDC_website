import { _ as __nuxt_component_2 } from "./HoverImage-46d4c1b3.js";
import { withAsyncContext, mergeProps, unref, useSSRContext } from "vue";
import "hookable";
import { u as useAsyncData, q as queryContent } from "./query-8ce04585.js";
import { u as useRoute } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import "./nuxt-link-6bdec6f5.js";
import "ufo";
import "./useAssets-cbb0f0b1.js";
import "./logo-gray-1174143e.js";
import "./subtract-front-2-018c2ccb.js";
import "pathe/utils";
import "ohash";
import "./utils-f8f3cd09.js";
import "./ssr-b54361f8.js";
import "./preview-b7a8fe22.js";
import "cookie-es";
import "h3";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "vue-fb-customer-chat";
import "defu";
const _sfc_main = {
  __name: "DetailRelative",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { path } = useRoute();
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `content-${path}`,
      () => queryContent().where({ _path: path }).findOne()
    )), __temp = await __temp, __restore(), __temp);
    const relative = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "content-cat",
      () => queryContent().where({ category: { $contains: page.value.category } }).find()
    )), __temp = await __temp, __restore(), __temp);
    const relativeItems = relative.data.value.filter((c) => c._path !== path).map((item) => ({
      title: item.title || item.navigation.title,
      description: item.description || item.navigation.description,
      src: item.img,
      alt: item.alt || "relative-image",
      path: item._path
    })).slice(0, 3);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoverImage = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-4 md:mt-12" }, _attrs))}><h3 class="px-2 pb-2 text-center text-base font-normal md:px-4 md:pb-4 md:text-lg">相關活動</h3><div class="grid grid-cols-6 gap-6 border-t-2 border-solid border-t-main-bg-gray py-4 md:py-6"><!--[-->`);
      ssrRenderList(unref(relativeItems), (item, i) => {
        _push(`<div class="col-span-full overflow-hidden rounded-30 sm:col-span-3 md:col-span-2">`);
        _push(ssrRenderComponent(_component_HoverImage, item, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/DetailRelative.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=DetailRelative-bc7d0acd.js.map
