import { u as useNuxtApp, a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, ref, withAsyncContext, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { getDocs, collection } from 'firebase/firestore';
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
import 'vue-router';
import 'firebase/app';
import '@vercel/analytics/nuxt';
import '@vercel/speed-insights/nuxt';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $db } = useNuxtApp();
    const db = $db;
    const posts = ref([]);
    async function fetchPosts() {
      const querySnapshot = await getDocs(collection(db, "blog"));
      posts.value = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
    }
    [__temp, __restore] = withAsyncContext(() => fetchPosts()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-700 py-16 px-4" }, _attrs))}><div class="max-w-2xl mx-auto"><h1 class="text-4xl font-extrabold text-white mb-12 text-center drop-shadow-lg">Blog Posts</h1><div class="flex flex-col gap-8"><!--[-->`);
      ssrRenderList(posts.value, (post) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: post.id,
          to: `/blog/${post.slug}`,
          class: "group block bg-white/90 rounded-2xl shadow-xl border border-white/30 p-6 transition-all duration-200 hover:shadow-pink-400 hover:shadow-2xl hover:-translate-y-1 hover:border-pink-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="text-2xl font-bold text-indigo-800 mb-2 group-hover:text-pink-700 transition"${_scopeId}>${ssrInterpolate(post.title)}</h2><p class="text-gray-700 text-base"${_scopeId}>${ssrInterpolate(post.excerpt)}</p>`);
            } else {
              return [
                createVNode("h2", { class: "text-2xl font-bold text-indigo-800 mb-2 group-hover:text-pink-700 transition" }, toDisplayString(post.title), 1),
                createVNode("p", { class: "text-gray-700 text-base" }, toDisplayString(post.excerpt), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DlavAxrb.mjs.map
