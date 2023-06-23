import _sfc_main$1 from './ContentSlot-45352735.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'file:///Users/apple/Desktop/website/LDC_website/node_modules/vue/index.mjs';
import { u as useRoute, a as useRouter } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'file:///Users/apple/Desktop/website/LDC_website/node_modules/vue/server-renderer/index.mjs';
import './utils-f8f3cd09.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/ufo/dist/index.mjs';
import './ssr-b54361f8.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/hookable/dist/index.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/unctx/dist/index.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/h3/dist/index.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/unhead/dist/index.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/vue-fb-customer-chat/dist/vue-fb-customer-chat.cjs.js';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/destr/dist/index.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/scule/dist/index.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/klona/dist/index.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/ohash/dist/index.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/radix3/dist/index.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/pathe/dist/index.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/unified/index.js';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/micromark/lib/preprocess.js';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/micromark/lib/postprocess.js';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/micromark-util-character/index.js';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/remark-emoji/index.js';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/rehype-slug/index.js';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/remark-squeeze-paragraphs/index.js';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/rehype-external-links/index.js';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/remark-gfm/index.js';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/rehype-raw/index.js';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/remark-parse/index.js';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/remark-rehype/index.js';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/mdast-util-to-hast/index.js';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/detab/index.js';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/unist-builder/index.js';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/mdurl/index.js';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/slugify/slugify.js';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/unist-util-position/index.js';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/unist-util-visit/index.js';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/shiki-es/dist/shiki.node.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/unenv/runtime/npm/consola.mjs';

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
//# sourceMappingURL=DetailTab-e91cff40.mjs.map
