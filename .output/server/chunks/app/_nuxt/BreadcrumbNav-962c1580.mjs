import { _ as __nuxt_component_0$1 } from './nuxt-link-6bdec6f5.mjs';
import __nuxt_component_1 from './Icon-f3127f2b.mjs';
import { useSSRContext, withAsyncContext, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString } from 'vue';
import { u as useAsyncData } from './query-8ce04585.mjs';
import { u as useRoute } from '../server.mjs';
import { f as fetchContentNavigation } from './navigation-14a2574d.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "BreadcrumbNav",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const { path } = useRoute();
    const { data: nav } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("navigation", () => fetchContentNavigation())), __temp = await __temp, __restore(), __temp);
    const formatStructure = (arr, result) => {
      for (const item of arr) {
        const path2 = item._path;
        result[path2] = item.title;
        if (item.children) {
          formatStructure(item.children, result);
        }
      }
      return result;
    };
    const navWithoutPage = (_a = nav.value) == null ? void 0 : _a.filter((n) => n.children).map((n) => n._path);
    const pathAndTitleMap = formatStructure(nav.value, {});
    const pathArray = path.split("/").filter((o) => o !== "");
    const crumbs = [];
    let route = "";
    pathArray.forEach((p) => {
      route = `${route}/${p}`;
      if (navWithoutPage == null ? void 0 : navWithoutPage.includes(route)) {
        return;
      }
      crumbs.push(route);
    });
    const breadcrumb = crumbs.map((crumb) => ({
      title: pathAndTitleMap[crumb],
      path: crumb
    }));
    const curr = breadcrumb[breadcrumb.length - 1];
    const prev = breadcrumb.length > 1 ? breadcrumb[breadcrumb.length - 2] : null;
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_1;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "flex items-center text-sm font-medium tracking-wide text-main-bg-dark" }, _attrs))}><li class="hidden after:mx-2 after:content-[&#39;&gt;&#39;] md:inline-block">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ic:sharp-home",
              size: "24"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ic:sharp-home",
                size: "24"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><!--[-->`);
      ssrRenderList(unref(breadcrumb), (b, i) => {
        _push(`<!--[-->`);
        if (b.path === unref(path)) {
          _push(`<li class="hidden md:inline-block"><span class="text-[#8A6659]">${ssrInterpolate(b.title)}</span></li>`);
        } else {
          _push(`<li class="hidden after:mx-2 after:content-[&#39;&gt;&#39;] md:inline-block">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: b.path
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(b.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(b.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--><li class="text-[#8A6659] md:hidden">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: ((_a2 = unref(prev)) == null ? void 0 : _a2.path) || "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="relative bottom-[1px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ic:round-arrow-back-ios-new",
              size: "14px"
            }, null, _parent2, _scopeId));
            _push2(`</span> ${ssrInterpolate(unref(curr).title)}`);
          } else {
            return [
              createVNode("span", { class: "relative bottom-[1px]" }, [
                createVNode(_component_Icon, {
                  name: "ic:round-arrow-back-ios-new",
                  size: "14px"
                })
              ]),
              createTextVNode(" " + toDisplayString(unref(curr).title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BreadcrumbNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=BreadcrumbNav-962c1580.mjs.map
