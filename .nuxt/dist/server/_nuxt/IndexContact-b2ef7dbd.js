import __nuxt_component_1 from "./Icon-f3127f2b.js";
import { mergeProps, useSSRContext, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main$1 = {
  __name: "IconInfo",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center" }, _attrs))}><div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#D9D9D9] md:h-[60px] md:w-[60px]">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: props.icon,
        size: "30",
        color: "#3F3E3E"
      }, null, _parent));
      _push(`</div><div class="ml-4 text-base leading-relaxed tracking-wider"><h5 class="font-medium">${ssrInterpolate(props.title)}</h5><p class="">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</p></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/IconInfo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_IconInfo = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "section container mx-auto px-6 py-12 lg:py-24" }, _attrs))}><div class="flex flex-col md:flex-row"><div class="w-full md:w-1/2"><h3 class="">現在就與我們聯繫！</h3><p class="mt-4 text-base leading-relaxed tracking-wider"> 想要預約課程、租借裝備、詢問下水等任何問題都歡迎聯絡我們 </p><div class="mt-8 flex flex-col items-start gap-6">`);
  _push(ssrRenderComponent(_component_IconInfo, {
    icon: "material-symbols:location-on",
    title: "地圖資訊"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`新北市貢寮區龍洞街1-5號`);
      } else {
        return [
          createTextVNode("新北市貢寮區龍洞街1-5號")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_IconInfo, {
    icon: "material-symbols:call",
    title: "聯絡電話"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`0939-098-057`);
      } else {
        return [
          createTextVNode("0939-098-057")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_IconInfo, {
    icon: "material-symbols:mail-outline",
    title: "信箱 Email"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`longdongcape@gmail.com`);
      } else {
        return [
          createTextVNode("longdongcape@gmail.com")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="mt-8 h-[483px] w-full overflow-hidden rounded-md md:ml-6 md:mt-0 md:w-1/2"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.6922214563933!2d121.91652557569961!3d25.112277877765788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d439e07d52ec9%3A0xabcd6322b8d21227!2z6b6N5rSe5bKs6KOd5YKZ5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1686813235795!5m2!1szh-TW!2stw" width="600" height="500" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/IndexContact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_5 as _
};
//# sourceMappingURL=IndexContact-b2ef7dbd.js.map
