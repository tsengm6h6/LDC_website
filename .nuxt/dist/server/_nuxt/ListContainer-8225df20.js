import { defineComponent, ref, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { f as useHead, u as useRoute } from "../server.mjs";
import __nuxt_component_1$1 from "./Icon-f8e9aef6.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-6bdec6f5.js";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderSlot, ssrRenderAttr } from "vue/server-renderer";
import { _ as __nuxt_component_0$2 } from "./BreadcrumbNav-09e4353c.js";
import "hookable";
import { u as useAsyncData } from "./query-d22ece3f.js";
import "destr";
import "devalue";
import "klona";
import { f as fetchContentNavigation } from "./navigation-d7436e97.js";
import { b as _imports_0, c as _imports_2 } from "./subtract-front-2-018c2ccb.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: [String, Object, Array],
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Title = /* @__PURE__ */ defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    const title = ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null;
    return {
      title
    };
  })
});
const Meta = /* @__PURE__ */ defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props) => {
    const meta = { ...props };
    if (meta.httpEquiv) {
      meta["http-equiv"] = meta.httpEquiv;
      delete meta.httpEquiv;
    }
    return {
      meta: [meta]
    };
  })
});
const Head = /* @__PURE__ */ defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
const _sfc_main$2 = {
  __name: "SubMenuButton",
  __ssrInlineRender: true,
  props: {
    subMenu: {
      type: Array,
      default: () => []
    },
    path: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const showMenu = ref(false);
    const currMenu = computed(() => {
      var _a, _b;
      return ((_b = (_a = props.subMenu) == null ? void 0 : _a.find((el) => el._path === props.path)) == null ? void 0 : _b.title) || "選擇頁面";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "relative cursor-pointer rounded-tl-[15px] bg-primary py-2 pl-8 pr-6 text-main-bg-white md:hidden" }, _attrs))}>${ssrInterpolate(unref(currMenu))} `);
      if (unref(showMenu)) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "ic:outline-keyboard-arrow-up",
          size: "16",
          color: "text-main-bg-white"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: "ic:outline-keyboard-arrow-down",
          size: "16",
          color: "text-main-bg-white"
        }, null, _parent));
      }
      if (unref(showMenu)) {
        _push(`<ul class="absolute left-0 top-[100%] z-10 w-full bg-main-bg-white py-2 text-main-dark shadow-sm"><!--[-->`);
        ssrRenderList(__props.subMenu, (sub, i) => {
          _push(`<li class="">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: sub._path,
            class: "inline-block w-full px-4 py-2 transition-colors duration-300 hover:bg-main-gray"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(sub.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(sub.title), 1)
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
      _push(`</button>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SubMenuButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "SubMenuSide",
  __ssrInlineRender: true,
  props: {
    subMenu: {
      type: Array,
      default: () => []
    },
    path: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hidden pl-12 pr-8 pt-16 md:block" }, _attrs))}><ul><!--[-->`);
      ssrRenderList(__props.subMenu, (sub, i) => {
        _push(`<li class="${ssrRenderClass([{ "text-primary": sub._path === __props.path }, "px-4 py-2 transition-colors duration-300 hover:text-primary"])}">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: sub._path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(sub.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(sub.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SubMenuSide.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const ListContainer_vue_vue_type_style_index_0_scoped_cb6e84fd_lang = "";
const _sfc_main = {
  __name: "ListContainer",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    var _a;
    const { path } = useRoute();
    const { data: nav } = useAsyncData("navigation", () => fetchContentNavigation());
    const subMenu = (_a = nav.value) == null ? void 0 : _a.reduce((prev, curr) => {
      if (!curr.children) {
        return [...prev, { title: curr.title, _path: curr._path }];
      }
      const child = curr.children.filter((o) => o.title !== curr.title).map((o) => ({ title: o.title, _path: o._path }));
      return [...prev, ...child];
    }, []);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SubMenuButton = __nuxt_component_0;
      const _component_SubMenuSide = __nuxt_component_1;
      const _component_BreadcrumbNav = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-cb6e84fd><div class="container relative mx-auto py-8 md:px-6 md:py-12" data-v-cb6e84fd>`);
      _push(ssrRenderComponent(_component_SubMenuButton, {
        "sub-menu": unref(subMenu),
        path: unref(path)
      }, null, _parent));
      _push(`<div class="relative min-h-[80vh] max-w-full rounded-br-30 border-b-[24px] border-b-secondary bg-main-bg-gray md:rounded-tl-30" data-v-cb6e84fd><span class="absolute left-0 top-0 z-10 hidden h-[5%] w-[180px] rounded-tl-30 bg-primary md:inline-block" data-v-cb6e84fd></span><div class="flex" data-v-cb6e84fd>`);
      _push(ssrRenderComponent(_component_SubMenuSide, {
        "sub-menu": unref(subMenu),
        path: unref(path)
      }, null, _parent));
      _push(`<div class="flex-1 px-2 py-8 md:px-4 md:py-10 md:pb-16" data-v-cb6e84fd>`);
      _push(ssrRenderComponent(_component_BreadcrumbNav, null, null, _parent));
      _push(`<h1 class="mt-10 text-2xl" data-v-cb6e84fd><span class="relative" data-v-cb6e84fd><span class="absolute -bottom-1 left-0 h-12 w-12 rounded-tr-30 bg-highlight" data-v-cb6e84fd></span><span class="animate__animated animate__fadeIn relative pl-4" data-v-cb6e84fd>${ssrInterpolate(__props.title)}</span></span></h1>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div></div><img${ssrRenderAttr("src", _imports_0)} alt="overlay" class="absolute right-0 top-[100px] hidden opacity-80 lg:inline-block" data-v-cb6e84fd><img${ssrRenderAttr("src", _imports_2)} alt="overlay" class="absolute bottom-[72px] left-0 hidden opacity-80 lg:inline-block" data-v-cb6e84fd></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ListContainer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cb6e84fd"]]);
export {
  Head as H,
  Meta as M,
  Title as T,
  __nuxt_component_3 as _
};
//# sourceMappingURL=ListContainer-8225df20.js.map
