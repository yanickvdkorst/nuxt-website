import { H as Head } from './components-CB52x8mG.mjs';
import { u as useNuxtApp, a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, withAsyncContext, withCtx, unref, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { query, collection, where, getDocs } from 'firebase/firestore';
import { u as useAsyncData } from './asyncData-BBbM7BWL.mjs';
import './v3-DxdPFM9T.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import 'firebase/app';
import '@vercel/analytics/nuxt';
import '@vercel/speed-insights/nuxt';
import 'perfect-debounce';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $db } = useNuxtApp();
    const db = $db;
    const { data: hero } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("hero", async () => {
      const q = query(collection(db, "pages"), where("slug", "==", "homepage"));
      const querySnapshot = await getDocs(q);
      const docs = querySnapshot.docs.map((doc) => doc.data());
      if (docs.length > 0 && docs[0].hero_section) {
        return docs[0].hero_section;
      }
      return null;
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<title${_scopeId}>${ssrInterpolate(((_a = unref(hero)) == null ? void 0 : _a.title) || "Homepage")}</title><meta name="description"${ssrRenderAttr("content", ((_b = unref(hero)) == null ? void 0 : _b.description) || "Homepage description")}${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(((_c = unref(hero)) == null ? void 0 : _c.title) || "Homepage"), 1),
              createVNode("meta", {
                name: "description",
                content: ((_d = unref(hero)) == null ? void 0 : _d.description) || "Homepage description"
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(hero)) {
        _push(`<section class="relative flex flex-col items-center justify-center min-h-screen text-center text-white bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 overflow-hidden"><div class="absolute inset-0 bg-black/30 backdrop-blur-sm"></div><div class="relative z-10 p-8"><h1 class="text-5xl md:text-6xl font-extrabold drop-shadow-xl mb-4 animate-fade-in-up">${ssrInterpolate(unref(hero).title)}</h1><p class="text-lg md:text-lg max-w-2xl mx-auto animate-fade-in-up delay-200">${ssrInterpolate(unref(hero).description)}</p><div class="mt-8 flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-300">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/projecten",
          class: "px-6 py-3 rounded-full border border-white bg-white text-indigo-600 font-semibold shadow hover:bg-transparent hover:text-white hover:border border-white transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Bekijk projecten `);
            } else {
              return [
                createTextVNode(" Bekijk projecten ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact",
          class: "px-6 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-indigo-600 transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Neem contact op `);
            } else {
              return [
                createTextVNode(" Neem contact op ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-R-p3jT8n.mjs.map
