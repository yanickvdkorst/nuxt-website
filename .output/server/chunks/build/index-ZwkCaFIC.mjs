import { H as Head } from './components-CB52x8mG.mjs';
import { u as useNuxtApp, a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, withAsyncContext, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { getDocs, collection } from 'firebase/firestore';
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
    const { data: projects } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("projects", async () => {
      const querySnapshot = await getDocs(collection($db, "projecten"));
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...serialize(doc.data())
      }));
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-700 min-h-screen py-8 px-4 text-white" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Projecten</title><meta name="description" content="Overzicht van alle projecten"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Projecten"),
              createVNode("meta", {
                name: "description",
                content: "Overzicht van alle projecten"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-4xl font-extrabold text-center mb-32 mt-16 text-white drop-shadow-lg tracking-tight"> Mijn projecten </h1><div class="w-full px-4 flex justify-center"><ul class="grid grid-cols-1 gap-10 animate-fade-in-up"><!--[-->`);
      ssrRenderList(unref(projects), (project) => {
        _push(`<li class="group relative">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/projecten/${project.slug || project.id}`,
          class: "absolute inset-0 z-10 rounded-2xl focus:outline-none",
          tabindex: "0",
          "aria-label": "Bekijk project"
        }, null, _parent));
        _push(`<div class="bg-white/90 max-w-7xl rounded-2xl shadow-2xl p-10 border border-white/40 flex flex-col md:flex-row gap-10 overflow-hidden relative z-0 transition-all duration-200 group-hover:shadow-pink-400 group-hover:shadow-2xl group-hover:-translate-y-1 group-hover:border-pink-400 cursor-pointer"><div class="flex-1 flex flex-col justify-center gap-4"><h2 class="text-3xl md:text-4xl font-extrabold text-indigo-800 drop-shadow-lg group-hover: transition">${ssrInterpolate(project.title || project.id)}</h2><p class="text-gray-700 text-lg">${ssrInterpolate(project.description || "Geen beschrijving beschikbaar")}</p><div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(project.tags, (tag, idx) => {
          _push(`<span class="inline-block bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div><div class="flex gap-2 items-center"><span class="inline-block w-fit px-6 py-2 bg-indigo-600 text-white rounded-full font-semibold shadow group-hover:bg-pink-600 transition"> Bekijk project \u2192 </span></div></div><div class="flex-1 flex items-center justify-center">`);
        if (project.image_url) {
          _push(`<img${ssrRenderAttr("src", project.image_url)} alt="Project afbeelding" class="rounded-2xl shadow-lg max-h-96 object-cover w-full">`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></li>`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projecten/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-ZwkCaFIC.mjs.map
