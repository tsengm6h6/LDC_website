import _sfc_main$1 from './DetailImage-ee63c520.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
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
import 'ufo';
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

const _sfc_main = {
  __name: "DetailInfo",
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
    tag: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DetailImage = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-8 flex flex-col gap-8 md:flex-row" }, _attrs))}><div class="md:min-h-[519px] md:w-1/2">`);
      _push(ssrRenderComponent(_component_DetailImage, {
        src: __props.src,
        alt: __props.alt
      }, null, _parent));
      _push(`</div><div class="flex flex-col items-start justify-between md:w-1/2"><h1 class="text-xl md:text-2xl">${ssrInterpolate(__props.title)}</h1>`);
      if (__props.tag) {
        _push(`<span class="-ml-1 mt-2 rounded bg-danger-light px-2 py-1 text-sm font-medium tracking-normal text-danger">${ssrInterpolate(__props.tag)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mb-4 mt-8 flex flex-1 flex-col items-start justify-start gap-6">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><a class="block w-full"${ssrRenderAttr("href", __props.link)} target="_blank" rel="noopener noreferrer"><button class="btn btn-secondary mt-4 w-full md:mt-0">\u7ACB\u5373\u5831\u540D</button></a></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/DetailInfo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DetailInfo-e4ba52d4.mjs.map
