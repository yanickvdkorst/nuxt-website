import { defineComponent, ref, withAsyncContext, watch, mergeProps, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { query, collection, where, getDocs } from 'firebase/firestore';
import { _ as _sfc_main$1 } from './TekstAfbeelding-WV_fmU-V.mjs';
import { u as useNuxtApp } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'ipx';
import './v3-DxdPFM9T.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'firebase/app';
import '@vercel/analytics/nuxt';
import '@vercel/speed-insights/nuxt';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $db } = useNuxtApp();
    const db = $db;
    const route = useRoute();
    const post = ref(null);
    async function fetchPost(slug) {
      const q = query(collection(db, "blog"), where("slug", "==", slug));
      const querySnapshot = await getDocs(q);
      const docs = querySnapshot.docs.map((doc) => doc.data());
      post.value = docs.length > 0 ? docs[0] : null;
    }
    [__temp, __restore] = withAsyncContext(() => fetchPost(route.params.slug)), await __temp, __restore();
    watch(
      () => route.params.slug,
      async (newSlug) => {
        await fetchPost(newSlug);
      }
    );
    function resolveComponent(type) {
      switch (type) {
        case "tekst_afbeelding":
          return _sfc_main$1;
        // hier kun je andere blokken toevoegen:
        // case "text":
        //   return TextBlock;
        // case "image":
        //   return ImageBlock;
        default:
          return null;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-700 py-16 px-4 flex items-center justify-center" }, _attrs))}><div class="w-full max-w-3xl bg-white/90 rounded-2xl shadow-2xl p-8 md:p-12 border border-white/40 animate-fade-in-up">`);
      if (post.value) {
        _push(`<h1 class="text-4xl md:text-5xl font-extrabold text-indigo-800 mb-6 drop-shadow-lg">${ssrInterpolate(post.value.title)}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (post.value && post.value.fieldgroups) {
        _push(`<div><!--[-->`);
        ssrRenderList(post.value.fieldgroups, (blok, index) => {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(resolveComponent(blok.type)), {
            key: index,
            blok: blok.value
          }, null), _parent);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<p class="text-white text-center text-lg">Loading...</p>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-C3s1Ehf7.mjs.map
