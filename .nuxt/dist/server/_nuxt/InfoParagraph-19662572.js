import _sfc_main$1 from "./ContentSlot-9037e378.js";
import { computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./utils-f8f3cd09.js";
import "ufo";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
/* empty css                     */import "devalue";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "destr";
import "defu";
import "./ssr-b54361f8.js";
import "klona";
const InfoParagraph_vue_vue_type_style_index_0_scoped_fab350aa_lang = "";
const _sfc_main = {
  __name: "InfoParagraph",
  __ssrInlineRender: true,
  props: {
    infoType: {
      type: String,
      required: false,
      default: "normal"
    },
    listType: {
      type: String,
      required: false,
      default: "normal"
    },
    title: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const listStyle = computed(() => {
      switch (props.listType) {
        case "checked":
          return "checked-list";
        case "unchecked":
          return "unchecked-list";
        case "number":
          return "number-list";
        case "normal":
          return "normal-list";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentSlot = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-4 text-base" }, _attrs))} data-v-fab350aa>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<h2 class="${ssrRenderClass([`${__props.infoType === "warn" ? "text-red-400" : ""}`, "mt-8 text-base"])}" data-v-fab350aa>${ssrInterpolate(__props.title)}</h2><div class="${ssrRenderClass(`${unref(listStyle)} mt-2 text-base`)}" data-v-fab350aa>`);
      _push(ssrRenderComponent(_component_ContentSlot, {
        use: _ctx.$slots.list,
        unwrap: "p"
      }, null, _parent));
      _push(`</div><p class="mt-6 text-base" data-v-fab350aa>`);
      _push(ssrRenderComponent(_component_ContentSlot, {
        use: _ctx.$slots.text,
        unwrap: "p"
      }, null, _parent));
      _push(`</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/InfoParagraph.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InfoParagraph = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fab350aa"]]);
export {
  InfoParagraph as default
};
//# sourceMappingURL=InfoParagraph-19662572.js.map
