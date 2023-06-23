import _sfc_main$1 from './ContentSlot-45352735.mjs';
import { useSSRContext, computed, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import './utils-f8f3cd09.mjs';
import 'ufo';
import '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-fb-customer-chat';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
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
import './ssr-b54361f8.mjs';

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

export { InfoParagraph as default };
//# sourceMappingURL=InfoParagraph-90f5e3c4.mjs.map
