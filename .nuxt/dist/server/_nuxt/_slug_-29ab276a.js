import { H as Head, T as Title, M as Meta, _ as __nuxt_component_3 } from "./ListContainer-c9c306d7.js";
import { mergeProps, unref, useSSRContext, withAsyncContext, withCtx, createTextVNode, toDisplayString, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { u as useAssets } from "./useAssets-cbb0f0b1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "vue-router";
import "hookable";
import { u as useRoute, g as useSeoMeta } from "../server.mjs";
import { u as useAsyncData, q as queryContent } from "./query-8ce04585.js";
import "destr";
import "devalue";
import "klona";
import "./Icon-f3127f2b.js";
import "./config-d8d8a503.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "ufo";
import "vue-fb-customer-chat";
import "defu";
import "./nuxt-link-6bdec6f5.js";
import "./BreadcrumbNav-962c1580.js";
import "./navigation-14a2574d.js";
import "ohash";
import "./utils-f8f3cd09.js";
import "./ssr-b54361f8.js";
import "./preview-b7a8fe22.js";
import "cookie-es";
import "./subtract-front-2-018c2ccb.js";
import "./logo-gray-1174143e.js";
import "pathe/utils";
const AlbumEquipment_vue_vue_type_style_index_0_scoped_28b8e6ba_lang = "";
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
        title: "一般蛙鏡（含呼吸管）",
        price: "NT$ 80"
      },
      {
        src: "mask.png",
        alt: "mask-degree",
        title: "有度數蛙鏡（含呼吸管）",
        price: "NT$ 100"
      },
      {
        src: "snorkel.png",
        alt: "snorkel",
        title: "呼吸管",
        price: "NT$ 40"
      },
      {
        src: "swim-goggles.png",
        alt: "swim-goggles",
        title: "泳鏡",
        price: "NT$ 60"
      },
      {
        src: "life-jacket.png",
        alt: "life-jacket",
        title: "救生衣",
        price: "NT$ 60"
      },
      {
        src: "kick-board.png",
        alt: "kick-board",
        title: "浮板",
        price: "NT$ 60"
      },
      {
        src: "buoy.png",
        alt: "buoy",
        title: "浮標",
        price: "NT$ 60"
      },
      {
        src: "life-buoy.png",
        alt: "life-buoy",
        title: "救生圈",
        price: "NT$ 60"
      },
      {
        src: "water-shoes.png",
        alt: "water-shoes",
        title: "防滑鞋",
        price: "NT$ 60"
      },
      {
        src: "parasol.png",
        alt: "parasol",
        title: "陽傘",
        price: "NT$ 300"
      },
      {
        src: "open-heeled-fins.png",
        alt: "open-heeled-fins",
        title: "套鞋式蛙鞋",
        price: "NT$ 100"
      },
      {
        src: "closed-heel-fins.png",
        alt: "closed-heel-fins",
        title: "套腳式蛙鞋",
        price: "NT$ 100"
      },
      {
        src: "diving-suit.png",
        alt: "diving-suit",
        title: "連身防寒衣",
        price: "NT$ 160"
      },
      {
        src: "wetsuit-top.png",
        alt: "wetsuit-top",
        title: "防寒衣",
        price: "NT$ 130"
      },
      {
        src: "wetsuit-bottom.png",
        alt: "wetsuit-bottom",
        title: "防寒褲",
        price: "NT$ 120"
      },
      {
        src: "rashguard-top.png",
        alt: "rashguard-top",
        title: "水母衣",
        price: "NT$ 100"
      },
      {
        src: "rashguard-bottom.png",
        alt: "rashguard-bottom",
        title: "水母褲",
        price: "NT$ 100"
      },
      {
        src: "rashguard.png",
        alt: "rashguard",
        title: "水母上衣 + 水母褲",
        price: "NT$ 160"
      },
      {
        src: "rashguard-and-wetsuit.png",
        alt: "rashguard-and-wetsuit",
        title: "水母上衣 + 防寒褲",
        price: "NT$ 200"
      }
    ];
    const freeDivingItems = [
      {
        src: "snorkel.png",
        alt: "snorkel",
        title: "呼吸管",
        price: "NT$ 40"
      },
      {
        src: "mask.png",
        alt: "mask",
        title: "自潛蛙鏡（含呼吸管）",
        price: "NT$ 100"
      },
      {
        src: "fins.png",
        alt: "fins",
        title: "中蛙鞋",
        price: "NT$ 160"
      },
      {
        src: "long-fins.png",
        alt: "long-fins",
        title: "長蛙鞋",
        price: "NT$ 200"
      },
      {
        src: "lanyard.png",
        alt: "lanyard",
        title: "安全繫鎖",
        price: "NT$ 100"
      },
      {
        src: "buoy.png",
        alt: "buoy",
        title: "浮球一組",
        price: "NT$ 300"
      },
      {
        src: "lope.png",
        alt: "lope",
        title: "繩子",
        price: "NT$ 80"
      },
      {
        src: "bottom-weight.png",
        alt: "bottom-weight",
        title: "底鉛",
        price: "NT$ 80"
      },
      {
        src: "weight.png",
        alt: "weight",
        title: "鉛塊（1 kg）",
        price: "NT$ 20"
      },
      {
        src: "weight-belt.png",
        alt: "weight-belt",
        title: "鉛帶",
        price: "NT$ 60"
      },
      {
        src: "diving-suit.png",
        alt: "diving-suit",
        title: "自潛防寒衣",
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
        title: "調節器",
        price: "NT$ 300"
      },
      {
        src: "diving-suit.png",
        alt: "diving-suit",
        title: "防寒衣",
        price: "NT$ 160"
      },
      {
        src: "open-heeled-fins.png",
        alt: "open-heeled-fins",
        title: "套鞋式蛙鞋",
        price: "NT$ 100"
      },
      {
        src: "closed-heel-fins.png",
        alt: "closed-heel-fins",
        title: "套腳式蛙鞋",
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
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-29ab276a.js.map
