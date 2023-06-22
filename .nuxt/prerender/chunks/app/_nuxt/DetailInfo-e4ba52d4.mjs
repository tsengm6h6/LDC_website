import _sfc_main$1 from './DetailImage-ee63c520.mjs';
import { mergeProps, useSSRContext } from 'file:///Users/apple/Desktop/website/LDC_website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrRenderAttr } from 'file:///Users/apple/Desktop/website/LDC_website/node_modules/vue/server-renderer/index.mjs';
import './useAssets-cbb0f0b1.mjs';
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
