import { mergeProps, unref, useSSRContext } from 'file:///Users/apple/Desktop/website/LDC_website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'file:///Users/apple/Desktop/website/LDC_website/node_modules/vue/server-renderer/index.mjs';
import { u as useAssets } from './useAssets-cbb0f0b1.mjs';
import '../../renderer.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/h3/dist/index.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/devalue/index.js';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/destr/dist/index.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/hookable/dist/index.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/scule/dist/index.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/klona/dist/index.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/defu/dist/defu.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/ohash/dist/index.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/ufo/dist/index.mjs';
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
import './logo-gray-1174143e.mjs';
import './subtract-front-2-018c2ccb.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/pathe/dist/utils.mjs';

const _sfc_main = {
  __name: "DetailImage",
  __ssrInlineRender: true,
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full w-full flex-auto overflow-hidden rounded-tl-60" }, _attrs))}><img${ssrRenderAttr("src", unref(useAssets)(__props.src))}${ssrRenderAttr("alt", __props.alt)} class="h-full w-full object-cover object-center"></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/DetailImage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DetailImage-ee63c520.mjs.map
