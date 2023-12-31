import { _ as __nuxt_component_5 } from './IndexContact-9039f9bc.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { b as _imports_0, c as _imports_2 } from './subtract-front-2-018c2ccb.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import './Icon-f8e9aef6.mjs';
import '../server.mjs';
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
import './config-d8d8a503.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_IndexContact = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative md:flex md:h-[100vh] md:items-center" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_IndexContact, null, null, _parent));
  _push(`<img${ssrRenderAttr("src", _imports_0)} alt="overlay" class="absolute right-0 top-[60px] -z-10 hidden opacity-80 md:inline-block"><img${ssrRenderAttr("src", _imports_2)} alt="overlay" class="absolute bottom-0 left-0 -z-10 hidden opacity-80 md:inline-block"></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contactus.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contactus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { contactus as default };
//# sourceMappingURL=contactus-ed200464.mjs.map
