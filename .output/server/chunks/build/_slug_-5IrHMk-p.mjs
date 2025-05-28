import { u as useNuxtApp, a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { getDocs, collection } from 'firebase/firestore';
import { u as useAsyncData } from './asyncData-BBbM7BWL.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'firebase/app';
import 'perfect-debounce';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $db } = useNuxtApp();
    const route = useRoute();
    function serialize(obj) {
      if (obj === null || obj === void 0) return obj;
      if (typeof obj !== "object") return obj;
      if (obj.toDate) return obj.toDate().toISOString();
      if (Array.isArray(obj)) return obj.map(serialize);
      const out = {};
      for (const key in obj) {
        out[key] = serialize(obj[key]);
      }
      return out;
    }
    const { data: project } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("project", async () => {
      const querySnapshot = await getDocs(collection($db, "projecten"));
      const allProjects = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...serialize(doc.data())
      }));
      const slug = route.params.slug;
      return allProjects.find((p) => p.slug === slug || p.id === slug) || null;
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-700 min-h-screen py-16 px-4 flex items-center justify-center" }, _attrs))}>`);
      if (unref(project)) {
        _push(`<div class="w-full max-w-2xl bg-white/90 rounded-2xl shadow-2xl p-10 border border-white/40 relative overflow-hidden animate-fade-in-up"><span class="absolute top-6 right-6 bg-indigo-600 text-xs font-bold px-3 py-1 rounded-full shadow text-white uppercase tracking-widest"> Project </span><h1 class="text-4xl font-extrabold text-indigo-800 mb-6 drop-shadow-lg">${ssrInterpolate(unref(project).title)}</h1><p class="text-gray-700 text-lg mb-8">${ssrInterpolate(unref(project).description)}</p>`);
        if (unref(project).content) {
          _push(`<div class="prose max-w-none"><!--[-->`);
          ssrRenderList(unref(project).content, (item, idx) => {
            _push(`<div>`);
            if (item.type === "text") {
              _push(`<p>${ssrInterpolate(item.value)}</p>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/projecten",
          class: "inline-block mt-8 px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold shadow hover:bg-pink-600 transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u2190 Terug naar projecten `);
            } else {
              return [
                createTextVNode(" \u2190 Terug naar projecten ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="w-full max-w-2xl bg-red-50 text-red-700 rounded-2xl shadow-2xl p-10 border border-red-200 flex items-center justify-center"><p>Project niet gevonden.</p></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projecten/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-5IrHMk-p.mjs.map
