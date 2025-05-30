import { _ as _export_sfc, u as useNuxtApp, a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
import '@vercel/analytics/nuxt';
import '@vercel/speed-insights/nuxt';
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-700 min-h-screen pt-24 pb-16 px-4 flex" }, _attrs))} data-v-ee1928ab>`);
      if (unref(project)) {
        _push(`<div class="w-full max-w bg-white/90 rounded-2xl shadow-2xl p-10 border border-white/40 relative animate-fade-in-up flex flex-col gap-6" data-v-ee1928ab><div class="button-container flex gap-4 items-center justify-between flex-1" data-v-ee1928ab>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/projecten",
          class: "inline-block px-6 py-2 bg-indigo-600 text-white rounded-full font-semibold shadow hover:bg-pink-600 transition"
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
        _push(`<div class="flex flex-wrap gap-2 mb-6" data-v-ee1928ab><!--[-->`);
        ssrRenderList(unref(project).tags, (tag, idx) => {
          _push(`<span class="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full shadow" data-v-ee1928ab>${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div></div><div class="title-container flex-6 flex items-center justify-center" data-v-ee1928ab><h1 class="text-5xl font-extrabold text-indigo-800 drop-shadow-lg" data-v-ee1928ab>${ssrInterpolate(unref(project).title)}</h1></div><div class="detail-container flex-1 flex justify-between items-center" data-v-ee1928ab><div class="mb-4 mt-1 ml-2" data-v-ee1928ab><p data-v-ee1928ab>Year</p><label class="mb-4 text-sm text-gray-400 font-light" for="date" data-v-ee1928ab>${ssrInterpolate(new Date(unref(project).publish_date).toLocaleDateString("nl-NL", { day: "2-digit", month: "2-digit", year: "numeric" }))}</label></div><a class="group flex items-center rounded-full text-indigo-600 bg-transparent font-semibold transition relative"${ssrRenderAttr("href", unref(project).github_link || "#")} target="_blank" rel="noopener" data-v-ee1928ab><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20" fill="none" data-v-ee1928ab><path d="M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 14.42 2.87 18.17 6.84 19.5C7.34 19.58 7.5 19.27 7.5 19V17.31C4.73 17.91 4.14 15.97 4.14 15.97C3.68 14.81 3.03 14.5 3.03 14.5C2.12 13.88 3.1 13.9 3.1 13.9C4.1 13.97 4.63 14.93 4.63 14.93C5.5 16.45 6.97 16 7.54 15.76C7.63 15.11 7.89 14.67 8.17 14.42C5.95 14.17 3.62 13.31 3.62 9.5C3.62 8.39 4 7.5 4.65 6.79C4.55 6.54 4.2 5.5 4.75 4.15C4.75 4.15 5.59 3.88 7.5 5.17C8.29 4.95 9.15 4.84 10 4.84C10.85 4.84 11.71 4.95 12.5 5.17C14.41 3.88 15.25 4.15 15.25 4.15C15.8 5.5 15.45 6.54 15.35 6.79C16 7.5 16.38 8.39 16.38 9.5C16.38 13.32 14.04 14.16 11.81 14.41C12.17 14.72 12.5 15.33 12.5 16.26V19C12.5 19.27 12.66 19.59 13.17 19.5C17.14 18.16 20 14.42 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z" fill="#4F39F6" data-v-ee1928ab></path></svg><span class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-indigo-700 whitespace-nowrap typewriter" data-v-ee1928ab> Open GitHub </span></a></div></div>`);
      } else {
        _push(`<div class="w-full max-w-2xl bg-red-50 text-red-700 rounded-2xl shadow-2xl p-10 border border-red-200 flex items-center justify-center" data-v-ee1928ab><p data-v-ee1928ab>Project niet gevonden.</p></div>`);
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
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ee1928ab"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-cFPxiJ_9.mjs.map
