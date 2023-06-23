import { _ as __nuxt_component_0 } from './BreadcrumbNav-962c1580.mjs';
import _sfc_main$1 from './ContentDoc-980de50c.mjs';
import { withAsyncContext, mergeProps, useSSRContext } from 'vue';
import { u as useRoute, g as useSeoMeta } from '../server.mjs';
import { u as useAsyncData, q as queryContent } from './query-8ce04585.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './nuxt-link-6bdec6f5.mjs';
import 'ufo';
import './Icon-f3127f2b.mjs';
import './config-d8d8a503.mjs';
import 'klona';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './_plugin-vue_export-helper-cc2b3d55.mjs';
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
import './navigation-14a2574d.mjs';
import './utils-f8f3cd09.mjs';
import './ssr-b54361f8.mjs';
import './preview-b7a8fe22.mjs';
import 'cookie-es';
import './ContentRenderer-cc314936.mjs';
import './ContentRendererMarkdown-1822c10b.mjs';
import 'property-information';
import './ContentQuery-beee60c5.mjs';

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g;
    let __temp, __restore;
    const { path } = useRoute();
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `content-${path}`,
      () => queryContent().where({ _path: path }).only(["title", "description", "img"]).findOne()
    )), __temp = await __temp, __restore(), __temp);
    useSeoMeta({
      title: ((_a = page.value) == null ? void 0 : _a.title) || "",
      ogTitle: ((_b = page.value) == null ? void 0 : _b.title) || "",
      description: ((_c = page.value) == null ? void 0 : _c.description) || ((_d = page.value) == null ? void 0 : _d.title),
      ogDescription: ((_e = page.value) == null ? void 0 : _e.description) || ((_f = page.value) == null ? void 0 : _f.title),
      ogImage: `_nuxt/assets/image/${(_g = page.value) == null ? void 0 : _g.img}` || "_nuxt/assets/image/about-1.jpg"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BreadcrumbNav = __nuxt_component_0;
      const _component_ContentDoc = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-6 pb-24 pt-12" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BreadcrumbNav, null, null, _parent));
      _push(ssrRenderComponent(_component_ContentDoc, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/experience/rock-climbing/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-0c067df2.mjs.map
