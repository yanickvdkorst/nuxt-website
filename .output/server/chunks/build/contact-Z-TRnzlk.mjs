import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
import 'firebase/firestore';

const _imports_0 = "" + buildAssetsURL("Yanick_small.DjfXtEKa.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex items-center flex-col justify-center bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-700 py-12 px-4" }, _attrs))} data-v-c07264a6><div class="text-center text-white animate-fade-in-up delay-800 flex items-center flex-col-reverse lg:flex-row gap-x-32" data-v-c07264a6><div class="left mt-5 lg:mt-0" data-v-c07264a6><h1 class="text-5xl font-bold" data-v-c07264a6>Neem contact op</h1><div class="mt-4 lg:mt-8 flex gap-4 justify-center animate-fade-in delay-300" data-v-c07264a6><a class="px-6 py-3 rounded-full border border-white bg-white text-indigo-600 font-semibold shadow hover:bg-transparent hover:text-white hover:border border-white transition" href="mailto:yanick.van.der.korst@kpnmail.nl" data-v-c07264a6> Stuur een mail </a><a class="px-6 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-indigo-600 transition" href="https://www.linkedin.com/in/yanickvdk/" data-v-c07264a6> LinkedIn </a></div></div><img${ssrRenderAttr("src", _imports_0)} class="w-128 h-128 object-cover rounded-lg shadow" alt="" data-v-c07264a6></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c07264a6"]]);

export { contact as default };
//# sourceMappingURL=contact-Z-TRnzlk.mjs.map
