import { _ as __nuxt_component_0$1 } from "./nuxt-link-6bdec6f5.js";
import __nuxt_component_1$1 from "./Icon-f8e9aef6.js";
import { ref, computed, onUnmounted, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext, mergeProps, resolveComponent } from "vue";
import "hookable";
import { u as useAsyncData } from "./query-d22ece3f.js";
import "destr";
import "devalue";
import "klona";
import { f as fetchContentNavigation } from "./navigation-d7436e97.js";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { b as _imports_0, c as _imports_1 } from "./logo-gray-1174143e.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "ufo";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "defu";
import "./config-d8d8a503.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "ohash";
import "./utils-f8f3cd09.js";
import "./ssr-b54361f8.js";
import "./preview-b7a8fe22.js";
import "cookie-es";
const AppHeader_vue_vue_type_style_index_0_scoped_986ef2af_lang = "";
const _sfc_main$3 = {
  __name: "AppHeader",
  __ssrInlineRender: true,
  props: {
    isMenuToggled: {
      type: Boolean,
      required: true
    }
  },
  emits: ["scroll-to", "toggle-menu"],
  setup(__props, { emit }) {
    const isTopOfPage = ref(true);
    const navBackGround = computed(() => {
      return isTopOfPage.value ? "bg-transparent text-main-dark" : "bg-main-bg-gray";
    });
    const handleScroll = () => {
      if (window.scrollY === 0) {
        isTopOfPage.value = true;
      } else {
        isTopOfPage.value = false;
      }
    };
    const { data: nav } = useAsyncData("navigation", () => fetchContentNavigation());
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-986ef2af><div class="${ssrRenderClass(`fixed right-0 top-0 flex w-full ${unref(navBackGround)} z-30 shadow-sm md:hidden`)}" data-v-986ef2af><div class="container mx-auto flex items-center justify-between px-4 md:w-full" data-v-986ef2af>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center py-4 font-bold md:py-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="logo" class="w-14 object-contain object-center md:w-20" data-v-986ef2af${_scopeId}><span class="text-xl font-bold text-main-dark" data-v-986ef2af${_scopeId}>龍洞岬</span>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "logo",
                class: "w-14 object-contain object-center md:w-20"
              }),
              createVNode("span", { class: "text-xl font-bold text-main-dark" }, "龍洞岬")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="flex h-10 w-10 items-center justify-center rounded-full bg-secondary p-2 text-white shadow md:hidden" data-v-986ef2af>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ci:hamburger-md",
        size: "24",
        color: "text-main-bg-white"
      }, null, _parent));
      _push(`</button></div></div><header class="${ssrRenderClass(`fixed right-0 top-0 ${__props.isMenuToggled ? "z-50 w-[60%] opacity-100" : "z-0 w-0 opacity-0 md:z-50 md:opacity-100"} md:w-full md:shadow-sm md:${unref(navBackGround)} origin-right transition-all duration-300`)}" data-v-986ef2af><nav class="${ssrRenderClass(`relative bg-main-bg-white shadow-sm transition-all delay-100 duration-200 ${__props.isMenuToggled ? "" : ""}`)}" data-v-986ef2af><div class="container mx-auto flex items-center px-4 md:w-full" data-v-986ef2af>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "ml-auto flex items-center py-4 font-bold md:ml-0 md:py-0",
        onClick: ($event) => emit("toggle-menu", false)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="logo" class="w-14 object-contain object-center md:w-20" data-v-986ef2af${_scopeId}><span class="text-2xl font-bold text-main-dark md:inline" data-v-986ef2af${_scopeId}>龍洞岬</span>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "logo",
                class: "w-14 object-contain object-center md:w-20"
              }),
              createVNode("span", { class: "text-2xl font-bold text-main-dark md:inline" }, "龍洞岬")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="absolute left-0 right-0 top-full ml-auto h-screen bg-main-bg-white px-2 py-4 shadow-lg md:relative md:flex md:h-auto md:space-x-1 md:py-0 md:shadow-none lg:space-x-2" data-v-986ef2af><!--[-->`);
      ssrRenderList(unref(nav), (n, i) => {
        _push(`<li class="parent relative" data-v-986ef2af>`);
        if (!n.children) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: n._path,
            class: "flex items-center justify-between space-x-1 p-2 hover:bg-main-bg-gray md:inline-flex md:h-[90px] lg:space-x-2 lg:p-4"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(n.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(n.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<span${ssrRenderAttr("to", n._path)} class="hidden cursor-pointer items-center justify-between space-x-1 p-2 hover:bg-main-bg-gray md:inline-flex md:h-[90px] lg:space-x-2 lg:p-4" data-v-986ef2af><span data-v-986ef2af>${ssrInterpolate(n.title)}</span>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ic:baseline-keyboard-arrow-down",
            size: "16",
            color: "text-main-dark"
          }, null, _parent));
          _push(`</span>`);
        }
        if (n.children) {
          _push(`<ul class="child right-0 top-full bg-main-bg-white transition duration-300 md:absolute md:w-40 md:rounded-b md:shadow-lg" data-v-986ef2af><!--[-->`);
          ssrRenderList(n.children.filter((o) => o.title !== n.title), (c, j) => {
            _push(`<li data-v-986ef2af>`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: c._path,
              class: "flex h-[50px] items-center justify-center px-4 py-3 hover:bg-main-bg-gray",
              onClick: ($event) => emit("toggle-menu", false)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(c.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(c.title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--><li data-v-986ef2af><span class="flex items-center justify-center p-2 md:inline-flex md:h-[90px]" data-v-986ef2af><button class="btn btn-secondary rounded-none rounded-br-20 rounded-tl-20 md:block" data-v-986ef2af> 關於我們 </button></span></li></ul><div class="ml-auto cursor-pointer font-bold text-secondary transition-colors duration-300 hover:text-secondary-dark md:hidden" data-v-986ef2af>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "maki:cross",
        size: "20"
      }, null, _parent));
      _push(`</div></div></nav></header></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-986ef2af"]]);
const _sfc_main$2 = {
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { data: nav } = useAsyncData("navigation", () => fetchContentNavigation());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_1$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-main-bg-dark leading-relaxed tracking-widest text-main-bg-white" }, _attrs))}><div class="container mx-auto px-6 py-12"><div class="flex flex-col items-start sm:flex-row sm:justify-between"><div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center font-bold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="logo" class="w-16 object-contain object-center"${_scopeId}><span class="text-lg font-bold"${_scopeId}>龍洞岬</span>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "logo",
                class: "w-16 object-contain object-center"
              }),
              createVNode("span", { class: "text-lg font-bold" }, "龍洞岬")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="ml-4 mt-1 flex items-center gap-2"><a href="https://line.me/R/ti/p/%40843eetrw" target="_blank" rel="noopener noreferrer" class="w-[24px]"><img class="relative top-[2px] text-main-bg-white"${ssrRenderAttr("src", _imports_1)} alt="line-icon" width="20" height="20"></a><a href="https://www.instagram.com/longdongjia1_7/?hl=en" target="_blank" rel="noopener noreferrer">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ri:instagram-line",
        size: "24",
        color: "#FDFDFD"
      }, null, _parent));
      _push(`</a><a href="https://www.facebook.com/dragon49/?ref=page_internal" target="_blank" rel="noopener noreferrer">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:facebook-box",
        size: "24",
        color: "#FDFDFD"
      }, null, _parent));
      _push(`</a></div><div class="mt-4 text-main-gray"><p class="my-1 ml-4 text-sm">新北市貢寮區龍洞街1-5號</p><p class="my-1 ml-4 text-sm">0939-098-057</p><p class="my-1 ml-4 text-sm">longdongcape@gmail.com</p></div></div><div class="ml-5 mt-8 hidden flex-col text-base sm:mt-0 sm:flex sm:w-2/3 sm:flex-row sm:items-start sm:justify-around"><!--[-->`);
      ssrRenderList(unref(nav), (n, i) => {
        _push(`<div class="">`);
        if (!n.children) {
          _push(`<h5 class="mb-2 font-bold">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: n._path
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(n.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(n.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</h5>`);
        } else {
          _push(`<!--[--><h5 class="mb-2 font-bold">${ssrInterpolate(n.title)}</h5>`);
          if (n.children) {
            _push(`<ul class="text-main-gray sm:block"><!--[-->`);
            ssrRenderList(n.children.filter((o) => o.title !== n.title), (c, j) => {
              _push(`<li class="transition-colors duration-300 hover:text-main-bg-white">`);
              _push(ssrRenderComponent(_component_NuxtLink, {
                to: c._path
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(c.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(c.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`</li>`);
            });
            _push(`<!--]--></ul>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><div class="mt-8 w-full"><hr><p class="mt-4 text-center text-xs font-extralight text-main-gray"> Copyright © 2023 Longdongcape. All rights reserved. </p></div></div></footer>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_VueFbCustomerChat = resolveComponent("VueFbCustomerChat");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_VueFbCustomerChat, {
    page_id: "342245025811970",
    theme_color: "#34b1b1",
    locale: "zh_TW",
    logged_out_greeting: "嗨~有問題可以私訊我喔！",
    logged_in_greeting: "您好，很高興為您服務"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FbCustomerChat.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuToggled = ref(false);
    const toggleMenu = (value) => {
      isMenuToggled.value = value;
    };
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset - 95;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = __nuxt_component_0;
      const _component_AppFooter = __nuxt_component_1;
      const _component_FbCustomerChat = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: `w-full ${unref(isMenuToggled) ? "overflow-hidden" : "overflow-auto"}`
      }, _attrs))}><div class="${ssrRenderClass(`${unref(isMenuToggled) ? "block" : "hidden"} fixed z-40 h-screen w-full bg-black/20 backdrop-blur-sm md:z-0 md:hidden`)}"></div>`);
      _push(ssrRenderComponent(_component_AppHeader, {
        "is-menu-toggled": unref(isMenuToggled),
        onToggleMenu: toggleMenu,
        onScrollTo: scrollTo
      }, null, _parent));
      _push(`<main class="relative min-h-screen"><div class="pt-[95px]">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(ssrRenderComponent(_component_FbCustomerChat, {
        page_id: "342245025811970",
        theme_color: "#34b1b1",
        locale: "zh_TW",
        logged_out_greeting: "嗨~有問題可以私訊我喔！",
        logged_in_greeting: "您好，很高興為您服務"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-49e2aad4.js.map
