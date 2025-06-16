import { b as buildAssetsURL } from '../nitro/nitro.mjs';
import { defineComponent, ref, withAsyncContext, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { query, collection, where, getDocs } from 'firebase/firestore';
import { _ as _export_sfc, u as useNuxtApp } from './server.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'ipx';
import 'firebase/app';
import '@vercel/analytics/nuxt';
import '@vercel/speed-insights/nuxt';

const _imports_0 = "" + buildAssetsURL("Yanick_small.DjfXtEKa.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $db } = useNuxtApp();
    const db = $db;
    const route = useRoute();
    const hero = ref(null);
    async function fetchHero(slug) {
      const q = query(collection(db, "pages"), where("slug", "==", slug));
      const querySnapshot = await getDocs(q);
      const docs = querySnapshot.docs.map((doc) => doc.data());
      hero.value = docs.length > 0 && docs[0].hero_section ? docs[0].hero_section : null;
    }
    [__temp, __restore] = withAsyncContext(() => fetchHero(route.params.slug)), await __temp, __restore();
    watch(
      () => route.params.slug,
      async (newSlug) => {
        await fetchHero(newSlug);
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex items-center flex-col md:justify-center py-16 px-4" }, _attrs))} data-v-c4405823><div class="text-center text-white animate-fade-in-up delay-800 flex items-center flex-col-reverse lg:flex-row gap-x-32" data-v-c4405823><div class="left mt-5 lg:mt-0" data-v-c4405823><h1 class="text-5xl font-bold" data-v-c4405823>${ssrInterpolate(((_a = hero.value) == null ? void 0 : _a.title) || "...")}</h1><div class="mt-4 lg:mt-8 flex gap-4 justify-center animate-fade-in delay-300" data-v-c4405823><a class="px-6 py-3 rounded-full border border-white bg-white text-indigo-600 font-semibold shadow hover:bg-transparent hover:text-white hover:border border-white transition" href="mailto:yanick.van.der.korst@kpnmail.nl" data-v-c4405823> Stuur een mail </a><a class="px-6 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-indigo-600 transition" href="https://www.linkedin.com/in/yanickvdk/" data-v-c4405823> LinkedIn </a></div></div><img${ssrRenderAttr("src", _imports_0)} class="w-128 h-128 object-cover rounded-lg shadow" alt="" data-v-c4405823></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c4405823"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-KQeXNGi5.mjs.map
