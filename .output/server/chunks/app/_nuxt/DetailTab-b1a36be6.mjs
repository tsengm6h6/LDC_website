import _sfc_main$1 from './ContentSlot-9037e378.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { u as useRoute, a as useRouter } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import './utils-f8f3cd09.mjs';
import 'ufo';
import './ssr-b54361f8.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
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

const _sfc_main = {
  __name: "DetailTab",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useRouter();
    const tab = ref("detail");
    const tabList = [
      { name: "\u884C\u7A0B\u7D30\u7BC0", key: "detail" },
      { name: "\u8CBB\u7528\u5305\u542B", key: "include" },
      { name: "\u6CE8\u610F\u4E8B\u9805", key: "notice" },
      { name: "\u53D6\u6D88\u653F\u7B56", key: "policy" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentSlot = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-12" }, _attrs))}><ul class="flex items-center justify-start border-b-2 border-solid border-b-main-bg-gray text-base md:text-lg"><!--[-->`);
      ssrRenderList(tabList, (t, i) => {
        _push(`<li class="${ssrRenderClass(`relative top-[0.125rem] cursor-pointer border-b-4 px-2 py-2 text-center transition-all duration-300 hover:text-[#8A6659] md:px-4 ${unref(tab) === t.key ? "border-b-highlight" : "border-b-transparent"}`)}">${ssrInterpolate(t.name)}</li>`);
      });
      _push(`<!--]--></ul><div class="py-12 md:px-4">`);
      if (unref(tab) === "detail") {
        _push(ssrRenderComponent(_component_ContentSlot, {
          use: _ctx.$slots.detail
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(tab) === "include") {
        _push(ssrRenderComponent(_component_ContentSlot, {
          use: _ctx.$slots.include
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(tab) === "notice") {
        _push(ssrRenderComponent(_component_ContentSlot, {
          use: _ctx.$slots.notice
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(tab) === "policy") {
        _push(ssrRenderComponent(_component_ContentSlot, {
          use: _ctx.$slots.policy
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/DetailTab.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DetailTab-b1a36be6.mjs.map
