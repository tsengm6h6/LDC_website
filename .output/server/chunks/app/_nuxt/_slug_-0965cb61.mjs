import { H as Head, T as Title, M as Meta, _ as __nuxt_component_3 } from './ListContainer-8225df20.mjs';
import { withAsyncContext, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { u as useAssets } from './useAssets-cbb0f0b1.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { u as useRoute, g as useSeoMeta } from '../server.mjs';
import { u as useAsyncData, q as queryContent } from './query-d22ece3f.mjs';
import './Icon-f8e9aef6.mjs';
import './config-d8d8a503.mjs';
import 'klona';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'slugify';
import 'unist-util-position';
import 'unist-util-visit';
import 'shiki-es';
import 'unenv/runtime/npm/consola';
import './nuxt-link-6bdec6f5.mjs';
import './BreadcrumbNav-09e4353c.mjs';
import './navigation-d7436e97.mjs';
import './utils-f8f3cd09.mjs';
import './ssr-b54361f8.mjs';
import './preview-b7a8fe22.mjs';
import 'cookie-es';
import './subtract-front-2-018c2ccb.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import './logo-gray-1174143e.mjs';
import 'pathe/utils';

const _sfc_main$1 = {
  __name: "AlbumEquipment",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid-album mt-6 h-[60vh] gap-4 overflow-y-auto pb-4 pr-2 md:grid md:pr-4 md:pt-4" }, _attrs))} data-v-28b8e6ba><!--[-->`);
      ssrRenderList(__props.data, (item, i) => {
        _push(`<div class="mb-3 mr-2 flex items-center overflow-hidden rounded-lg bg-[#F6F6F6] p-2 drop-shadow-[3px_3px_2px_rgba(0,0,0,0.25)] last:mb-0 md:mb-0 md:p-4" data-v-28b8e6ba><img${ssrRenderAttr("src", unref(useAssets)(item.src))}${ssrRenderAttr("alt", item.alt)} class="h-16 w-16 rounded bg-white object-contain object-center drop-shadow-[2px_2px_1px_rgba(0,0,0,0.25)] md:h-20 md:w-20" data-v-28b8e6ba><div class="ml-4 flex-1" data-v-28b8e6ba><p class="text-base font-bold md:text-lg" data-v-28b8e6ba>${ssrInterpolate(item.title)}</p><p class="mt-1 text-base md:mt-2 md:text-lg" data-v-28b8e6ba>${ssrInterpolate(item.price)}</p></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AlbumEquipment.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-28b8e6ba"]]);
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    let __temp, __restore;
    const { path } = useRoute();
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `content-${path}`,
      () => queryContent().where({ _path: path }).findOne()
    )), __temp = await __temp, __restore(), __temp);
    useSeoMeta({
      title: ((_a = page.value) == null ? void 0 : _a.title) || "",
      ogTitle: ((_b = page.value) == null ? void 0 : _b.title) || "",
      description: ((_c = page.value) == null ? void 0 : _c.description) || ((_d = page.value) == null ? void 0 : _d.title),
      ogDescription: ((_e = page.value) == null ? void 0 : _e.description) || ((_f = page.value) == null ? void 0 : _f.title),
      ogImage: useAssets((_g = page.value) == null ? void 0 : _g.img) || useAssets("about-1.jpg")
    });
    const snorkelingItems = [
      {
        src: "mask.png",
        alt: "mask",
        title: "\u4E00\u822C\u86D9\u93E1\uFF08\u542B\u547C\u5438\u7BA1\uFF09",
        price: "NT$ 80"
      },
      {
        src: "mask.png",
        alt: "mask-degree",
        title: "\u6709\u5EA6\u6578\u86D9\u93E1\uFF08\u542B\u547C\u5438\u7BA1\uFF09",
        price: "NT$ 100"
      },
      {
        src: "snorkel.png",
        alt: "snorkel",
        title: "\u547C\u5438\u7BA1",
        price: "NT$ 40"
      },
      {
        src: "swim-goggles.png",
        alt: "swim-goggles",
        title: "\u6CF3\u93E1",
        price: "NT$ 60"
      },
      {
        src: "life-jacket.png",
        alt: "life-jacket",
        title: "\u6551\u751F\u8863",
        price: "NT$ 60"
      },
      {
        src: "kick-board.png",
        alt: "kick-board",
        title: "\u6D6E\u677F",
        price: "NT$ 60"
      },
      {
        src: "buoy.png",
        alt: "buoy",
        title: "\u6D6E\u6A19",
        price: "NT$ 60"
      },
      {
        src: "life-buoy.png",
        alt: "life-buoy",
        title: "\u6551\u751F\u5708",
        price: "NT$ 60"
      },
      {
        src: "water-shoes.png",
        alt: "water-shoes",
        title: "\u9632\u6ED1\u978B",
        price: "NT$ 60"
      },
      {
        src: "parasol.png",
        alt: "parasol",
        title: "\u967D\u5098",
        price: "NT$ 300"
      },
      {
        src: "open-heeled-fins.png",
        alt: "open-heeled-fins",
        title: "\u5957\u978B\u5F0F\u86D9\u978B",
        price: "NT$ 100"
      },
      {
        src: "closed-heel-fins.png",
        alt: "closed-heel-fins",
        title: "\u5957\u8173\u5F0F\u86D9\u978B",
        price: "NT$ 100"
      },
      {
        src: "diving-suit.png",
        alt: "diving-suit",
        title: "\u9023\u8EAB\u9632\u5BD2\u8863",
        price: "NT$ 160"
      },
      {
        src: "wetsuit-top.png",
        alt: "wetsuit-top",
        title: "\u9632\u5BD2\u8863",
        price: "NT$ 130"
      },
      {
        src: "wetsuit-bottom.png",
        alt: "wetsuit-bottom",
        title: "\u9632\u5BD2\u8932",
        price: "NT$ 120"
      },
      {
        src: "rashguard-top.png",
        alt: "rashguard-top",
        title: "\u6C34\u6BCD\u8863",
        price: "NT$ 100"
      },
      {
        src: "rashguard-bottom.png",
        alt: "rashguard-bottom",
        title: "\u6C34\u6BCD\u8932",
        price: "NT$ 100"
      },
      {
        src: "rashguard.png",
        alt: "rashguard",
        title: "\u6C34\u6BCD\u4E0A\u8863 + \u6C34\u6BCD\u8932",
        price: "NT$ 160"
      },
      {
        src: "rashguard-and-wetsuit.png",
        alt: "rashguard-and-wetsuit",
        title: "\u6C34\u6BCD\u4E0A\u8863 + \u9632\u5BD2\u8932",
        price: "NT$ 200"
      }
    ];
    const freeDivingItems = [
      {
        src: "snorkel.png",
        alt: "snorkel",
        title: "\u547C\u5438\u7BA1",
        price: "NT$ 40"
      },
      {
        src: "mask.png",
        alt: "mask",
        title: "\u81EA\u6F5B\u86D9\u93E1\uFF08\u542B\u547C\u5438\u7BA1\uFF09",
        price: "NT$ 100"
      },
      {
        src: "fins.png",
        alt: "fins",
        title: "\u4E2D\u86D9\u978B",
        price: "NT$ 160"
      },
      {
        src: "long-fins.png",
        alt: "long-fins",
        title: "\u9577\u86D9\u978B",
        price: "NT$ 200"
      },
      {
        src: "lanyard.png",
        alt: "lanyard",
        title: "\u5B89\u5168\u7E6B\u9396",
        price: "NT$ 100"
      },
      {
        src: "buoy.png",
        alt: "buoy",
        title: "\u6D6E\u7403\u4E00\u7D44",
        price: "NT$ 300"
      },
      {
        src: "lope.png",
        alt: "lope",
        title: "\u7E69\u5B50",
        price: "NT$ 80"
      },
      {
        src: "bottom-weight.png",
        alt: "bottom-weight",
        title: "\u5E95\u925B",
        price: "NT$ 80"
      },
      {
        src: "weight.png",
        alt: "weight",
        title: "\u925B\u584A\uFF081 kg\uFF09",
        price: "NT$ 20"
      },
      {
        src: "weight-belt.png",
        alt: "weight-belt",
        title: "\u925B\u5E36",
        price: "NT$ 60"
      },
      {
        src: "diving-suit.png",
        alt: "diving-suit",
        title: "\u81EA\u6F5B\u9632\u5BD2\u8863",
        price: "NT$ 300"
      }
    ];
    const scubaDivingItems = [
      {
        src: "bcd.jpg",
        alt: "bcd",
        title: "BCD",
        price: "NT$ 300"
      },
      {
        src: "regulator.jpg",
        alt: "regulator",
        title: "\u8ABF\u7BC0\u5668",
        price: "NT$ 300"
      },
      {
        src: "diving-suit.png",
        alt: "diving-suit",
        title: "\u9632\u5BD2\u8863",
        price: "NT$ 160"
      },
      {
        src: "open-heeled-fins.png",
        alt: "open-heeled-fins",
        title: "\u5957\u978B\u5F0F\u86D9\u978B",
        price: "NT$ 100"
      },
      {
        src: "closed-heel-fins.png",
        alt: "closed-heel-fins",
        title: "\u5957\u8173\u5F0F\u86D9\u978B",
        price: "NT$ 100"
      }
    ];
    const getCurrentList = (pagePath) => {
      switch (pagePath) {
        case "/equipment/renting-freediving":
          return freeDivingItems;
        case "/equipment/renting-scubadiving":
          return scubaDivingItems;
        default:
          return snorkelingItems;
      }
    };
    let currentList = [];
    if ((_h = page.value) == null ? void 0 : _h._path) {
      currentList = getCurrentList(page.value._path);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      const _component_ListContainer = __nuxt_component_3;
      const _component_AlbumEquipment = __nuxt_component_4;
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
            _push2(ssrRenderComponent(_component_AlbumEquipment, { data: unref(currentList) }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AlbumEquipment, { data: unref(currentList) }, null, 8, ["data"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/equipment/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-0965cb61.mjs.map
