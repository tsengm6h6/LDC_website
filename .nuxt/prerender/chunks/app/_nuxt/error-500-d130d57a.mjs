import { f as useHead } from '../server.mjs';
import { mergeProps, useSSRContext } from 'file:///Users/apple/Desktop/website/LDC_website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file:///Users/apple/Desktop/website/LDC_website/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/hookable/dist/index.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/unctx/dist/index.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/h3/dist/index.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/unhead/dist/index.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/apple/Desktop/website/LDC_website/node_modules/ufo/dist/index.mjs';
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
  __name: "error-500",
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    statusCode: {
      type: Number,
      default: 500
    },
    statusMessage: {
      type: String,
      default: "Server error"
    },
    description: {
      type: String,
      default: "This page is temporarily unavailable."
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [],
      style: [
        {
          children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))} data-v-06f637f2><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-06f637f2></div><div class="max-w-520px text-center" data-v-06f637f2><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-06f637f2>${ssrInterpolate(__props.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-06f637f2>${ssrInterpolate(__props.description)}</p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui-templates/dist/templates/error-500.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const error500 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-06f637f2"]]);

export { error500 as default };
//# sourceMappingURL=error-500-d130d57a.mjs.map
