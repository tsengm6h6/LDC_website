import { defineComponent, computed, mergeProps, useSSRContext } from "vue";
import "hookable";
import "destr";
import "devalue";
import { u as useAppConfig } from "./config-d8d8a503.js";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "klona";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "unctx";
/* empty css                     */import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "IconCSS",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    var _a;
    const props = __props;
    const appConfig = useAppConfig();
    ((_a = appConfig == null ? void 0 : appConfig.nuxtIcon) == null ? void 0 : _a.aliases) || {};
    const iconName = computed(() => {
      var _a2;
      return (((_a2 = appConfig == null ? void 0 : appConfig.nuxtIcon) == null ? void 0 : _a2.aliases) || {})[props.name] || props.name;
    });
    const iconUrl = computed(() => `url('https://api.iconify.design/${iconName.value.replace(":", "/")}.svg')`);
    const sSize = computed(() => {
      var _a2, _b, _c;
      if (!props.size && typeof ((_a2 = appConfig.nuxtIcon) == null ? void 0 : _a2.size) === "boolean" && !((_b = appConfig.nuxtIcon) == null ? void 0 : _b.size)) {
        return void 0;
      }
      const size = props.size || ((_c = appConfig.nuxtIcon) == null ? void 0 : _c.size) || "1em";
      if (String(Number(size)) === size) {
        return `${size}px`;
      }
      return size;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--12f31591": iconUrl.value
      } };
      _push(`<span${ssrRenderAttrs(mergeProps({
        style: { width: sSize.value, height: sSize.value }
      }, _attrs, _cssVars))} data-v-6146c258></span>`);
    };
  }
});
const IconCSS_vue_vue_type_style_index_0_scoped_6146c258_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt-icon/dist/runtime/IconCSS.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const IconCSS = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6146c258"]]);
export {
  IconCSS as default
};
//# sourceMappingURL=IconCSS-c50bae40.js.map
