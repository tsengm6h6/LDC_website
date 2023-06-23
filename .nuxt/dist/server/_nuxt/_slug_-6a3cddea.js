import { H as Head, T as Title, M as Meta, _ as __nuxt_component_3 } from "./ListContainer-8225df20.js";
import { _ as __nuxt_component_4 } from "./AlbumCourse-b8750bc4.js";
import { withAsyncContext, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import "vue-router";
import "hookable";
import { u as useRoute, g as useSeoMeta } from "../server.mjs";
import { u as useAsyncData, q as queryContent } from "./query-d22ece3f.js";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
import "ufo";
import "defu";
import "./nuxt-link-6bdec6f5.js";
import "./BreadcrumbNav-09e4353c.js";
import "./navigation-d7436e97.js";
import "ohash";
import "./utils-f8f3cd09.js";
import "./ssr-b54361f8.js";
import "./preview-b7a8fe22.js";
import "cookie-es";
import "./subtract-front-2-018c2ccb.js";
import "./HoverImage-46d4c1b3.js";
import "./useAssets-cbb0f0b1.js";
import "./logo-gray-1174143e.js";
import "pathe/utils";
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
    const contentQuery = ([__temp, __restore] = withAsyncContext(() => queryContent(path).only(["title", "description", "img", "alt", "_path"]).find()), __temp = await __temp, __restore(), __temp);
    const getCourseList = () => {
      return contentQuery.filter((c) => c._path !== path).map((item) => ({
        title: (item == null ? void 0 : item.title) || "",
        description: (item == null ? void 0 : item.description) || "",
        src: (item == null ? void 0 : item.img) || "",
        alt: (item == null ? void 0 : item.alt) || "",
        path: (item == null ? void 0 : item._path) || ""
      })) || [];
    };
    const childItems = getCourseList();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      const _component_ListContainer = __nuxt_component_3;
      const _component_AlbumCourse = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b2, _c2, _d2;
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a4, _b3;
                if (_push3) {
                  _push3(`${ssrInterpolate(((_a4 = unref(page)) == null ? void 0 : _a4.title) || "")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(((_b3 = unref(page)) == null ? void 0 : _b3.title) || ""), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: ((_a3 = unref(page)) == null ? void 0 : _a3.description) || ((_b2 = unref(page)) == null ? void 0 : _b2.title) || ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => {
                  var _a4;
                  return [
                    createTextVNode(toDisplayString(((_a4 = unref(page)) == null ? void 0 : _a4.title) || ""), 1)
                  ];
                }),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: ((_c2 = unref(page)) == null ? void 0 : _c2.description) || ((_d2 = unref(page)) == null ? void 0 : _d2.title) || ""
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ListContainer, {
        title: ((_a2 = unref(page)) == null ? void 0 : _a2.title) || ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AlbumCourse, { data: unref(childItems) }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AlbumCourse, { data: unref(childItems) }, null, 8, ["data"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/diving/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-6a3cddea.js.map
