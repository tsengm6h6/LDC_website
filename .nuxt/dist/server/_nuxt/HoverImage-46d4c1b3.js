import { _ as __nuxt_component_0 } from "./nuxt-link-6bdec6f5.js";
import { computed, mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { u as useAssets } from "./useAssets-cbb0f0b1.js";
const _sfc_main = {
  __name: "HoverImage",
  __ssrInlineRender: true,
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ""
    },
    path: {
      type: String,
      required: true
    },
    hoverBackgroundStyle: {
      type: String,
      default: "bg-main-bg-white/90"
    }
  },
  setup(__props) {
    const props = __props;
    const descriptionText = computed(() => {
      if (props.description.length > 20) {
        return `${props.description.slice(0, 30)}...`;
      }
      return props.description;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group relative h-full w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: { path: __props.path, query: { tab: "detail" } }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(useAssets)(__props.src))}${ssrRenderAttr("alt", __props.alt)} class="h-full w-full object-cover object-center"${_scopeId}><div class="${ssrRenderClass(`absolute bottom-0 left-0 top-0 hidden h-full w-full cursor-pointer flex-col items-center justify-center lg:flex ${__props.hoverBackgroundStyle} p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-95`)}"${_scopeId}><h4 class="text-center text-base font-semibold text-main-bg-dark"${_scopeId}>${ssrInterpolate(__props.title)}</h4>`);
            if (unref(descriptionText)) {
              _push2(`<p class="mt-4 text-center text-base"${_scopeId}>${ssrInterpolate(unref(descriptionText))}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="absolute bottom-0 right-0 z-10 rounded-bl-sm rounded-tl-xl bg-primary/80 p-4 text-center md:px-3 md:py-2 lg:hidden"${_scopeId}><p class="mb-0 text-main-bg-white"${_scopeId}>${ssrInterpolate(__props.title)}</p></div>`);
          } else {
            return [
              createVNode("img", {
                src: unref(useAssets)(__props.src),
                alt: __props.alt,
                class: "h-full w-full object-cover object-center"
              }, null, 8, ["src", "alt"]),
              createVNode("div", {
                class: `absolute bottom-0 left-0 top-0 hidden h-full w-full cursor-pointer flex-col items-center justify-center lg:flex ${__props.hoverBackgroundStyle} p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-95`
              }, [
                createVNode("h4", { class: "text-center text-base font-semibold text-main-bg-dark" }, toDisplayString(__props.title), 1),
                unref(descriptionText) ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "mt-4 text-center text-base"
                }, toDisplayString(unref(descriptionText)), 1)) : createCommentVNode("", true)
              ], 2),
              createVNode("div", { class: "absolute bottom-0 right-0 z-10 rounded-bl-sm rounded-tl-xl bg-primary/80 p-4 text-center md:px-3 md:py-2 lg:hidden" }, [
                createVNode("p", { class: "mb-0 text-main-bg-white" }, toDisplayString(__props.title), 1)
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HoverImage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;
export {
  __nuxt_component_2 as _
};
//# sourceMappingURL=HoverImage-46d4c1b3.js.map
