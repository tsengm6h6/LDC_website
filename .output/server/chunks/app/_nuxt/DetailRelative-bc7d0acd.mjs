import { _ as __nuxt_component_2 } from './HoverImage-46d4c1b3.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { u as useAsyncData, q as queryContent } from './query-8ce04585.mjs';
import { u as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import './nuxt-link-6bdec6f5.mjs';
import 'ufo';
import './useAssets-cbb0f0b1.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
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
import './logo-gray-1174143e.mjs';
import './subtract-front-2-018c2ccb.mjs';
import 'pathe/utils';
import './utils-f8f3cd09.mjs';
import './ssr-b54361f8.mjs';
import './preview-b7a8fe22.mjs';
import 'cookie-es';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-fb-customer-chat';

const _sfc_main = {
  __name: "DetailRelative",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { path } = useRoute();
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `content-${path}`,
      () => queryContent().where({ _path: path }).findOne()
    )), __temp = await __temp, __restore(), __temp);
    const relative = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "content-cat",
      () => queryContent().where({ category: { $contains: page.value.category } }).find()
    )), __temp = await __temp, __restore(), __temp);
    const relativeItems = relative.data.value.filter((c) => c._path !== path).map((item) => ({
      title: item.title || item.navigation.title,
      description: item.description || item.navigation.description,
      src: item.img,
      alt: item.alt || "relative-image",
      path: item._path
    })).slice(0, 3);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoverImage = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-4 md:mt-12" }, _attrs))}><h3 class="px-2 pb-2 text-center text-base font-normal md:px-4 md:pb-4 md:text-lg">\u76F8\u95DC\u6D3B\u52D5</h3><div class="grid grid-cols-6 gap-6 border-t-2 border-solid border-t-main-bg-gray py-4 md:py-6"><!--[-->`);
      ssrRenderList(unref(relativeItems), (item, i) => {
        _push(`<div class="col-span-full overflow-hidden rounded-30 sm:col-span-3 md:col-span-2">`);
        _push(ssrRenderComponent(_component_HoverImage, item, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/DetailRelative.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DetailRelative-bc7d0acd.mjs.map
