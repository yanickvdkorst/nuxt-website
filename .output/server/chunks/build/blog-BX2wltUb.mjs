import { _ as _export_sfc, a as __nuxt_component_0, e as __nuxt_component_1 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import 'vue-router';
import 'firebase/app';
import 'firebase/firestore';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-layout" }, _attrs))} data-v-c23ad3ed><header class="header" data-v-c23ad3ed><h1 data-v-c23ad3ed>Mijn Blog</h1></header> \u{1F609} <main class="main-content" data-v-c23ad3ed><aside class="sidebar" data-v-c23ad3ed><h2 data-v-c23ad3ed>Categorie\xEBn</h2><ul data-v-c23ad3ed><li data-v-c23ad3ed>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/blog/category/tech" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Tech`);
      } else {
        return [
          createTextVNode("Tech")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-c23ad3ed>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/blog/category/design" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Design`);
      } else {
        return [
          createTextVNode("Design")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-c23ad3ed>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/blog/category/lifestyle" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Lifestyle`);
      } else {
        return [
          createTextVNode("Lifestyle")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></aside><section class="content" data-v-c23ad3ed>`);
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(`</section></main><footer class="footer" data-v-c23ad3ed> \xA9 2025 Mijn Blog - Alle rechten voorbehouden </footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c23ad3ed"]]);

export { blog as default };
//# sourceMappingURL=blog-BX2wltUb.mjs.map
