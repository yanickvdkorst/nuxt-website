import { H as Head } from './components-CB52x8mG.mjs';
import { u as useNuxtApp, a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, withAsyncContext, mergeProps, withCtx, createVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-700 min-h-screen py-8 px-16 text-white" }, _attrs))}>`);
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
      _push(`<h1 class="text-4xl font-extrabold text-center mb-32 text-white drop-shadow-lg tracking-tight"> Mijn projecten </h1><ul class="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in-up"><!--[-->`);
      ssrRenderList(unref(projects), (project) => {
        _push(`<li class="group bg-white/90 rounded-xl shadow-xl hover:shadow-indigo-400 transition-all duration-300 transform hover:-translate-y-1 p-4 border border-white/30 relative overflow-hidden"><span class="absolute top-3 right-3 bg-indigo-600 text-[10px] font-bold px-2 py-0.5 rounded-full shadow text-white uppercase tracking-widest transition"> Project </span>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/projecten/${project.slug || project.id}`,
          class: "block focus:outline-none"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="text-lg font-bold text-indigo-800 mb-2 group-hover:text-pink-700 transition"${_scopeId}>${ssrInterpolate(project.title || project.id)}</h2><p class="text-gray-700 text-sm mb-4 min-h-[32px]"${_scopeId}>${ssrInterpolate(project.description || "Geen beschrijving beschikbaar")}</p><span class="inline-block mt-2 px-4 py-1.5 bg-indigo-600 text-white rounded-full font-semibold shadow group-hover:bg-pink-600"${_scopeId}> Bekijk project \u2192 </span>`);
            } else {
              return [
                createVNode("h2", { class: "text-lg font-bold text-indigo-800 mb-2 group-hover:text-pink-700 transition" }, toDisplayString(project.title || project.id), 1),
                createVNode("p", { class: "text-gray-700 text-sm mb-4 min-h-[32px]" }, toDisplayString(project.description || "Geen beschrijving beschikbaar"), 1),
                createVNode("span", { class: "inline-block mt-2 px-4 py-1.5 bg-indigo-600 text-white rounded-full font-semibold shadow group-hover:bg-pink-600" }, " Bekijk project \u2192 ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
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
//# sourceMappingURL=index-CCc2MTsi.mjs.map
