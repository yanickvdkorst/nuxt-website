import { defineComponent, ref, withAsyncContext, watch, useSSRContext } from 'vue';
import { useRoute } from 'vue-router';
import { query, collection, where, getDocs } from 'firebase/firestore';
import { _ as _export_sfc, b as useNuxtApp } from './server.mjs';
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
import 'firebase/app';
import 'vue/server-renderer';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug] copy",
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[slug] copy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug__copy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8cf73c01"]]);

export { _slug__copy as default };
//# sourceMappingURL=_slug_ copy-BhI7nqhu.mjs.map
